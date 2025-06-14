import type { NextApiRequest, NextApiResponse } from 'next';
import sgMail from '@sendgrid/mail';
import { z } from 'zod';

// Import rate limiter
import rateLimit from '../../lib/rateLimit';

// Environment Variables (to be set in Vercel dashboard):
// SENDGRID_API_KEY: Your SendGrid API key (starts with SG.)
// SENDGRID_FROM_EMAIL: Your verified sender email (e.g., hello@gatheredrootscleaning.com)
// CONTACT_FORM_RECIPIENT_EMAIL: Email address for business to receive submissions
// CONTACT_FORM_RATE_LIMIT: Number of allowed submissions per IP in the time window (default: 5)
// CONTACT_FORM_RATE_WINDOW: Time window in milliseconds for rate limiting (default: 60000 = 1 minute)

const contactFormSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }).max(255),
  email: z.string().email({ message: 'Invalid email address' }).max(255),
  message: z.string().min(10, { message: 'Message should be at least 10 characters long' }),
  phone: z.string().max(50).optional().nullable(),
  service: z.string().optional().nullable(),
  preferredContactMethod: z
    .string()
    .min(1, { message: 'Preferred contact method is required' })
    .optional()
    .nullable(),
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

// Helper function to format preferred contact method for display
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

// Configure rate limiter with environment variables or defaults
const contactFormLimiter = rateLimit({
  limit: parseInt(process.env.CONTACT_FORM_RATE_LIMIT || '5', 10),
  windowMs: parseInt(process.env.CONTACT_FORM_RATE_WINDOW || '60000', 10), // Default: 1 minute
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  // Apply rate limiting before processing the request
  await contactFormLimiter(req, res);

  if (!process.env.SENDGRID_API_KEY) {
    console.error('SendGrid API key not configured.');
    return res.status(500).json({ message: 'Server configuration error. Please try again later.' });
  }

  try {
    // 1. Validate Input
    const validationResult = contactFormSchema.safeParse(req.body);
    if (!validationResult.success) {
      return res.status(400).json({
        message: 'Validation failed',
        errors: validationResult.error.flatten().fieldErrors,
      });
    }
    const { name, email, message, phone, service, preferredContactMethod } = validationResult.data;

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
        subject: `New Contact Form Submission from ${escapeHtml(name)}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          ${phone ? `<p><strong>Phone:</strong> ${escapeHtml(phone)}</p>` : ''}
          ${service ? `<p><strong>Service Requested:</strong> ${escapeHtml(service)}</p>` : ''}
          ${preferredContactMethod ? `<p><strong>Preferred Contact Method:</strong> ${escapeHtml(formatContactMethod(preferredContactMethod))}</p>` : ''}
          <p><strong>Message:</strong></p>
          <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
          <hr>
          <p><em>Submitted on ${new Date().toLocaleString()}</em></p>
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
        subject: 'Thank you for contacting Gathered Roots Cleaning',
        html: `
          <h2>Thank you for your message!</h2>
          <p>Hi ${escapeHtml(name)},</p>
          <p>Thank you for reaching out to Gathered Roots Cleaning. We have received your message and will get back to you ${preferredContactMethod ? `via ${formatContactMethod(preferredContactMethod).toLowerCase()}` : ''} as soon as possible.</p>
          ${service ? `<p><strong>Service Requested:</strong> ${escapeHtml(service)}</p>` : ''}
          ${preferredContactMethod ? `<p><strong>Your Preferred Contact Method:</strong> ${escapeHtml(formatContactMethod(preferredContactMethod))}</p>` : ''}
          <p><strong>Your message:</strong></p>
          <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
          <hr>
          <p>Best regards,<br>The Gathered Roots Cleaning Team</p>
        `,
      };

      await sgMail.send(customerEmailMsg);
      console.log('Customer confirmation email sent successfully via SendGrid.');
    } catch (emailError) {
      console.error('Customer confirmation email error:', emailError);
      // Don't fail the request if confirmation email fails
    }

    return res.status(200).json({
      message: 'Your message has been sent successfully! We will get back to you soon.',
    });
  } catch (error) {
    console.error('Contact form error:', error);
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

// Email configuration documentation:
// - SENDGRID_API_KEY: Your SendGrid API key (starts with SG.)
// - SENDGRID_FROM_EMAIL: Your verified sender email (e.g., hello@gatheredrootscleaning.com)
// - CONTACT_FORM_RECIPIENT_EMAIL: Email address for business to receive submissions
