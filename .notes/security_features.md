# Security Features: Gathered Roots Cleaning Website

This document details the key security features implemented in the Gathered Roots Cleaning website to protect user data and prevent abuse.

## 1. Encryption of Sensitive Data

### Contact Form Encryption

All personally identifiable information (PII) submitted through contact forms is encrypted before storage in the database using AES-256-GCM, a strong authenticated encryption algorithm:

- **Data Encrypted**: Names, email addresses, and phone numbers
- **Encryption Method**: AES-256-GCM (Authenticated Encryption with Associated Data)
- **Encryption Key**: 32-byte (256-bit) key stored as an environment variable (`CONTACT_ENCRYPTION_KEY`)
- **Implementation**: Uses Node.js native `crypto` module in `lib/encryption.js`

### Key Features:

- **Authenticated Encryption**: Both encrypts data and ensures integrity/authenticity
- **Initialization Vector (IV)**: Unique for each piece of data to prevent pattern analysis
- **Authentication Tag**: Ensures data hasn't been tampered with

### Important Notes:

- The encryption key must be protected and backed up securely
- The key must be kept consistent across all environments that need to decrypt the data
- If the key is lost, encrypted data cannot be recovered

## 2. Rate Limiting for Form Submissions

The contact form API endpoint implements rate limiting to prevent abuse, spam, and potential DoS attacks:

- **Default Limit**: 5 submissions per minute per IP address
- **Customizable**: Configure via environment variables:
  - `CONTACT_FORM_RATE_LIMIT`: Number of allowed submissions
  - `CONTACT_FORM_RATE_WINDOW`: Time window in milliseconds (default: 60000 = 1 minute)
- **Implementation**: Uses LRU Cache-based system in `lib/rateLimit.ts`

### Key Features:

- **Sliding Window**: Accurately tracks request timing within the window
- **Response Headers**: Includes remaining submission count and reset time (X-RateLimit-*)
- **Client Feedback**: Returns 429 status with retry-after information

## 3. Input Validation

All form data undergoes comprehensive validation:

- **Validation Library**: Zod schema validation for type checking and business rules
- **Sanitization**: HTML escaping for email content
- **Field Limits**: Appropriate length restrictions for all fields

## 4. Database Security

The database itself implements several security measures:

- **Automated Data Purging**: Contact submissions older than 90 days are automatically deleted via the `purge_old_contacts.py` script
- **Parameterized Queries**: All database queries use parameterized statements to prevent SQL injection
- **Encrypted Storage**: PII is never stored in plain text

## 5. Email Security

When sending confirmation and notification emails:

- **HTML Escaping**: All user input is escaped before inclusion in HTML emails
- **Limited Data**: Only necessary information is included in emails
- **Secure Connections**: SMTP connections use TLS/SSL when available

## Configuration Requirements

To properly secure your deployment:

1. Generate a secure random encryption key:
   ```
   node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
   ```

2. Store the key securely in the environment variables:
   ```
   CONTACT_ENCRYPTION_KEY=<your-64-character-hex-key>
   ```

3. Optional: Customize rate limiting if needed:
   ```
   CONTACT_FORM_RATE_LIMIT=10
   CONTACT_FORM_RATE_WINDOW=120000  # 2 minutes
   ```

## Security Recommendations

- **Regular Key Rotation**: Consider a process for periodically rotating encryption keys
- **Monitoring**: Implement monitoring for failed decryption attempts or rate limit hits
- **Backup**: Ensure the encryption key is backed up securely but separately from encrypted data
- **Access Control**: Limit access to the application's environment variables 