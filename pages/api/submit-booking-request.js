import sgMail from '@sendgrid/mail';
import rateLimit from '../../lib/rateLimit';

// Initialize SendGrid
if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
} else {
  console.error('SENDGRID_API_KEY environment variable not set');
}

// Configure rate limiter with environment variables or defaults
const bookingFormLimiter = rateLimit({
  limit: parseInt(process.env.BOOKING_FORM_RATE_LIMIT || '3', 10),
  windowMs: parseInt(process.env.BOOKING_FORM_RATE_WINDOW || '3600000', 10), // Default: 1 hour
});

// Valid time slots for validation
const VALID_TIME_SLOTS = [
  '9:30 AM - 11:30 AM',
  '10:00 AM - 12:00 PM',
  '12:00 PM - 2:00 PM',
  '2:00 PM - 4:00 PM',
  '3:00 PM - 5:00 PM',
];

// Valid service types for validation
const VALID_SERVICE_TYPES = ['standard', 'deep', 'move-in-out', 'office', 'custom'];

// Valid contact methods for validation
const VALID_CONTACT_METHODS = ['phone', 'email', 'text', 'any'];

// Helper function to format preferred contact method for display
function formatContactMethod(method) {
  if (!method) return '';
  const methodMap = {
    phone: 'Phone Call',
    email: 'Email',
    text: 'Text Message',
    any: 'Any method is fine',
  };
  return methodMap[method] || method;
}

export default async function handler(req, res) {
  if (req.method === 'POST') {
    // Apply rate limiting before processing the request
    await bookingFormLimiter(req, res);

    if (!process.env.SENDGRID_API_KEY) {
      console.error('SendGrid API key not configured.');
      return res.status(500).json({
        error: 'Server configuration error. Please try again later.',
      });
    }

    const {
      name,
      email,
      phone,
      address,
      serviceType,
      preferredContactMethod,
      preferredDate,
      preferredTimeSlot,
      message,
    } = req.body;

    // Enhanced validation
    const validationErrors = {};

    // Required fields validation
    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      validationErrors.name = 'Name is required';
    }

    if (!email || typeof email !== 'string' || email.trim().length === 0) {
      validationErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      validationErrors.email = 'Please enter a valid email address';
    }

    if (!phone || typeof phone !== 'string' || phone.trim().length === 0) {
      validationErrors.phone = 'Phone number is required';
    } else if (!/^\+?[0-9\s\-()]{7,}$/.test(phone)) {
      validationErrors.phone = 'Please enter a valid phone number';
    }

    if (!address || typeof address !== 'string' || address.trim().length === 0) {
      validationErrors.address = 'Service address is required';
    }

    if (!serviceType || typeof serviceType !== 'string') {
      validationErrors.serviceType = 'Service type is required';
    } else if (!VALID_SERVICE_TYPES.includes(serviceType)) {
      validationErrors.serviceType = 'Please select a valid service type';
    }

    // Preferred contact method validation
    if (!preferredContactMethod || typeof preferredContactMethod !== 'string') {
      validationErrors.preferredContactMethod = 'Preferred contact method is required';
    } else if (!VALID_CONTACT_METHODS.includes(preferredContactMethod)) {
      validationErrors.preferredContactMethod = 'Please select a valid contact method';
    }

    // Date validation
    if (!preferredDate || typeof preferredDate !== 'string') {
      validationErrors.preferredDate = 'Preferred date is required';
    } else {
      // Check if it's a valid date format (YYYY-MM-DD)
      const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
      if (!dateRegex.test(preferredDate)) {
        validationErrors.preferredDate = 'Invalid date format. Please use YYYY-MM-DD format.';
      } else {
        // Check if it's a valid date
        const selectedDate = new Date(preferredDate);
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        if (isNaN(selectedDate.getTime())) {
          validationErrors.preferredDate = 'Please select a valid date';
        } else if (selectedDate < today) {
          validationErrors.preferredDate = 'Please select a date in the future';
        }
      }
    }

    // Time slot validation
    if (!preferredTimeSlot || typeof preferredTimeSlot !== 'string') {
      validationErrors.preferredTimeSlot = 'Preferred time slot is required';
    } else if (!VALID_TIME_SLOTS.includes(preferredTimeSlot)) {
      validationErrors.preferredTimeSlot = 'Please select a valid time slot';
    }

    // Check if there are any validation errors
    if (Object.keys(validationErrors).length > 0) {
      return res.status(400).json({
        error: 'Validation failed',
        details: validationErrors,
      });
    }

    try {
      // Get email configuration
      const recipientEmail =
        process.env.CONTACT_FORM_RECIPIENT_EMAIL || process.env.SENDGRID_FROM_EMAIL;
      const fromEmail = process.env.SENDGRID_FROM_EMAIL;
      const fromName = process.env.EMAIL_FROM_NAME || 'Gathered Roots Cleaning';

      if (!recipientEmail || !fromEmail) {
        console.error(
          'Email configuration missing (CONTACT_FORM_RECIPIENT_EMAIL or SENDGRID_FROM_EMAIL).'
        );
        return res.status(500).json({
          error: 'Server configuration error. Please contact support.',
        });
      }

      console.log('Booking request received via email (Square handles booking data)');

      // Send Notification Email to Business
      try {
        const businessEmailMsg = {
          to: recipientEmail,
          from: {
            email: fromEmail,
            name: fromName,
          },
          subject: 'New Booking Request Received!',
          html: `
            <h2>New Booking Request</h2>
            <p>A new booking request has been submitted:</p>
            <ul>
              <li><strong>Name:</strong> ${name}</li>
              <li><strong>Email:</strong> ${email}</li>
              <li><strong>Phone:</strong> ${phone}</li>
              <li><strong>Address:</strong> ${address}</li>
              <li><strong>Service Type:</strong> ${serviceType}</li>
              <li><strong>Preferred Contact Method:</strong> ${formatContactMethod(preferredContactMethod)}</li>
              <li><strong>Preferred Date:</strong> ${preferredDate}</li>
              <li><strong>Preferred Time:</strong> ${preferredTimeSlot}</li>
              <li><strong>Message:</strong> ${message || 'N/A'}</li>
            </ul>
            <hr>
            <p><em>Submitted on ${new Date().toLocaleString()}</em></p>
            <p><strong>Note:</strong> Booking data is managed through Square.</p>
          `,
        };

        await sgMail.send(businessEmailMsg);
        console.log('Business notification email sent successfully via SendGrid.');

        // Send Confirmation Email to Customer
        const customerEmailMsg = {
          to: email,
          from: {
            email: fromEmail,
            name: fromName,
          },
          subject: 'Your Booking Request with Gathered Roots Cleaning',
          html: `
            <h2>Thank you for your booking request!</h2>
            <p>Hello ${name},</p>
            <p>Thank you for your booking request with Gathered Roots Cleaning! We have received the following details:</p>
            <ul>
              <li><strong>Service Type:</strong> ${serviceType}</li>
              <li><strong>Preferred Contact Method:</strong> ${formatContactMethod(preferredContactMethod)}</li>
              <li><strong>Preferred Date:</strong> ${preferredDate}</li>
              <li><strong>Preferred Time:</strong> ${preferredTimeSlot}</li>
              <li><strong>Service Address:</strong> ${address}</li>
              ${message ? `<li><strong>Additional Notes:</strong> ${message}</li>` : ''}
            </ul>
            <p>We will review your request and get back to you via ${formatContactMethod(preferredContactMethod).toLowerCase()} within 24 hours to confirm availability and discuss the next steps.</p>
            <p>If you have any urgent questions, please feel free to contact us directly.</p>
            <hr>
            <p>Best regards,<br>The Gathered Roots Cleaning Team</p>
          `,
        };

        await sgMail.send(customerEmailMsg);
        console.log('Customer confirmation email sent successfully via SendGrid.');
      } catch (emailError) {
        console.error('SendGrid email sending error:', emailError);
        return res.status(500).json({
          error: 'Failed to send booking notification emails. Please try again later.',
          details: process.env.NODE_ENV === 'development' ? emailError.message : undefined,
        });
      }

      // Return success response
      res.status(200).json({
        message:
          'Booking request submitted successfully! We will contact you within 24 hours to confirm availability.',
        success: true,
      });
    } catch (error) {
      console.error('Error processing booking request:', error);
      res.status(500).json({
        error: 'Failed to process booking request. Please try again later.',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined,
      });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
