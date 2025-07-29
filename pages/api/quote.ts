import type { NextApiRequest, NextApiResponse } from 'next';
import sgMail from '@sendgrid/mail';
import { z } from 'zod';

// Import rate limiter
import rateLimit from '../../lib/rateLimit';

// Environment Variables (to be set in Vercel dashboard):
// SENDGRID_API_KEY: Your SendGrid API key (starts with SG.)
// SENDGRID_FROM_EMAIL: Your verified sender email (e.g., hello@gatheredrootscleaning.com)
// CONTACT_FORM_RECIPIENT_EMAIL: Email address for business to receive submissions
// QUOTE_FORM_RATE_LIMIT: Number of allowed submissions per IP in the time window (default: 3)
// QUOTE_FORM_RATE_WINDOW: Time window in milliseconds for rate limiting (default: 3600000 = 1 hour)

const quoteFormSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }).max(255),
  email: z.string().email({ message: 'Invalid email address' }).max(255),
  phone: z.string().min(7, { message: 'Phone number is required' }).max(50),
  address: z.string().min(1, { message: 'Property address is required' }).max(500),
  propertyType: z.string().min(1, { message: 'Property type is required' }),
  bedrooms: z.string().optional().nullable(),
  bathrooms: z.string().optional().nullable(),
  squareFootage: z.string().optional().nullable(),
  service: z.string().min(1, { message: 'Service type is required' }),
  frequency: z.string().min(1, { message: 'Service frequency is required' }),
  preferredContactMethod: z.string().min(1, { message: 'Preferred contact method is required' }),
  preferredDate: z.string().optional().nullable(),
  details: z.string().optional().nullable(),
  pets: z.string().optional().nullable(),
  specialRequests: z.string().optional().nullable(),
  consent: z
    .boolean()
    .refine((val) => val === true, { message: 'You must consent to us contacting you.' }),
});

// Initialize SendGrid
if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
} else {
  console.error('SENDGRID_API_KEY environment variable not set');
}

// Helper function to escape HTML for email safety
function escapeHtml(str: string | undefined | null): string {
  if (str === undefined || str === null) return '';
  return str.replace(
    /[&<>'"]/g,
    (tag) =>
      ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;',
      })[tag] || tag
  );
}

// Helper function to format display values
function formatDisplayValue(value: string | undefined | null, fallback = 'Not specified'): string {
  return value && value.trim() ? escapeHtml(value) : fallback;
}

// Helper function to format service type for display
function formatServiceType(service: string | undefined | null): string {
  if (!service) return '';
  const serviceMap: { [key: string]: string } = {
    standard: 'Standard Clean',
    deep: 'Deep Clean',
    move: 'Move-In/Move-Out Clean',
    'property-management': 'Property Management & Office Spaces',
    custom: 'Custom Service',
  };
  return serviceMap[service] || service;
}

// Helper function to format frequency for display
function formatFrequency(frequency: string | undefined | null): string {
  if (!frequency) return '';
  const frequencyMap: { [key: string]: string } = {
    'one-time': 'One-time service',
    weekly: 'Weekly',
    'bi-weekly': 'Every two weeks',
    monthly: 'Monthly',
    quarterly: 'Quarterly',
    custom: 'Custom schedule',
  };
  return frequencyMap[frequency] || frequency;
}

// Helper function to format contact method for display
function formatContactMethod(method: string | undefined | null): string {
  if (!method) return '';
  const methodMap: { [key: string]: string } = {
    phone: 'Phone Call',
    email: 'Email',
    text: 'Text Message',
    any: 'Any method is fine',
  };
  return methodMap[method] || method;
}

// Helper function to format property type for display
function formatPropertyType(type: string | undefined | null): string {
  if (!type) return '';
  const typeMap: { [key: string]: string } = {
    house: 'Single-family home',
    apartment: 'Apartment/Condo',
    townhouse: 'Townhouse',
    office: 'Office space',
    commercial: 'Commercial property',
    other: 'Other',
  };
  return typeMap[type] || type;
}

// Configure rate limiter with environment variables or defaults
const quoteFormLimiter = rateLimit({
  limit: parseInt(process.env.QUOTE_FORM_RATE_LIMIT || '3', 10),
  windowMs: parseInt(process.env.QUOTE_FORM_RATE_WINDOW || '3600000', 10), // Default: 1 hour
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  // Apply rate limiting before processing the request
  await quoteFormLimiter(req, res);

  if (!process.env.SENDGRID_API_KEY) {
    console.error('SendGrid API key not configured.');
    return res.status(500).json({ message: 'Server configuration error. Please try again later.' });
  }

  try {
    // 1. Validate Input
    const validationResult = quoteFormSchema.safeParse(req.body);
    if (!validationResult.success) {
      return res.status(400).json({
        message: 'Validation failed',
        errors: validationResult.error.flatten().fieldErrors,
      });
    }
    
    const { 
      name, 
      email, 
      phone, 
      address, 
      propertyType, 
      bedrooms, 
      bathrooms, 
      squareFootage,
      service, 
      frequency, 
      preferredContactMethod, 
      preferredDate,
      details,
      pets,
      specialRequests
    } = validationResult.data;

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
        message: 'Server configuration error. Please contact support.',
      });
    }

    // Send Notification Email to Business
    try {
      const businessEmailMsg = {
        to: recipientEmail,
        from: {
          email: fromEmail,
          name: fromName,
        },
        replyTo: email,
        subject: `New Quote Request from ${escapeHtml(name)}`,
        html: `
          <h2>New Quote Request Received</h2>
          <p>A detailed quote request has been submitted. Here are the details:</p>
          
          <h3>📞 Contact Information</h3>
          <ul>
            <li><strong>Name:</strong> ${escapeHtml(name)}</li>
            <li><strong>Email:</strong> ${escapeHtml(email)}</li>
            <li><strong>Phone:</strong> ${escapeHtml(phone)}</li>
            <li><strong>Preferred Contact Method:</strong> ${formatContactMethod(preferredContactMethod)}</li>
          </ul>

          <h3>🏠 Property Information</h3>
          <ul>
            <li><strong>Address:</strong> ${escapeHtml(address)}</li>
            <li><strong>Property Type:</strong> ${formatPropertyType(propertyType)}</li>
            <li><strong>Bedrooms:</strong> ${formatDisplayValue(bedrooms)}</li>
            <li><strong>Bathrooms:</strong> ${formatDisplayValue(bathrooms)}</li>
            <li><strong>Square Footage:</strong> ${formatDisplayValue(squareFootage)}</li>
          </ul>

          <h3>🧹 Service Details</h3>
          <ul>
            <li><strong>Service Type:</strong> ${formatServiceType(service)}</li>
            <li><strong>Frequency:</strong> ${formatFrequency(frequency)}</li>
            <li><strong>Preferred Start Date:</strong> ${formatDisplayValue(preferredDate)}</li>
            <li><strong>Pets:</strong> ${formatDisplayValue(pets)}</li>
          </ul>

          ${details ? `
          <h3>📝 Property Details & Condition</h3>
          <p>${escapeHtml(details).replace(/\n/g, '<br>')}</p>
          ` : ''}

          ${specialRequests ? `
          <h3>⭐ Special Requests</h3>
          <p>${escapeHtml(specialRequests).replace(/\n/g, '<br>')}</p>
          ` : ''}

          <hr>
          <p><em>Submitted on ${new Date().toLocaleString()}</em></p>
          <p><small>Please respond within 24 hours using the customer's preferred contact method.</small></p>
        `,
      };

      await sgMail.send(businessEmailMsg);
      console.log('Business notification email sent successfully via SendGrid.');
    } catch (emailError) {
      console.error('SendGrid email sending error:', emailError);
      return res.status(500).json({
        message: 'Failed to send notification email. Please try again later.',
        error:
          process.env.NODE_ENV === 'development'
            ? emailError instanceof Error
              ? emailError.message
              : String(emailError)
            : undefined,
      });
    }

    // Send Confirmation Email to Customer
    try {
      const customerEmailMsg = {
        to: email,
        from: {
          email: fromEmail,
          name: fromName,
        },
        subject: 'Your Quote Request - Gathered Roots Cleaning',
        html: `
          <h2>Thank you for your quote request!</h2>
          <p>Hi ${escapeHtml(name)},</p>
          <p>Thank you for requesting a quote from Gathered Roots Cleaning. We have received your detailed information and will provide you with a personalized quote within 24 hours.</p>
          
          <h3>📋 Your Request Summary</h3>
          <ul>
            <li><strong>Property:</strong> ${escapeHtml(address)}</li>
            <li><strong>Service:</strong> ${formatServiceType(service)}</li>
            <li><strong>Frequency:</strong> ${formatFrequency(frequency)}</li>
            <li><strong>Contact Method:</strong> ${formatContactMethod(preferredContactMethod)}</li>
            ${preferredDate ? `<li><strong>Preferred Start Date:</strong> ${escapeHtml(preferredDate)}</li>` : ''}
          </ul>

          <h3>🔍 What's Next?</h3>
          <p>Our team will review your request and contact you ${formatContactMethod(preferredContactMethod).toLowerCase()} with:</p>
          <ul>
            <li>A detailed, personalized quote for your cleaning needs</li>
            <li>Available scheduling options</li>
            <li>Answers to any questions you may have</li>
            <li>Information about our cleaning process and products</li>
          </ul>

          <p><strong>Response Time:</strong> We typically respond within 24 hours, often much sooner during business hours.</p>

          <p>If you have any urgent questions or need to modify your request, please feel free to contact us directly.</p>

          <hr>
          <p>Best regards,<br>The Gathered Roots Cleaning Team</p>
          <p><em>Professional cleaning services for Lewiston, ID and surrounding areas</em></p>
        `,
      };

      await sgMail.send(customerEmailMsg);
      console.log('Customer confirmation email sent successfully via SendGrid.');
    } catch (emailError) {
      console.error('Customer confirmation email error:', emailError);
      // Don't fail the request if confirmation email fails
    }

    return res.status(200).json({
      message: 'Your quote request has been submitted successfully! We will contact you within 24 hours with a personalized quote.',
    });
  } catch (error) {
    console.error('Quote form error:', error);
    return res.status(500).json({
      message: 'An unexpected error occurred. Please try again later.',
      error:
        process.env.NODE_ENV === 'development'
          ? error instanceof Error
            ? error.message
            : String(error)
          : undefined,
    });
  }
} 