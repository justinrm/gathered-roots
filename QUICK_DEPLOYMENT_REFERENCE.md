# Quick Deployment Reference - Gathered Roots Cleaning

## Prerequisites

- EC2 instance running Ubuntu 22.04 LTS
- Domain pointing to EC2 instance
- SSH access to the server
- Note: **Client contact information is managed through Square** (no database setup required)

## Initial Server Setup

```bash
# Run the server setup script
chmod +x scripts/server-setup.sh
./scripts/server-setup.sh
```

## Application Deployment

### 1. Clone and Setup

```bash
# Clone repository
git clone https://github.com/your-username/gathered_roots.git
cd gathered_roots

# Copy and configure environment
cp template.env .env.local
nano .env.local
```

### 2. Configure Environment Variables

Edit `.env.local` with your actual values:

```bash
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NODE_ENV=production

# Email Configuration (Gmail example)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
EMAIL_FROM_NAME=Gathered Roots Cleaning
EMAIL_FROM_ADDRESS=your-email@gmail.com
ADMIN_NOTIFICATION_EMAIL=admin@yourdomain.com
CONTACT_FORM_RECIPIENT_EMAIL=contact@yourdomain.com

# Square Configuration
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

### 3. Install and Build

```bash
npm install
npm run build
```

### 4. Configure Nginx

```bash
# Copy nginx configuration
sudo cp /home/ubuntu/nginx-site.conf /etc/nginx/sites-available/gathered_roots

# Edit domain name in config
sudo nano /etc/nginx/sites-available/gathered_roots
# Replace YOUR_DOMAIN.com with your actual domain

# Enable site
sudo ln -s /etc/nginx/sites-available/gathered_roots /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### 5. Start Application

```bash
# Start with PM2
pm2 start /home/ubuntu/ecosystem.config.js
pm2 save
pm2 startup
```

### 6. SSL Certificate

```bash
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

## Common Commands

### Application Management

```bash
pm2 status                    # Check status
pm2 restart gathered-roots    # Restart app
pm2 logs gathered-roots       # View logs
pm2 stop gathered-roots       # Stop app
```

### Nginx Management

```bash
sudo systemctl status nginx   # Check status
sudo systemctl restart nginx  # Restart Nginx
sudo nginx -t                 # Test configuration
```

### SSL Certificate

```bash
sudo certbot certificates     # Check certificates
sudo certbot renew --dry-run  # Test renewal
```

## Deployment Updates

### Using Deploy Script

```bash
# Full deployment
chmod +x scripts/deploy.sh
./scripts/deploy.sh

# Other options
./scripts/deploy.sh backup   # Create backup only
./scripts/deploy.sh restart  # Restart services
./scripts/deploy.sh health   # Health check
./scripts/deploy.sh logs     # View logs
```

### Manual Deployment

```bash
cd /home/ubuntu/gathered_roots

# Pull latest changes
git pull origin main

# Install dependencies
npm ci --production=false

# Build application
npm run build

# Restart application
pm2 restart gathered-roots
```

## Health Checks

### Application Health

```bash
curl http://localhost:3000     # Local check
curl https://yourdomain.com    # External check
```

### Service Status

```bash
pm2 status                     # Application status
sudo systemctl status nginx   # Nginx status
```

## Troubleshooting

### Common Issues

1. **Application won't start**

   ```bash
   pm2 logs gathered-roots
   ```

2. **Nginx 502 Bad Gateway**

   ```bash
   sudo nginx -t
   pm2 status
   ```

3. **SSL certificate issues**

   ```bash
   sudo certbot certificates
   sudo nginx -t
   ```

4. **Permission issues**
   ```bash
   sudo chown -R ubuntu:ubuntu /home/ubuntu/gathered_roots
   ```

### Log Locations

- Application logs: `pm2 logs gathered-roots`
- Nginx error logs: `/var/log/nginx/error.log`
- Nginx access logs: `/var/log/nginx/access.log`
- SSL logs: `/var/log/letsencrypt/letsencrypt.log`

## Important Notes

- **Client contact information is managed through Square** - no database setup required
- Configure your Square account for payment processing and client management
- Ensure email SMTP credentials are properly configured
- Test contact forms and booking functionality after deployment
- Set up monitoring for your Square integration
- Regular backups are handled by the deployment script (application files only)

## Environment Configuration

### Required Environment Variables

- `EMAIL_*` - SMTP configuration for notifications
- `SQUARE_*` - Square integration for client management
- Rate limiting settings
- Site URL and security settings

### Optional Environment Variables

- Analytics tracking (Google Analytics, Facebook Pixel)
- Additional monitoring and debugging settings

## Square Integration Setup

1. **Create Square Developer Account**

   - Go to https://developer.squareup.com/
   - Create application for Gathered Roots Cleaning

2. **Configure Environment Variables**

   - Set `SQUARE_ACCESS_TOKEN`
   - Set `SQUARE_APPLICATION_ID`
   - Set `SQUARE_LOCATION_ID`
   - Choose `SQUARE_ENVIRONMENT` (sandbox/production)

3. **Test Integration**
   - Verify Square API connectivity
   - Test payment processing functionality
   - Confirm client data management

## Security Checklist

- [ ] Firewall configured (SSH, HTTP, HTTPS only)
- [ ] SSL certificate installed and auto-renewal enabled
- [ ] Environment variables secured
- [ ] Square API credentials properly configured
- [ ] Rate limiting configured for forms
- [ ] Nginx security headers enabled
- [ ] Regular security updates enabled
