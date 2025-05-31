import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import { z } from 'zod';

// Import rate limiter
import rateLimit from '../../lib/rateLimit';

// Environment Variables (to be set in .env.local):
// SMTP_HOST: SMTP server hostname
// SMTP_PORT: SMTP server port (e.g., 587 or 465)
// SMTP_USER: SMTP username
// SMTP_PASSWORD: SMTP password
// SMTP_SECURE: 'true' if using SSL/TLS (typically for port 465), 'false' otherwise
// MAILER_FROM_ADDRESS: Email address to send emails from (e.g., 'noreply@yourdomain.com')
// CONTACT_FORM_RECIPIENT_EMAIL: Email address for Gathered Roots Cleaning to receive submissions
// CONTACT_FORM_RATE_LIMIT: Number of allowed submissions per IP in the time window (default: 5)
// CONTACT_FORM_RATE_WINDOW: Time window in milliseconds for rate limiting (default: 60000 = 1 minute)

const contactFormSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }).max(255),
  email: z.string().email({ message: 'Invalid email address' }).max(255),
  message: z.string().min(10, { message: 'Message should be at least 10 characters long' }),
  phone: z.string().max(50).optional().nullable(),
  service: z.string().optional().nullable(),
  consent: z
    .boolean()
    .refine((val) => val === true, { message: 'You must consent to us contacting you.' }),
});

// Initialize Nodemailer transporter
// Ensure your SMTP environment variables are correctly set in .env.local
let transporter: nodemailer.Transporter;
try {
  transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587', 10),
    secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });
} catch (error) {
  console.error('Failed to initialize Nodemailer transporter:', error);
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

  if (!transporter) {
    console.error('Email transporter not initialized.');
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
    const { name, email, message, phone, service } = validationResult.data;

    // Note: Client contact information is now handled by Square
    // This endpoint only sends email notifications

    // Send Notification Email to Gathered Roots Cleaning
    const recipientEmail = process.env.CONTACT_FORM_RECIPIENT_EMAIL;
    const mailerFrom = process.env.MAILER_FROM_ADDRESS;

    if (!recipientEmail || !mailerFrom) {
      console.error(
        'Email configuration (CONTACT_FORM_RECIPIENT_EMAIL or MAILER_FROM_ADDRESS) missing.'
      );
      return res.status(500).json({
        message: 'Server configuration error. Please contact support.',
      });
    }

    try {
      await transporter.sendMail({
        from: `"${escapeHtml(name)}" <${escapeHtml(mailerFrom)}>`,
        replyTo: email, // User's email
        to: recipientEmail, // Business email
        subject: `New Contact Form Submission from ${escapeHtml(name)}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          ${phone ? `<p><strong>Phone:</strong> ${escapeHtml(phone)}</p>` : ''}
          ${service ? `<p><strong>Service Requested:</strong> ${escapeHtml(service)}</p>` : ''}
          <p><strong>Message:</strong></p>
          <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
          <hr>
          <p><em>Submitted on ${new Date().toLocaleString()}</em></p>
        `,
      });
      console.log('Contact form notification email sent successfully.');
    } catch (emailError) {
      console.error('Email sending error:', emailError);
      return res.status(500).json({
        message: 'Failed to send notification email. Please try again later.',
        error: process.env.NODE_ENV === 'development' ? 
          (emailError instanceof Error ? emailError.message : String(emailError)) : 
          undefined
      });
    }

    // Send confirmation email to the user
    try {
      await transporter.sendMail({
        from: `"Gathered Roots Cleaning" <${escapeHtml(mailerFrom)}>`,
        to: email,
        subject: 'Thank you for contacting Gathered Roots Cleaning',
        html: `
          <h2>Thank you for your message!</h2>
          <p>Hi ${escapeHtml(name)},</p>
          <p>Thank you for reaching out to Gathered Roots Cleaning. We have received your message and will get back to you as soon as possible.</p>
          ${service ? `<p><strong>Service Requested:</strong> ${escapeHtml(service)}</p>` : ''}
          <p><strong>Your message:</strong></p>
          <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
          <hr>
          <p>Best regards,<br>The Gathered Roots Cleaning Team</p>
        `,
      });
      console.log('Confirmation email sent to user successfully.');
    } catch (emailError) {
      console.error('Confirmation email error:', emailError);
      // Don't fail the request if confirmation email fails
    }

    return res.status(200).json({
      message: 'Your message has been sent successfully! We will get back to you soon.',
    });

  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(500).json({
      message: 'An unexpected error occurred. Please try again later.',
      error: process.env.NODE_ENV === 'development' ? 
        (error instanceof Error ? error.message : String(error)) : 
        undefined
    });
  }
}

// Email configuration documentation:
// - SMTP_HOST: SMTP server hostname
// - SMTP_PORT: SMTP server port (e.g., 587 or 465)  
// - SMTP_USER: SMTP username
// - SMTP_PASSWORD: SMTP password
// - SMTP_SECURE: 'true' if using SSL/TLS (typically for port 465), 'false' otherwise
// - MAILER_FROM_ADDRESS: Email address to send emails from
// - CONTACT_FORM_RECIPIENT_EMAIL: Email address for business to receive submissions
