# Database Troubleshooting Guide

This guide provides solutions for common database issues that may arise when setting up or running the Gathered Roots Cleaning website.

## Common Issues and Solutions

### Database Connection Errors

**Issue**: The application fails to connect to the database.

**Possible causes and solutions**:

1. **Missing DATABASE_URL**
   - Check that `DATABASE_URL` is correctly set in your `.env.local` file
   - Example format: `postgres://username:password@localhost:5432/gathered_roots_db`

2. **PostgreSQL not running**
   - Verify PostgreSQL service is running: `sudo systemctl status postgresql`
   - Start if needed: `sudo systemctl start postgresql`

3. **Wrong credentials or host**
   - Double-check username, password, host, and port in the connection string
   - Try connecting with `psql` to verify credentials: `psql postgres://username:password@localhost:5432/gathered_roots_db`

4. **Network issues**
   - For remote databases, check firewall settings
   - Verify the host is reachable with: `ping hostname`

### Missing Tables or Schema Issues

**Issue**: API returns errors about missing tables or columns.

**Solutions**:

1. **Run initialization script**
   ```bash
   npm run db:init
   ```

2. **Manually create the schema**
   ```bash
   psql -d gathered_roots_db -f scripts/schema.sql
   ```

3. **Check table structure** to ensure it matches expected schema:
   ```bash
   psql -d gathered_roots_db -c "\d contact_submissions"
   ```

### Database Migration Issues

**Issue**: Schema changes aren't reflected or cause errors.

**Solutions**:

1. **Check schema version**
   - Use the `/api/system/db-status` endpoint to check current schema state
   - Database should report "Database is properly configured and accessible"

2. **Reset development database** (development only):
   ```bash
   dropdb gathered_roots_db
   createdb gathered_roots_db
   npm run db:init
   ```

## Debugging Tools

### Database Status Check

The application provides an API endpoint to check database status:

```
GET /api/system/db-status
```

In development mode, this will return detailed information about any database issues.

### Manual Schema Verification

Run the following to check if required tables exist:

```bash
npx tsx scripts/verify-schema.ts
```

### Database Logs

View PostgreSQL logs for more detailed error information:

- Linux: `/var/log/postgresql/postgresql-XX-main.log`
- macOS (Homebrew): `~/Library/Application Support/Postgres/var-XX/postgres-server.log`

## Recovery Procedures

### Contact Submission Recovery

If the contact form submission failed but you have customer information:

1. Manually insert the record using SQL (ensure data is encrypted):
   ```sql
   INSERT INTO contact_submissions 
   (name_encrypted, name_iv, name_tag, email_encrypted, email_iv, email_tag, 
    message, consent, created_at) 
   VALUES (...);
   ```

2. Use the Node.js REPL to encrypt values:
   ```javascript
   const { encrypt } = require('./lib/encryption.js');
   encrypt('Sample Name');
   ```

## Performance Optimization

### Adding Indexes

For performance improvements, consider adding these indexes:

```sql
CREATE INDEX IF NOT EXISTS idx_contact_submissions_email ON contact_submissions(email_encrypted);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at ON contact_submissions(created_at);
```

## Best Practices

1. **Regular Backups**: Set up automated daily backups
2. **Run Database Checks**: During deployment and startup
3. **Monitor Disk Space**: Ensure sufficient disk space for database growth
4. **Use Connection Pooling**: The application already uses connection pooling for efficiency

## Emergency Contacts

If database issues persist:

1. Contact the database administrator
2. Check cloud provider status (if using managed database)
3. Consult PostgreSQL documentation: [https://www.postgresql.org/docs/](https://www.postgresql.org/docs/) 