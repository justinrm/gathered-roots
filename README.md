# Gathered Roots Cleaning Website

[![Next.js](https://img.shields.io/badge/Next.js-13.0-blue)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0-38B2AC)](https://tailwindcss.com/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-14+-336791)](https://www.postgresql.org/)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](LICENSE)

A modern, professional website for Gathered Roots Cleaning, a cleaning business focused on trust, quality, and customer experience. The site is designed to generate leads, showcase services, and facilitate easy bookings or quote requests.

## 📑 Table of Contents

- [Project Overview](#project-overview)
  - [Key Features](#key-features)
- [Technology Stack](#technology-stack)
  - [Frontend](#frontend)
  - [Backend](#backend)
  - [Development Tools](#development-tools)
  - [Infrastructure](#infrastructure)
- [Design & Brand Guidelines](#design--brand-guidelines)
- [Mobile-First & Responsive Design](#mobile-first--responsive-design-best-practices)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Setup](#environment-setup)
  - [Development](#development)
  - [Production Build](#production-build)
- [Data Management](#data-management)
  - [Database Setup and Validation](#database-setup-and-validation)
  - [Contact Form Submissions](#contact-form-submissions)
  - [Scheduled Data Purge](#scheduled-data-purge)
- [Security & Privacy](#security--privacy)
  - [Data Encryption](#data-encryption)
  - [API Security](#api-security)
- [Code Quality & Standards](#code-quality--standards)
  - [Linting & Formatting](#linting--formatting)
  - [Accessibility](#accessibility)
  - [SEO Optimization](#seo-optimization)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

Gathered Roots Cleaning's website serves as the primary digital storefront, targeting homeowners, renters, and small businesses seeking reliable cleaning services. The site emphasizes clear service information, strong calls-to-action, and a seamless, accessible user experience across all devices.

### Key Features

- 📱 Mobile-first, responsive design
- 🔒 Secure contact form submissions with encryption
- 📅 Automated booking system integration
- 📊 SEO-optimized for local search
- ♿ WCAG 2.1 AA compliant
- 🔄 Automated data cleanup for privacy compliance

## Technology Stack

### Frontend
- **Framework:** [Next.js](https://nextjs.org/) (React)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **State Management:** React Context API
- **Form Handling:** React Hook Form
- **API Client:** Axios
- **Animation:** Framer Motion (for subtle UI animations)
- **Icons:** Heroicons, Feather Icons

### Backend
- **Database:** PostgreSQL
- **API Routes:** Next.js API Routes
- **Authentication:** JWT (if implemented)
- **Payment Processing:** Square API (optional)
- **Email Service:** SendGrid or Mailgun

### Development Tools
- **Package Manager:** npm
- **Linting:** ESLint with jsx-a11y
- **Formatting:** Prettier
- **Version Control:** Git
- **CI/CD:** GitHub Actions (recommended)
- **Testing:** Jest, React Testing Library

### Infrastructure
- **Hosting:** Vercel (recommended) or similar
- **Database Hosting:** Managed PostgreSQL service
- **Monitoring:** Vercel Analytics (optional)
- **Content Delivery:** Vercel Edge Network

## Design & Brand Guidelines

- **Color Palette:**
  - Background: `#F4F1ED`
  - Primary Accent: `#1E2B28` (CTAs, highlights, links, icons)
  - Primary Accent: `#2F4F4F` (Brand, headings, logo)
  - Alt Accent: `#D8C3A5` (Alternate accent, logo)
  - Secondary Accent (Hover): `#D8C3A5` (Button hover, link hover)
  - Text (Dark): `#1E2B28`, Text (Light): `#757575`, Borders: `#E0E0E0`
- **Typography:**
  - Headings: Modern sans-serif (e.g., Montserrat)
  - Body: Open Sans, sans-serif (font-sans)
- **Imagery:** High-quality, bright, authentic photos; minimalist icons (Heroicons, Feather, Material Icons)
- **UI:** Clean cards, clear CTAs, subtle animations, mobile-first, accessible (WCAG 2.1 AA)

## Mobile-First & Responsive Design Best Practices

- All layouts and components are built mobile-first using Tailwind CSS utility classes and responsive breakpoints (`sm`, `md`, `lg`, `xl`).
- Grids and flex layouts stack vertically on small screens and expand horizontally on larger screens.
- Navigation, forms, buttons, and cards are touch-friendly and accessible on mobile devices.
- Images and text scale appropriately; no horizontal scrolling or overflow on small screens.
- **Testing Responsiveness:**
  - Use Chrome DevTools or Firefox Responsive Design Mode to preview on various device sizes.
  - Test all breakpoints and interactive elements for usability and accessibility.
  - Confirm that navigation, forms, and CTAs are easy to use on touch devices.
- For new components/pages, always start with a mobile layout and enhance for larger screens using Tailwind's responsive utilities.

## Getting Started

### Prerequisites

- Node.js (v16+)
- npm (comes with Node.js)
- PostgreSQL (v14+)
- Python 3.8+ (for data purge script)
- Git

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/gathered-roots-cleaning.git
   cd gathered-roots-cleaning
   ```

2. **Install dependencies:**
   ```bash
   # Install Node.js dependencies
   npm install

   # Install Python dependencies (for data purge script)
   pip install -r requirements.txt
   ```

3. **Set up environment variables:**
   Create `.env.local` in the project root:
   ```env
   DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE_NAME"
   CONTACT_ENCRYPTION_KEY=your_64_character_hex_key
   SQUARE_ACCESS_TOKEN=your_square_access_token
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```

4. **Initialize the database:**
   ```bash
   # Create the database
   createdb gathered_roots_db

   # Check database setup and schema
   npm run db:check

   # Initialize database schema if needed
   npm run db:init
   ```

### Development

1. **Start the development server:**
   ```bash
   npm run dev
   ```

2. **Access the development site:**
   Open [http://localhost:3000](http://localhost:3000)

3. **Run code quality checks:**
   ```bash
   # Linting
   npm run lint

   # Formatting
   npm run format

   # Accessibility checks
   npm run a11y
   ```

### Production Build

1. **Build the production version:**
   ```bash
   npm run build
   ```

2. **Start the production server:**
   ```bash
   npm start
   ```

3. **Deploy to Vercel (recommended):**
   ```bash
   # Install Vercel CLI if not already installed
   npm install -g vercel

   # Deploy
   vercel
   ```

## Data Management

### Database Setup and Validation

The application includes robust database validation and auto-initialization:

- **Automatic Validation**: The system checks database connections and schema before allowing operations
- **Auto-Init Capability**: Can automatically create tables and indexes when missing
- **Health Monitoring**: API endpoint (`/api/system/db-status`) for monitoring database health
- **Error Handling**: Detailed error messages for development, user-friendly messages in production
- **Initialization Scripts**:
  - `npm run db:check` - Verifies database setup
  - `npm run db:init` - Initializes schema if missing

### Contact Form Submissions

Sensitive contact information (name, email, phone) submitted through the website's contact forms is encrypted at the application level using AES-256-GCM before being stored in the PostgreSQL database.

### Scheduled Data Purge

To comply with privacy best practices, user contact submissions older than 90 days are automatically purged from the database. This is handled by the `purge_old_contacts.py` script in the project root.

## Security & Privacy

### Data Encryption

This project handles sensitive data in two main ways:

1. **Contact Form Submissions (via Next.js frontend to PostgreSQL):**
   Sensitive contact information (name, email, phone) submitted through the website's contact forms is encrypted at the application level using AES-256-GCM before being stored in the PostgreSQL database.
   - **Encryption Method:** Implemented in `lib/encryption.js`.
   - **Environment Variable:** Requires `CONTACT_ENCRYPTION_KEY` in `.env.local`.
   - **Scope:** Protects data collected directly through website forms and stored in your PostgreSQL database.

2. **Booking Information (via Node.js backend to Square API):**
   All communication with the Square API for creating bookings, managing customer data, and searching availability is handled over HTTPS by the Square SDK. Sensitive payment details are handled directly by Square's secure infrastructure if you choose to integrate Square Payments.
   - **Security:** Relies on Square's robust security measures and PCI compliance for handling booking and payment-related data.
   - **Environment Variable:** Requires `SQUARE_ACCESS_TOKEN` in `.env` for authenticating with the Square API.

**Never commit your encryption keys (`CONTACT_ENCRYPTION_KEY`) or API tokens (`SQUARE_ACCESS_TOKEN`) to version control.** Ensure `.env` and `.env.local` are in your `.gitignore`.

### API Security

The API routes and endpoints implement several security measures:

- **Rate Limiting**: Prevents abuse through excessive requests
- **CORS Policies**: Restricts which domains can access the API
- **Input Validation**: Validates all input data before processing
- **JWT Authentication**: For protected routes (if applicable)
- **CSRF Protection**: Cross-Site Request Forgery prevention
- **HTTP Headers**: Security headers like Content-Security-Policy

## Code Quality & Standards

### Linting & Formatting

- `npm run lint` – Run ESLint on all source files
- `npm run format` – Format all files with Prettier
- `npm run a11y` – Run accessibility checks (jsx-a11y)

Configuration: `.eslintrc.json`, `.eslintignore`, `.prettierrc`, `.prettierignore`

### Accessibility

- Follows [WCAG 2.1 AA](https://www.w3.org/WAI/standards-guidelines/wcag/) guidelines
- Semantic HTML, keyboard navigability, alt text for images
- ARIA attributes where appropriate
- Focus management for interactive elements
- Sufficient color contrast ratios
- Screen reader compatibility

### SEO Optimization

- Semantic HTML structure
- Custom metadata for each page via Next.js Head component
- Local SEO: correct NAP, service area keywords, `schema.org` markup
- Sitemap generation
- Fast loading, high Lighthouse scores
- Mobile-friendly design (Google's mobile-first indexing)

## Project Structure

```
gathered-roots-cleaning/
├── components/         # Reusable React components
│   ├── layout/         # Layout components (Header, Footer, etc.)
│   ├── ui/             # UI components (Button, Card, etc.)
│   ├── forms/          # Form components (ContactForm, BookingForm, etc.)
│   └── sections/       # Page sections (Hero, Services, Testimonials, etc.)
├── config/             # Configuration files
├── controllers/        # API controllers
├── lib/                # Utility functions
│   └── encryption.js   # Encryption utilities
├── pages/              # Next.js pages
│   ├── api/            # API routes
│   ├── services/       # Service pages
│   └── about-us/       # About us page
├── public/             # Static assets
│   ├── images/         # Images
│   └── favicon/        # Favicon files
├── routes/             # Backend routes
├── styles/             # CSS/Tailwind styles
├── .env.local          # Environment variables (not in git)
├── .gitignore          # Git ignore file
├── .eslintrc.json      # ESLint configuration
├── .prettierrc         # Prettier configuration
├── next.config.js      # Next.js configuration
├── package.json        # NPM package file
├── purge_old_contacts.py # Data purge script
├── README.md           # Project documentation
├── server.js           # Express server (if applicable)
└── tailwind.config.js  # Tailwind CSS configuration
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

Please ensure your code follows our coding standards and includes appropriate tests.

## License

[ISC](LICENSE)
© Gathered Roots Cleaning All rights reserved.
