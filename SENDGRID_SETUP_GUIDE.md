# SendGrid Setup Guide for Vercel
**Fixing SMTP Connection Timeout Issues**

## Problem Solved ✅
- **Issue:** `Error: connect ETIMEDOUT` when trying to send emails via Gmail SMTP on Vercel
- **Root Cause:** Vercel serverless functions have trouble with direct SMTP connections
- **Solution:** Replaced nodemailer SMTP with SendGrid API (Vercel-recommended)

## Setup Steps

### 1. Create SendGrid Account
1. Go to [SendGrid.com](https://sendgrid.com)
2. Sign up for **free account** (100 emails/day)
3. Verify your email address

### 2. Create API Key
1. In SendGrid dashboard: **Settings** → **API Keys**
2. Click **"Create API Key"**
3. Choose **"Restricted Access"**
4. Give it **"Mail Send"** permissions only
5. Copy the API key (starts with `SG.`)

### 3. Verify Sender Email
1. Go to **Settings** → **Sender Authentication**
2. Click **"Verify a Single Sender"**
3. Enter: `hello@gatheredrootscleaning.com`
4. Check your email and click the verification link

### 4. Update Vercel Environment Variables

**Remove these old SMTP variables:**
- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_USER`
- `SMTP_PASSWORD`
- `SMTP_SECURE`
- `MAILER_FROM_ADDRESS`

**Add these new SendGrid variables:**
```env
SENDGRID_API_KEY=SG.your-sendgrid-api-key-here
SENDGRID_FROM_EMAIL=hello@gatheredrootscleaning.com
CONTACT_FORM_RECIPIENT_EMAIL=hello@gatheredrootscleaning.com
EMAIL_FROM_NAME=Gathered Roots Cleaning
NODE_ENV=production
```

### 5. Testing Locally

1. **Copy the template:**
   ```bash
   cp .env.local.template .env.local
   ```

2. **Edit `.env.local`** with your actual SendGrid API key

3. **Test SendGrid configuration:**
   ```bash
   node test-sendgrid.js
   ```

4. **Test the forms:**
   ```bash
   npm run dev
   # Visit http://localhost:3000/quote
   ```

## Code Changes Made ✅

### Updated Files:
- `pages/api/contact.ts` - Replaced nodemailer with SendGrid
- `pages/api/submit-booking-request.js` - Replaced nodemailer with SendGrid
- `package.json` - Removed nodemailer, added @sendgrid/mail

### Email Features:
- ✅ Business notification emails
- ✅ Customer confirmation emails  
- ✅ Service type included in emails
- ✅ Professional HTML templates
- ✅ Rate limiting protection
- ✅ Error handling and validation

## Benefits of SendGrid vs SMTP

| Feature | Direct SMTP | SendGrid |
|---------|-------------|----------|
| **Vercel Compatibility** | ❌ Timeout issues | ✅ Perfect |
| **Reliability** | ⚠️ Network dependent | ✅ 99% uptime |
| **Setup Complexity** | ⚠️ App passwords | ✅ Simple API key |
| **Deliverability** | ⚠️ Variable | ✅ Professional |
| **Analytics** | ❌ None | ✅ Full tracking |
| **Cost** | ✅ Free with Gmail | ✅ 100/day free |

## Troubleshooting

### Common Issues:

**"Unauthorized" Error:**
- Check API key is correct and starts with `SG.`
- Verify API key has "Mail Send" permissions

**"Sender Identity" Error:**
- Verify `hello@gatheredrootscleaning.com` in SendGrid
- Check verification email and click link

**Still Getting Timeouts:**
- Make sure you updated ALL environment variables
- Redeploy after changing variables
- Check Vercel function logs for specific errors

### Testing Commands:
```bash
# Test SendGrid configuration
node test-sendgrid.js

# Check form integration
node scripts/verify-forms.js

# Run development server
npm run dev
```

## Production Deployment ✅

1. **Add all environment variables to Vercel dashboard**
2. **Deploy your project** (Vercel auto-redeploys when env vars change)
3. **Test contact forms on live site**
4. **Check emails at** `hello@gatheredrootscleaning.com`

Your email forms should now work perfectly on Vercel! 🎉 