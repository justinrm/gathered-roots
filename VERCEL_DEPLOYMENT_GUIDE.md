# Vercel Deployment Guide for Gathered Roots Cleaning

## Quick Deployment Steps

### 1. Pre-Deployment Checklist ✅

**Build Issues Resolved:**

- ✅ Removed unused `CheckCircleIcon` import from `pages/services/standard-clean.js`
- ✅ Replaced all `<img>` tags with Next.js `<Image />` components for better performance
- ✅ Updated dependencies to resolve npm deprecation warnings
- ✅ Fixed lru-cache compatibility with Node.js 18+

**Verify Local Build:**

```bash
npm run build
npm start
```

### 2. Environment Variables Setup

In your Vercel dashboard, add these environment variables:

**Required for Production:**

```
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NODE_ENV=production
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=contact@yourdomain.com
SMTP_PASSWORD=your-google-workspace-app-password
SMTP_SECURE=false
MAILER_FROM_ADDRESS=noreply@yourdomain.com
CONTACT_FORM_RECIPIENT_EMAIL=contact@yourdomain.com
EMAIL_FROM_NAME=Gathered Roots Cleaning
```

**Optional (Square Integration):**

```
SQUARE_ACCESS_TOKEN=your-production-square-token
SQUARE_ENVIRONMENT=production
SQUARE_APPLICATION_ID=your-square-app-id
SQUARE_LOCATION_ID=your-square-location-id
```

**Rate Limiting:**

```
CONTACT_FORM_RATE_LIMIT=5
CONTACT_FORM_RATE_WINDOW=60000
BOOKING_FORM_RATE_LIMIT=3
BOOKING_FORM_RATE_WINDOW=3600000
```

### 3. Deploy to Vercel

**Option A: Vercel CLI**

```bash
npm install -g vercel
vercel login
vercel --prod
```

**Option B: GitHub Integration**

1. Push your code to GitHub
2. Connect repository in Vercel dashboard
3. Deploy automatically on push

### 4. Post-Deployment Verification

**Test these features:**

- ✅ All pages load correctly
- ✅ Contact form submissions work
- ✅ Booking form submissions work
- ✅ Images load and are optimized
- ✅ Mobile responsiveness
- ✅ SEO meta tags and schema markup

### 5. Common Issues & Solutions

**Build Errors:**

- Ensure all `<img>` tags are replaced with `<Image />` components
- Check for unused imports (ESLint will catch these)
- Verify all environment variables are set

**Email Issues:**

- Use Gmail App Passwords, not regular passwords
- Verify SMTP settings match your email provider
- Test with a simple contact form submission

**Performance:**

- All images are now optimized with Next.js Image component
- Static pages are pre-rendered for better performance
- CDN delivery through Vercel Edge Network

### 6. Monitoring & Maintenance

**Vercel Dashboard:**

- Monitor deployment logs
- Check function execution logs
- Review performance metrics

**Regular Updates:**

```bash
npm update
npm audit
npm run build  # Test locally before deploying
```

## Build Optimization Summary

The following optimizations were implemented to resolve Vercel build issues:

1. **Image Optimization**: All `<img>` tags replaced with Next.js `<Image />` components
2. **Code Quality**: Removed unused imports and fixed ESLint errors
3. **Dependency Management**: Updated packages and resolved deprecation warnings
4. **Performance**: Enabled static generation for all pages
5. **SEO**: Proper meta tags and structured data for all pages

Your site is now ready for production deployment on Vercel! 🚀
