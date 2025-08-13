# Google Workspace Email Setup Guide

## Overview

This guide walks you through integrating Google Workspace with your Gathered Roots Cleaning contact forms. Since you've already set up the TXT record, this covers the remaining configuration steps.

## Prerequisites

✅ **Already Completed:**

- Google Workspace account created
- DNS TXT record configured for domain verification
- Domain verification completed in Google Workspace Admin Console

## Required Configuration Steps

### 1. Set Up App Password for SMTP

Since your forms use SMTP authentication, you'll need to create an App Password:

1. **Sign in to your Google Workspace Admin Console:**

   - Go to [admin.google.com](https://admin.google.com)
   - Sign in with your admin account

2. **Enable 2-Factor Authentication (if not already enabled):**

   - Go to Security → 2-step verification
   - Follow the setup process for your admin account

3. **Generate App Password:**
   - Go to Security → App passwords
   - Select "Mail" as the app
   - Generate a new app password
   - **Save this password** - you'll need it for your environment configuration

### 2. Configure Email Addresses

Set up the following email addresses in your Google Workspace:

- `contact@yourdomain.com` - Primary contact form recipient
- `noreply@yourdomain.com` - For automated emails (optional but recommended)
- `admin@yourdomain.com` - For admin notifications

### 3. Update Environment Configuration

Update your `.env.local` file with your Google Workspace credentials:

```env
# Google Workspace SMTP Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=contact@yourdomain.com
SMTP_PASSWORD=your-generated-app-password
SMTP_SECURE=false

# Email Addresses
MAILER_FROM_ADDRESS=noreply@yourdomain.com
CONTACT_FORM_RECIPIENT_EMAIL=contact@yourdomain.com
ADMIN_NOTIFICATION_EMAIL=admin@yourdomain.com
EMAIL_FROM_NAME=Gathered Roots Cleaning

# Alternative naming (for compatibility)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=contact@yourdomain.com
EMAIL_PASS=your-generated-app-password
EMAIL_FROM_ADDRESS=noreply@yourdomain.com
```

### 4. Update Production Environment Variables

For your production deployment (Vercel/hosting platform), update these environment variables:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=contact@yourdomain.com
SMTP_PASSWORD=your-generated-app-password
SMTP_SECURE=false
MAILER_FROM_ADDRESS=noreply@yourdomain.com
CONTACT_FORM_RECIPIENT_EMAIL=contact@yourdomain.com
ADMIN_NOTIFICATION_EMAIL=admin@yourdomain.com
EMAIL_FROM_NAME=Gathered Roots Cleaning
```

## Email Flow Configuration

### Contact Form Emails

When someone submits the contact form:

1. **Business Notification** sent to `contact@yourdomain.com`:

   - Contains all form details
   - Customer's reply-to address for easy response
   - Professional formatting with business branding

2. **Customer Confirmation** sent to customer's email:
   - Thank you message
   - Confirmation of their inquiry
   - Professional signature from Gathered Roots Cleaning

### Booking Form Emails

When someone submits a booking request:

1. **Booking Notification** sent to `contact@yourdomain.com`:

   - Complete booking details (service, date, time, address)
   - Customer contact information
   - Service-specific requirements

2. **Booking Confirmation** sent to customer:
   - Confirmation of booking request
   - Next steps information
   - Professional business signature

## Testing the Setup

### 1. Test Local Development

```bash
# Copy environment template
cp template.env .env.local

# Edit with your actual Google Workspace credentials
nano .env.local

# Install dependencies and start development server
npm install
npm run dev

# Test form submissions at http://localhost:3000
```

### 2. Verify Email Configuration

```bash
# Run the built-in verification script
npm run verify-forms
```

This script will:

- Check all required environment variables
- Test SMTP connectivity
- Verify form API endpoints
- Confirm email sending functionality

### 3. Production Testing

After deploying with updated environment variables:

1. Submit test contact form
2. Submit test booking request
3. Verify emails are received at `contact@yourdomain.com`
4. Check customer confirmation emails

## Security Best Practices

### App Password Security

- ✅ Use a unique app password for this application
- ✅ Store securely in environment variables
- ✅ Never commit passwords to version control
- ✅ Regularly rotate app passwords

### Email Security

- ✅ Use `noreply@yourdomain.com` for automated emails
- ✅ Set proper reply-to headers for customer emails
- ✅ Enable SPF, DKIM, and DMARC records (Google Workspace handles this)

### Rate Limiting

The forms include built-in rate limiting:

- Contact form: 5 submissions per hour per IP
- Booking form: 3 submissions per hour per IP

## Troubleshooting

### Common Issues

**"Authentication failed" errors:**

- Verify app password is correct
- Ensure 2FA is enabled on admin account
- Check that email address exists in Google Workspace

**"Connection refused" errors:**

- Verify SMTP settings (smtp.gmail.com:587)
- Check network connectivity
- Ensure port 587 is not blocked by firewall

**Emails not being received:**

- Check spam folders
- Verify recipient email addresses exist
- Test with a different recipient email

### Debug Mode

Enable debug mode in development:

```env
DEBUG_MODE=true
VERBOSE_LOGGING=true
```

This will provide detailed logging for email operations.

## Additional Recommendations

### Email Templates

Consider customizing the email templates in:

- `pages/api/contact.ts` (contact form emails)
- `pages/api/submit-booking-request.js` (booking form emails)

### Email Analytics

Track email delivery and engagement:

- Monitor bounce rates
- Track open rates (if needed for business emails)
- Set up alerts for failed deliveries

### Backup Email Configuration

Consider setting up a backup email service or secondary email address in case of issues with the primary Google Workspace account.

## Support

If you encounter issues:

1. Check the application logs for detailed error messages
2. Verify Google Workspace admin console settings
3. Test with a simple email client first to verify credentials
4. Contact Google Workspace support for account-specific issues

## Migration Checklist

- [ ] App password generated in Google Workspace
- [ ] Environment variables updated (development)
- [ ] Environment variables updated (production)
- [ ] Test emails sent successfully
- [ ] Customer confirmation emails working
- [ ] Business notification emails received
- [ ] Forms working on all pages (contact, booking, quote)
- [ ] Rate limiting functioning properly
- [ ] Production deployment updated and tested
