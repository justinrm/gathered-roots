# Gathered Roots Cleaning Website

[![Next.js](https://img.shields.io/badge/Next.js-15.3-blue)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.1-blue)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1-38B2AC)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue)](https://www.typescriptlang.org/)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](LICENSE)

A modern, professional website for Gathered Roots Cleaning, a cleaning business focused on trust, quality, and customer experience. The site is designed to generate leads, showcase services, and facilitate easy bookings through Square integration.

## 📑 Table of Contents

- [Project Overview](#project-overview)
  - [Key Features](#key-features)
  - [Live Pages](#live-pages)
- [Technology Stack](#technology-stack)
  - [Frontend](#frontend)
  - [Backend & Integrations](#backend--integrations)
  - [Development Tools](#development-tools)
  - [Infrastructure](#infrastructure)
- [Design & Brand Guidelines](#design--brand-guidelines)
  - [Color Palette](#color-palette)
  - [Typography](#typography)
  - [UI Components](#ui-components)
- [Mobile-First & Responsive Design](#mobile-first--responsive-design)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Setup](#environment-setup)
  - [Development](#development)
  - [Production Build](#production-build)
- [Forms & Contact Management](#forms--contact-management)
  - [Contact Form](#contact-form)
  - [Booking Form](#booking-form)
  - [Email Configuration](#email-configuration)
- [Square Integration](#square-integration)
  - [Setup](#setup)
  - [Client Management](#client-management)
- [Security & Privacy](#security--privacy)
  - [Form Security](#form-security)
  - [API Security](#api-security)
  - [Rate Limiting](#rate-limiting)
- [Code Quality & Standards](#code-quality--standards)
  - [Linting & Formatting](#linting--formatting)
  - [Accessibility](#accessibility)
  - [SEO Optimization](#seo-optimization)
- [Deployment](#deployment)
  - [Quick Deployment](#quick-deployment)
  - [Production Setup](#production-setup)
  - [Health Monitoring](#health-monitoring)
- [Project Structure](#project-structure)
- [Scripts & Tools](#scripts--tools)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

Gathered Roots Cleaning's website serves as the primary digital storefront, targeting homeowners, renters, and small businesses seeking reliable cleaning services. The site emphasizes clear service information, strong calls-to-action, and a seamless, accessible user experience across all devices.

### Key Features

- 📱 Mobile-first, responsive design (WCAG 2.1 AA compliant)
- 🔒 Secure contact and booking forms with rate limiting
- 🏪 Square integration for client management and payments
- 📧 Automated email notifications for inquiries and bookings
- 📊 SEO-optimized for local search with schema markup
- ⚡ Optimized performance (Next.js with static generation)
- 🎨 Modern, professional design with consistent branding
- 🛡️ Security headers and best practices implemented

### Live Pages

**Core Pages:**
- 🏠 **Homepage** (`/`) - Hero, services overview, testimonials, CTAs
- 📋 **Services** (`/services`) - Complete service offerings overview
  - Standard Cleaning (`/services/standard-clean`)
  - Deep Cleaning (`/services/deep-clean`)
  - Move-in/Move-out (`/services/move-in-move-out`)
  - Eco-Friendly Options (`/services/eco-friendly`)
- 🏘️ **Service Areas** (`/service-areas`) - Geographic coverage with interactive map
- 👥 **About Us** (`/about-us`) - Company story, mission, team
- 💬 **Testimonials** (integrated throughout site)
- ❓ **FAQ** (`/faq`) - Common questions and answers
- 📞 **Contact** (`/contact`) - Contact form and business information
- 📅 **Booking** (`/booking`) - Comprehensive booking form
- 💰 **Quote** (`/quote`) - Quick quote request form

**Legal & Utility:**
- 🔒 **Privacy Policy** (`/privacy-policy`) - GDPR/privacy compliance
- ♿ **Accessibility** (`/accessibility`) - Accessibility statement
- 🔍 **Sitemap** (`/sitemap.xml`) - SEO sitemap
- 🤖 **Robots.txt** (`/robots.txt`) - Search engine directives

## Technology Stack

### Frontend
- **Framework:** [Next.js 15.3](https://nextjs.org/) (React 19.1)
- **Styling:** [Tailwind CSS 4.1](https://tailwindcss.com/)
- **Language:** JavaScript/TypeScript ready
- **State Management:** React built-in state and context
- **Form Handling:** Custom validation with React hooks
- **Icons:** [Heroicons](https://heroicons.com/)
- **Maps:** React Leaflet for service area visualization

### Backend & Integrations
- **API Routes:** Next.js API Routes (serverless)
- **Client Management:** [Square API](https://developer.squareup.com/) integration
- **Email Service:** SMTP with Nodemailer (Gmail, etc.)
- **Payments:** Square (optional integration)
- **Analytics:** Ready for Google Analytics, Facebook Pixel

### Development Tools
- **Package Manager:** npm
- **Linting:** ESLint with React and accessibility plugins
- **Formatting:** Prettier
- **Version Control:** Git with comprehensive `.gitignore`
- **Code Quality:** TypeScript definitions included
- **Testing:** Jest and React Testing Library ready
- **Deployment Scripts:** Automated deployment with `scripts/deploy.sh`

### Infrastructure
- **Hosting:** Vercel (recommended) or EC2 with provided scripts
- **CDN:** Vercel Edge Network or CloudFront
- **SSL:** Let's Encrypt with Certbot (automated)
- **Process Management:** PM2 for production servers
- **Web Server:** Nginx with optimized configuration

## Design & Brand Guidelines

### Color Palette

```css
/* Primary Brand Colors */
--background: #F4F1ED;           /* Off-white background */
--primary-accent-teal: #006978;  /* Deep teal - CTAs, links */
--primary-accent-green: #2D5A4F; /* Muted green - brand elements */
--secondary-accent-hover: #5FB09C; /* Lighter teal - hover states */

/* Text Colors */
--text-dark: #333333;            /* Primary text */
--text-light: #666666;           /* Secondary text */

/* UI Elements */
--borders: #E0E0E0;              /* Borders and dividers */
--card-background: #FFFFFF;       /* Card backgrounds */
--card-border: #E8E5E0;          /* Card borders */
```

### Typography

- **Headings:** Montserrat (font-headings) - Modern, clean sans-serif
- **Body Text:** Open Sans (font-sans) - Highly readable, 16px base
- **Hierarchy:** Clear distinction via size, weight, and color
- **Responsive:** Scales appropriately across all devices

### UI Components

- **Buttons:** Clear CTAs with hover states, consistent styling
- **Cards:** Light backgrounds, subtle shadows, hover animations
- **Forms:** Simple, accessible, with validation and error handling
- **Navigation:** Sticky header, mobile hamburger menu
- **Icons:** Minimalist Heroicons throughout

## Mobile-First & Responsive Design

All layouts and components are built mobile-first using Tailwind CSS:

- **Breakpoints:** `sm` (640px), `md` (768px), `lg` (1024px), `xl` (1280px)
- **Grid System:** Responsive grids that stack on mobile, expand on desktop
- **Touch-Friendly:** All interactive elements optimized for touch
- **Performance:** Images optimized with Next.js Image component
- **Testing:** Chrome DevTools responsive design mode recommended

## Getting Started

### Prerequisites

- **Node.js** (v16+) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js)
- **Git** - [Download](https://git-scm.com/)
- **Square Developer Account** - [Sign up](https://developer.squareup.com/)
- **Email SMTP Access** (Gmail, etc.)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/gathered-roots-cleaning.git
   cd gathered-roots-cleaning
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   ```bash
   cp template.env .env.local
   ```

4. **Configure your environment** (see [Environment Setup](#environment-setup))

### Environment Setup

Edit `.env.local` with your actual values:

```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NODE_ENV=development

# Email Configuration (Required)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
SMTP_SECURE=false
MAILER_FROM_ADDRESS=noreply@yourdomain.com
CONTACT_FORM_RECIPIENT_EMAIL=contact@yourdomain.com
EMAIL_FROM_NAME=Gathered Roots Cleaning

# Square Configuration (Optional for development)
SQUARE_ACCESS_TOKEN=your-square-access-token
SQUARE_ENVIRONMENT=sandbox
SQUARE_APPLICATION_ID=your-square-application-id
SQUARE_LOCATION_ID=your-square-location-id

# Rate Limiting
CONTACT_FORM_RATE_LIMIT=5
CONTACT_FORM_RATE_WINDOW=60000
BOOKING_FORM_RATE_LIMIT=3
BOOKING_FORM_RATE_WINDOW=3600000
```

**For Gmail SMTP:**
1. Enable 2-factor authentication
2. Generate an "App Password" 
3. Use the app password (not your regular password)

### Development

1. **Start the development server:**
   ```bash
   npm run dev
   ```

2. **Access the application:**
   Open [http://localhost:3000](http://localhost:3000)

3. **Run code quality checks:**
   ```bash
   npm run lint      # ESLint
   npm run format    # Prettier
   npm run a11y      # Accessibility
   ```

4. **Verify forms functionality:**
   ```bash
   npm run verify-forms
   ```

### Production Build

1. **Build the application:**
   ```bash
   npm run build
   ```

2. **Start production server:**
   ```bash
   npm start
   ```

3. **Test the production build:**
   - Verify all pages load correctly
   - Test form submissions
   - Check responsive design
   - Validate accessibility

## Forms & Contact Management

### Contact Form

**Location:** `components/ContactForm.jsx`  
**API Endpoint:** `/api/contact`  
**Used On:** Contact page, homepage, quote page

**Features:**
- Input validation (name, email, phone, service type, message)
- Privacy policy consent checkbox required
- Rate limiting (5 submissions per hour)
- Automatic email notifications to business and customer
- Accessible error handling and user feedback

### Booking Form

**Location:** `pages/booking.js`  
**API Endpoint:** `/api/submit-booking-request`

**Features:**
- Comprehensive booking details (service, date, time, address)
- Service-specific options and customization
- Rate limiting (3 submissions per hour)
- Email notifications with booking confirmation
- Integration with Square for client management

### Email Configuration

Both forms send automated emails:

1. **Business Notification:** Complete submission details
2. **Customer Confirmation:** Professional thank you with next steps

**Required SMTP Configuration:**
- Gmail, Outlook, or custom SMTP server
- Valid credentials and app passwords
- FROM address matching your domain (recommended)

## Square Integration

### Setup

1. **Create Square Developer Account:**
   - Visit [developer.squareup.com](https://developer.squareup.com/)
   - Create application for Gathered Roots Cleaning

2. **Configure Environment Variables:**
   ```env
   SQUARE_ACCESS_TOKEN=your-square-access-token
   SQUARE_ENVIRONMENT=sandbox  # or 'production'
   SQUARE_APPLICATION_ID=your-square-application-id
   SQUARE_LOCATION_ID=your-square-location-id
   ```

3. **Test Integration:**
   - Verify API connectivity
   - Test client data management
   - Confirm payment processing (if enabled)

### Client Management

- **Contact Information:** Managed through Square Customer API
- **Booking Data:** Stored in Square for business management
- **No Local Database:** All client data handled by Square's secure infrastructure
- **GDPR Compliant:** Square handles data protection requirements

## Security & Privacy

### Form Security

- **Rate Limiting:** Prevents spam and abuse
- **Input Validation:** Server-side validation for all form data
- **CSRF Protection:** Built-in with Next.js
- **HTML Escaping:** Prevents XSS in email content
- **Privacy Consent:** Required checkbox for data collection

### API Security

- **HTTP Security Headers:** Implemented in `next.config.js`
- **CORS Policies:** Properly configured for production
- **Environment Variables:** Sensitive data never committed to git
- **Error Handling:** Production-safe error messages

### Rate Limiting

```javascript
// Contact Form: 5 submissions per hour per IP
// Booking Form: 3 submissions per hour per IP
// Configurable via environment variables
```

## Code Quality & Standards

### Linting & Formatting

```bash
npm run lint     # ESLint with React and accessibility rules
npm run format   # Prettier formatting
npm run a11y     # Accessibility-specific linting
```

**Configuration Files:**
- `.eslintrc.json` - ESLint rules and plugins
- `.prettierrc` - Code formatting preferences
- `eslint.config.mjs` - Modern ESLint configuration

### Accessibility

- **WCAG 2.1 AA Compliance:** All components tested
- **Semantic HTML:** Proper heading hierarchy and landmarks
- **Keyboard Navigation:** Full keyboard accessibility
- **Screen Readers:** ARIA labels and descriptions
- **Color Contrast:** Meets or exceeds accessibility standards
- **Focus Management:** Clear focus indicators

### SEO Optimization

- **Meta Tags:** Custom titles and descriptions for all pages
- **Schema Markup:** LocalBusiness and Service structured data
- **Sitemap:** Automatically generated (`public/sitemap.xml`)
- **Robots.txt:** Search engine directives
- **Performance:** Optimized for Core Web Vitals
- **Local SEO:** NAP consistency, service area keywords

## Deployment

### Quick Deployment

**Using the deployment script:**
```bash
chmod +x scripts/deploy.sh
./scripts/deploy.sh
```

**Script options:**
```bash
./scripts/deploy.sh          # Full deployment
./scripts/deploy.sh backup   # Create backup only
./scripts/deploy.sh restart  # Restart services
./scripts/deploy.sh health   # Health check
./scripts/deploy.sh logs     # View logs
```

### Production Setup

**For EC2/VPS deployment:**

1. **Run server setup:**
   ```bash
   chmod +x scripts/server-setup.sh
   ./scripts/server-setup.sh
   ```

2. **Configure environment:**
   ```bash
   cp template.env .env.local
   # Edit with production values
   ```

3. **Build and deploy:**
   ```bash
   npm ci --production=false
   npm run build
   pm2 start ecosystem.config.js
   ```

4. **Set up SSL:**
   ```bash
   sudo certbot --nginx -d yourdomain.com
   ```

**For Vercel deployment:**
```bash
npm install -g vercel
vercel
```

### Health Monitoring

- **Application Status:** `pm2 status`
- **Health Endpoint:** `/api/health` (if configured)
- **Log Monitoring:** `pm2 logs gathered-roots`
- **SSL Status:** `sudo certbot certificates`

## Project Structure

```
gathered-roots-cleaning/
├── components/              # Reusable React components
│   ├── Button.jsx          # Styled button component
│   ├── Card.jsx            # Card layout component
│   ├── ContactForm.jsx     # Main contact form
│   ├── Footer.js           # Site footer
│   ├── HeroSection.js      # Homepage hero
│   ├── Input.jsx           # Form input component
│   ├── Layout.jsx          # Page layout wrapper
│   ├── Navbar.jsx          # Main navigation
│   ├── Select.jsx          # Form select component
│   ├── ServiceCard.jsx     # Service display card
│   ├── ServicesSummary.js  # Services overview
│   ├── StarRating.jsx      # Star rating display
│   ├── TestimonialCard.jsx # Customer testimonial
│   ├── TestimonialCarousel.jsx # Testimonials slider
│   ├── Textarea.jsx        # Form textarea component
│   ├── UspSection.js       # Unique selling propositions
│   └── ValidationMessage.jsx # Form validation display
│
├── pages/                  # Next.js pages and routing
│   ├── api/                # API routes (serverless functions)
│   │   ├── contact.ts      # Contact form handler
│   │   └── submit-booking-request.js # Booking form handler
│   ├── services/           # Individual service pages
│   │   ├── deep-clean.js
│   │   ├── eco-friendly.js
│   │   ├── move-in-move-out.js
│   │   └── standard-clean.js
│   ├── _app.js             # App wrapper and global styles
│   ├── _document.js        # HTML document structure
│   ├── about-us.js         # About page
│   ├── accessibility.js    # Accessibility statement
│   ├── booking.js          # Booking form page
│   ├── contact.js          # Contact page
│   ├── faq.js              # FAQ page
│   ├── index.js            # Homepage
│   ├── privacy-policy.js   # Privacy policy
│   ├── quote.js            # Quick quote page
│   ├── service-areas.js    # Service areas with map
│   └── services.js         # Services overview
│
├── public/                 # Static assets
│   ├── images/             # Optimized images
│   ├── android-chrome-192x192.png
│   ├── apple-touch-icon.png
│   ├── favicon-16x16.png
│   ├── favicon-32x32.png
│   ├── robots.txt          # Search engine directives
│   ├── site.webmanifest    # PWA manifest
│   └── sitemap.xml         # SEO sitemap
│
├── scripts/                # Automation and deployment
│   ├── deploy.sh           # Production deployment script
│   ├── server-setup.sh     # Server initialization
│   └── verify-forms.js     # Form functionality verification
│
├── styles/                 # Styling and CSS
│   └── globals.css         # Global styles and Tailwind imports
│
├── lib/                    # Utility functions and configs
│   ├── apiClient.js        # API client configuration
│   └── rateLimit.ts        # Rate limiting implementation
│
├── .notes/                 # Project documentation
│   ├── database_troubleshooting.md
│   ├── project_overview.md
│   └── security_features.md
│
├── dev-tools/              # Development utilities
├── .cursorignore           # Cursor IDE ignore rules
├── .cursorrules            # Cursor IDE project rules
├── .env.local              # Environment variables (not in git)
├── .gitignore              # Git ignore rules
├── .prettierignore         # Prettier ignore rules
├── .prettierrc             # Prettier configuration
├── eslint.config.mjs       # ESLint configuration
├── FORM_VERIFICATION_REPORT.md # Form testing report
├── LICENSE                 # ISC license
├── next.config.js          # Next.js configuration
├── next-env.d.ts          # Next.js TypeScript definitions
├── package.json           # Dependencies and scripts
├── postcss.config.mjs     # PostCSS configuration
├── QUICK_DEPLOYMENT_REFERENCE.md # Deployment guide
├── README.md              # This file
├── STYLEGUIDE.md          # Design system documentation
├── tailwind.config.mjs    # Tailwind CSS configuration
├── template.env           # Environment template
└── tsconfig.json          # TypeScript configuration
```

## Scripts & Tools

### NPM Scripts

```json
{
  "dev": "next dev",                    // Development server
  "build": "next build",                // Production build
  "start": "next start",                // Production server
  "lint": "eslint . --ext .js,.jsx,.ts,.tsx --fix",  // Linting
  "format": "prettier --write .",       // Code formatting
  "a11y": "eslint . --plugin jsx-a11y", // Accessibility checks
  "test": "jest",                       // Run tests
  "verify-forms": "node scripts/verify-forms.js"     // Form verification
}
```

### Development Tools

- **Form Verification:** `scripts/verify-forms.js` - Validates form functionality
- **Deployment:** `scripts/deploy.sh` - Automated production deployment
- **Server Setup:** `scripts/server-setup.sh` - Initial server configuration
- **Style Guide:** `STYLEGUIDE.md` - Complete design system documentation
- **Deployment Guide:** `QUICK_DEPLOYMENT_REFERENCE.md` - Step-by-step deployment

### Configuration Files

- **`next.config.js`** - Next.js settings, security headers, redirects
- **`tailwind.config.mjs`** - Tailwind CSS customization and theme
- **`eslint.config.mjs`** - Code quality and accessibility rules
- **`template.env`** - Environment variable template with documentation

## Contributing

1. **Fork the repository**
2. **Create a feature branch:** `git checkout -b feature/amazing-feature`
3. **Follow code standards:** Run `npm run lint` and `npm run format`
4. **Test accessibility:** Run `npm run a11y`
5. **Verify forms:** Run `npm run verify-forms`
6. **Commit changes:** `git commit -m 'Add amazing feature'`
7. **Push to branch:** `git push origin feature/amazing-feature`
8. **Open a Pull Request**

**Code Standards:**
- Mobile-first responsive design
- WCAG 2.1 AA accessibility compliance
- ESLint and Prettier formatting
- Semantic HTML and proper ARIA labels
- Performance optimization

## License

[ISC](LICENSE)  
© 2024 Gathered Roots Cleaning. All rights reserved.

---

**Built with ❤️ for Gathered Roots Cleaning**  
A professional, accessible, and performant website designed to grow your cleaning business.
