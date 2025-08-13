#!/bin/bash

# Google Workspace Setup Script for Gathered Roots Cleaning
# This script helps configure your environment for Google Workspace email integration

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

print_header() {
    echo -e "\n${BLUE}=== $1 ===${NC}"
}

print_status() {
    echo -e "${GREEN}✓${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}⚠${NC} $1"
}

print_error() {
    echo -e "${RED}✗${NC} $1"
}

print_header "Google Workspace Email Configuration"

echo "This script will help you configure your environment for Google Workspace email integration."
echo "Make sure you have already:"
echo "  • Set up your Google Workspace account"
echo "  • Configured DNS TXT record for domain verification"
echo "  • Created email addresses (contact@yourdomain.com, etc.)"
echo ""

# Get domain
read -p "Enter your domain name (e.g., gatheredrootscleaning.com): " DOMAIN
if [[ -z "$DOMAIN" ]]; then
    print_error "Domain is required!"
    exit 1
fi

# Get app password
echo ""
print_warning "You need to generate an App Password in Google Workspace Admin Console:"
echo "1. Go to admin.google.com"
echo "2. Security → App passwords"
echo "3. Generate new app password for 'Mail'"
echo ""
read -s -p "Enter your Google Workspace App Password: " APP_PASSWORD
echo ""

if [[ -z "$APP_PASSWORD" ]]; then
    print_error "App password is required!"
    exit 1
fi

# Create environment file
print_header "Creating Environment Configuration"

ENV_FILE=".env.local"

if [[ -f "$ENV_FILE" ]]; then
    print_warning "Backing up existing $ENV_FILE to ${ENV_FILE}.backup"
    cp "$ENV_FILE" "${ENV_FILE}.backup"
fi

cat > "$ENV_FILE" << EOF
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://${DOMAIN}
NODE_ENV=development

# Google Workspace Email Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=contact@${DOMAIN}
SMTP_PASSWORD=${APP_PASSWORD}
SMTP_SECURE=false
MAILER_FROM_ADDRESS=noreply@${DOMAIN}
CONTACT_FORM_RECIPIENT_EMAIL=contact@${DOMAIN}
EMAIL_FROM_NAME=Gathered Roots Cleaning

# Alternative naming (for compatibility)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=contact@${DOMAIN}
EMAIL_PASS=${APP_PASSWORD}
EMAIL_FROM_ADDRESS=noreply@${DOMAIN}
ADMIN_NOTIFICATION_EMAIL=admin@${DOMAIN}

# Rate Limiting Configuration
CONTACT_FORM_RATE_LIMIT=5
CONTACT_FORM_RATE_WINDOW=60000
BOOKING_FORM_RATE_LIMIT=3
BOOKING_FORM_RATE_WINDOW=3600000

# Square Configuration (Optional - update with your Square credentials)
SQUARE_ACCESS_TOKEN=your-square-access-token
SQUARE_ENVIRONMENT=sandbox
SQUARE_APPLICATION_ID=your-square-application-id
SQUARE_LOCATION_ID=your-square-location-id

# Security
NEXTAUTH_SECRET=$(openssl rand -hex 32)

# Optional: Analytics
GOOGLE_ANALYTICS_ID=
FACEBOOK_PIXEL_ID=
GOOGLE_TAG_MANAGER_ID=

# Health Check
HEALTH_CHECK_SECRET=$(openssl rand -hex 16)
EOF

print_status "Environment file created: $ENV_FILE"

# Create production environment template
print_header "Creating Production Environment Template"

PROD_ENV_FILE=".env.production.template"

cat > "$PROD_ENV_FILE" << EOF
# Production Environment Variables for ${DOMAIN}
# Copy these to your hosting platform (Vercel, etc.)

NEXT_PUBLIC_SITE_URL=https://${DOMAIN}
NODE_ENV=production

# Google Workspace Email Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=contact@${DOMAIN}
SMTP_PASSWORD=${APP_PASSWORD}
SMTP_SECURE=false
MAILER_FROM_ADDRESS=noreply@${DOMAIN}
CONTACT_FORM_RECIPIENT_EMAIL=contact@${DOMAIN}
EMAIL_FROM_NAME=Gathered Roots Cleaning

# Alternative naming (for compatibility)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=contact@${DOMAIN}
EMAIL_PASS=${APP_PASSWORD}
EMAIL_FROM_ADDRESS=noreply@${DOMAIN}
ADMIN_NOTIFICATION_EMAIL=admin@${DOMAIN}

# Rate Limiting
CONTACT_FORM_RATE_LIMIT=5
CONTACT_FORM_RATE_WINDOW=60000
BOOKING_FORM_RATE_LIMIT=3
BOOKING_FORM_RATE_WINDOW=3600000

# Square Configuration
SQUARE_ACCESS_TOKEN=your-production-square-access-token
SQUARE_ENVIRONMENT=production
SQUARE_APPLICATION_ID=your-square-application-id
SQUARE_LOCATION_ID=your-square-location-id

# Security
NEXTAUTH_SECRET=$(openssl rand -hex 32)
HEALTH_CHECK_SECRET=$(openssl rand -hex 16)
EOF

print_status "Production environment template created: $PROD_ENV_FILE"

# Display next steps
print_header "Next Steps"

echo -e "${GREEN}1.${NC} Verify email addresses exist in Google Workspace:"
echo "   • contact@${DOMAIN}"
echo "   • noreply@${DOMAIN} (optional but recommended)"
echo "   • admin@${DOMAIN}"
echo ""

echo -e "${GREEN}2.${NC} Test the configuration:"
echo "   npm install"
echo "   npm run dev"
echo "   # Test forms at http://localhost:3000"
echo ""

echo -e "${GREEN}3.${NC} Run verification script:"
echo "   npm run verify-forms"
echo ""

echo -e "${GREEN}4.${NC} For production deployment:"
echo "   • Copy variables from $PROD_ENV_FILE to your hosting platform"
echo "   • Update Square configuration with production tokens"
echo "   • Test thoroughly before going live"
echo ""

print_header "Configuration Summary"
print_status "Domain: ${DOMAIN}"
print_status "Primary contact email: contact@${DOMAIN}"
print_status "From address: noreply@${DOMAIN}"
print_status "Admin email: admin@${DOMAIN}"
print_status "SMTP: smtp.gmail.com:587 (Google Workspace)"

print_warning "Remember to:"
echo "  • Keep your app password secure"
echo "  • Test email functionality before production"
echo "  • Set up Square integration for client management"
echo "  • Configure your hosting platform environment variables"

print_header "Setup Complete!"
print_status "Your Google Workspace email integration is configured and ready to test." 