# Migration from PostgreSQL to Square - Gathered Roots Cleaning

## Overview
This document outlines the migration from PostgreSQL database storage to Square-based client contact information management for the Gathered Roots Cleaning website.

## Changes Made

### 1. Removed PostgreSQL Dependencies
- **Removed from package.json:**
  - `pg` (PostgreSQL client)
  - `@types/pg` (TypeScript types)
  - Database-related npm scripts (`db:check`, `db:init`, `predev`, `prebuild`)

### 2. Deleted Database-Related Files
- `lib/dbSetup.ts` - Database connection and schema management
- `lib/dbSetup.js` - Backup database setup file
- `lib/encryption.js` - Data encryption utilities (no longer needed)
- `lib/validation.ts` - Encryption key validation (no longer needed)
- `scripts/check-database-simple.js` - Database connectivity check
- `purge_old_contacts.py` - Contact data purging script
- `migrations/add_time_slot_column.js` - Database migration
- `migrations/` directory (removed entirely)
- `requirements.txt` - Python dependencies (no longer needed)

### 3. Updated API Endpoints

#### Contact Form API (`pages/api/contact.ts`)
- **Removed:** Database storage operations
- **Removed:** Data encryption functionality
- **Removed:** Database validation checks
- **Kept:** Email notification functionality
- **Added:** Note about Square handling client data

#### Booking Request API (`pages/api/submit-booking-request.js`)
- **Removed:** Database storage operations
- **Removed:** Data encryption functionality
- **Removed:** Database initialization calls
- **Kept:** Email notification functionality
- **Added:** Note about Square handling booking data

### 4. Updated Environment Configuration

#### Removed from `template.env`:
- `DATABASE_URL` - PostgreSQL connection string
- `DB_HOST`, `DB_PORT`, `DB_USER`, `DB_PASS`, `DB_NAME` - Database components
- `POSTGRES_SSL_ENABLED`, `POSTGRES_REJECT_UNAUTHORIZED` - SSL settings
- `CONTACT_ENCRYPTION_KEY` - Data encryption key
- `CONTACTS_RETENTION_DAYS`, `BOOKINGS_RETENTION_DAYS` - Data retention settings

#### Added to `template.env`:
- `SQUARE_ACCESS_TOKEN` - Square API access token
- `SQUARE_ENVIRONMENT` - Square environment (sandbox/production)
- `SQUARE_APPLICATION_ID` - Square application ID
- `SQUARE_LOCATION_ID` - Square location ID

### 5. Updated Deployment Scripts

#### Server Setup Script (`scripts/server-setup.sh`)
- **Removed:** PostgreSQL installation and configuration
- **Removed:** Database user and database creation
- **Removed:** Database backup cron job
- **Updated:** Environment template to exclude database variables
- **Added:** Square configuration section
- **Added:** Notes about Square handling client data

#### Deployment Script (`scripts/deploy.sh`)
- **Removed:** Database backup functionality
- **Removed:** Database check operations
- **Changed:** Backup function to only backup application files
- **Updated:** Cleanup to remove old application backups instead of database backups
- **Added:** Notes about Square handling client data

### 6. Updated Documentation

#### Quick Deployment Reference (`QUICK_DEPLOYMENT_REFERENCE.md`)
- **Removed:** All PostgreSQL setup instructions
- **Removed:** Database-related troubleshooting
- **Added:** Square integration setup instructions
- **Updated:** Environment variable configuration
- **Added:** Square API testing procedures

#### EC2 Deployment Guide (`EC2_DEPLOYMENT_GUIDE.md`)
- **Removed:** PostgreSQL installation steps
- **Removed:** Database configuration sections
- **Reduced:** Instance size recommendation (t3.small instead of t3.medium)
- **Added:** Comprehensive Square integration setup
- **Updated:** Environment variables section
- **Added:** Square-specific troubleshooting

## Benefits of Migration to Square

### 1. Simplified Infrastructure
- **No database maintenance:** Eliminates PostgreSQL setup, backups, and maintenance
- **Reduced server requirements:** Lower memory and CPU needs without database
- **Cost savings:** Smaller EC2 instance required (t3.small vs t3.medium)

### 2. Enhanced Security
- **No sensitive data storage:** Client information handled by Square's secure infrastructure
- **Reduced attack surface:** No database to secure or encrypt
- **Compliance:** Square handles PCI compliance for payment data

### 3. Improved Functionality
- **Payment processing:** Direct integration with Square for payments
- **Client management:** Professional client management tools
- **Reporting:** Built-in analytics and reporting from Square

### 4. Operational Benefits
- **Reduced complexity:** Fewer moving parts to manage
- **Better reliability:** Square's enterprise-grade infrastructure
- **Automatic updates:** Square handles platform updates and security patches

## Migration Checklist

### Pre-Migration (if migrating existing data)
- [ ] Export existing contact/booking data from PostgreSQL
- [ ] Set up Square developer account
- [ ] Configure Square application and obtain API credentials
- [ ] Test Square API integration in sandbox environment

### During Migration
- [ ] Update environment variables with Square credentials
- [ ] Remove PostgreSQL dependencies from package.json
- [ ] Update API endpoints to remove database operations
- [ ] Test contact and booking forms with email-only functionality
- [ ] Verify Square integration works correctly

### Post-Migration
- [ ] Remove PostgreSQL from server (if applicable)
- [ ] Update backup procedures (application files only)
- [ ] Monitor Square API usage and limits
- [ ] Train staff on Square client management tools
- [ ] Update any external integrations that relied on database

## Environment Variables Migration

### Before (PostgreSQL)
```env
DATABASE_URL=postgresql://user:pass@localhost:5432/db
CONTACT_ENCRYPTION_KEY=64-char-hex-string
CONTACTS_RETENTION_DAYS=90
BOOKINGS_RETENTION_DAYS=180
```

### After (Square)
```env
SQUARE_ACCESS_TOKEN=your-square-access-token
SQUARE_ENVIRONMENT=sandbox
SQUARE_APPLICATION_ID=your-square-application-id
SQUARE_LOCATION_ID=your-square-location-id
```

## Testing Procedures

### 1. Contact Form Testing
1. Submit contact form on website
2. Verify admin notification email received
3. Verify user confirmation email received
4. Check application logs for any errors

### 2. Booking Form Testing
1. Submit booking request on website
2. Verify admin notification email received
3. Verify customer confirmation email received
4. Check application logs for any errors

### 3. Square Integration Testing
1. Verify Square API credentials are valid
2. Test Square API connectivity
3. Monitor Square dashboard for any API errors
4. Test payment processing (if implemented)

## Rollback Plan (if needed)

If rollback to PostgreSQL is required:
1. Restore PostgreSQL dependencies in package.json
2. Restore database setup files from git history
3. Recreate database and tables
4. Update environment variables
5. Restore API endpoints to include database operations
6. Test all functionality thoroughly

## Support and Resources

- **Square Developer Documentation:** https://developer.squareup.com/
- **Square API Reference:** https://developer.squareup.com/reference/square
- **Square Sandbox:** https://developer.squareup.com/docs/testing/sandbox
- **Square Support:** Available through Square Developer Dashboard

## Notes

- This migration maintains all existing website functionality while simplifying the backend
- Email notifications continue to work exactly as before
- The website appearance and user experience remain unchanged
- Square provides enterprise-grade security and compliance for client data
- Future enhancements can leverage Square's full suite of business tools 