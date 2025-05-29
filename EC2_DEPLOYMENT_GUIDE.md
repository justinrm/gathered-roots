# EC2 Deployment Guide for Gathered Roots Cleaning Website

## Prerequisites
- AWS Account with EC2 access
- Domain name (recommended for production)
- Email service credentials (for contact forms)
- Square account for client management and payment processing

**📌 Important Note:** Client contact information is now managed through Square (no database setup required)

**📌 Domain Setup Note:** If you're using Namecheap as your domain registrar, see the detailed [Namecheap Domain Setup Guide](NAMECHEAP_DOMAIN_SETUP.md) for specific DNS configuration instructions.

## Step 1: Launch EC2 Instance

### Instance Configuration
- **Instance Type**: `t3.small` (2 vCPU, 2GB RAM) - sufficient for Node.js without database
- **OS**: Ubuntu 22.04 LTS
- **Storage**: 20GB GP3 SSD
- **Security Group Rules**:
  - SSH (22) - Your IP only
  - HTTP (80) - 0.0.0.0/0
  - HTTPS (443) - 0.0.0.0/0
  - Custom TCP (3000) - 0.0.0.0/0 (for Next.js, can restrict later)

### Connect to Instance
```bash
ssh -i your-key.pem ubuntu@your-ec2-public-ip
```

## Step 2: Initial Server Setup

### Update System
```bash
sudo apt update && sudo apt upgrade -y
```

### Install Node.js (v18 LTS)
```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

### Install Additional Tools
```bash
sudo apt install git nginx certbot python3-certbot-nginx -y
sudo npm install -g pm2
```

## Step 3: Application Deployment

### Clone Repository
```bash
cd /home/ubuntu
git clone https://github.com/your-username/gathered_roots.git
cd gathered_roots
```

### Install Dependencies
```bash
npm install
```

### Environment Configuration
```bash
cp template.env .env.local
nano .env.local
```

### Required Environment Variables
```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NODE_ENV=production

# Email Configuration
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
EMAIL_FROM_NAME=Gathered Roots Cleaning
EMAIL_FROM_ADDRESS=your-email@gmail.com
ADMIN_NOTIFICATION_EMAIL=admin@gatheredrootscleaning.com
CONTACT_FORM_RECIPIENT_EMAIL=contact@gatheredrootscleaning.com

# SMTP Configuration (Alternative naming)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
SMTP_SECURE=false
MAILER_FROM_ADDRESS=noreply@gatheredrootscleaning.com

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

# Security
NEXTAUTH_SECRET=your-random-secret-string

# Optional: Analytics
GOOGLE_ANALYTICS_ID=
FACEBOOK_PIXEL_ID=
```

### Build Application
```bash
npm run build
```

## Step 4: Process Management with PM2

### Create PM2 Ecosystem File
```bash
nano ecosystem.config.js
```

```javascript
module.exports = {
  apps: [{
    name: 'gathered-roots',
    script: 'npm',
    args: 'start',
    cwd: '/home/ubuntu/gathered_roots',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    },
    error_file: '/home/ubuntu/logs/gathered-roots-error.log',
    out_file: '/home/ubuntu/logs/gathered-roots-out.log',
    log_file: '/home/ubuntu/logs/gathered-roots.log',
    instances: 'max',
    exec_mode: 'cluster'
  }]
};
```

### Create Logs Directory
```bash
mkdir -p /home/ubuntu/logs
```

### Start Application
```bash
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

## Step 5: Nginx Configuration

### Create Nginx Configuration
```bash
sudo nano /etc/nginx/sites-available/gathered-roots
```

```nginx
server {
    listen 80;
    server_name your-domain.com www.your-domain.com;

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;
    add_header Content-Security-Policy "default-src 'self' http: https: data: blob: 'unsafe-inline'" always;

    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_proxied expired no-cache no-store private must-revalidate auth;
    gzip_types text/plain text/css text/xml text/javascript application/javascript application/xml+rss application/json;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
        proxy_read_timeout 86400;
    }

    # Static assets caching
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        proxy_pass http://localhost:3000;
        expires 1y;
        add_header Cache-Control "public, immutable";
        access_log off;
    }

    # Deny access to hidden files
    location ~ /\. {
        deny all;
        access_log off;
        log_not_found off;
    }
}
```

### Enable Site
```bash
sudo rm /etc/nginx/sites-enabled/default
sudo ln -s /etc/nginx/sites-available/gathered-roots /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

## Step 6: Domain Configuration

### DNS Setup
1. **Point your domain to EC2**:
   - A Record: `@` → `YOUR_EC2_PUBLIC_IP`
   - A Record: `www` → `YOUR_EC2_PUBLIC_IP`

2. **For Namecheap users**: Follow the detailed [Namecheap Domain Setup Guide](NAMECHEAP_DOMAIN_SETUP.md)

### SSL Certificate with Let's Encrypt
```bash
sudo certbot --nginx -d your-domain.com -d www.your-domain.com
```

## Step 7: Square Integration Setup

### 1. Create Square Developer Account
- Go to https://developer.squareup.com/
- Create a new application for "Gathered Roots Cleaning"

### 2. Obtain API Credentials
- **Sandbox Environment** (for testing):
  - Access Token
  - Application ID
  - Location ID

- **Production Environment** (for live site):
  - Access Token
  - Application ID
  - Location ID

### 3. Configure Environment Variables
Update your `.env.local` file with Square credentials:
```env
SQUARE_ACCESS_TOKEN=your-square-access-token
SQUARE_ENVIRONMENT=sandbox  # Change to 'production' for live site
SQUARE_APPLICATION_ID=your-square-application-id
SQUARE_LOCATION_ID=your-square-location-id
```

### 4. Test Square Integration
```bash
# Restart application to load new environment variables
pm2 restart gathered-roots

# Check logs for any Square API errors
pm2 logs gathered-roots
```

## Step 8: Firewall Configuration

```bash
sudo ufw --force enable
sudo ufw allow ssh
sudo ufw allow 'Nginx Full'
sudo ufw status
```

## Step 9: Backup and Monitoring Setup

### Create Backup Script
```bash
nano /home/ubuntu/backup.sh
```

```bash
#!/bin/bash
BACKUP_DIR="/home/ubuntu/backups"
APP_DIR="/home/ubuntu/gathered_roots"
DATE=$(date +%Y%m%d_%H%M%S)

mkdir -p $BACKUP_DIR

# Backup application files
tar -czf "$BACKUP_DIR/app_backup_$DATE.tar.gz" \
    --exclude='node_modules' \
    --exclude='.next' \
    --exclude='.git' \
    -C $APP_DIR .

# Keep only last 5 backups
ls -t $BACKUP_DIR/app_backup_*.tar.gz | tail -n +6 | xargs rm -f

echo "Backup completed: app_backup_$DATE.tar.gz"
```

```bash
chmod +x /home/ubuntu/backup.sh
```

### Set up Cron Jobs
```bash
crontab -e
```

```bash
# SSL certificate auto-renewal
0 12 * * * /usr/bin/certbot renew --quiet

# Weekly application backup
0 2 * * 0 /home/ubuntu/backup.sh

# Monthly system updates
0 3 1 * * sudo apt update && sudo apt upgrade -y

# Weekly log rotation
0 1 * * 1 pm2 flush
```

## Step 10: Testing and Validation

### Application Health Check
```bash
# Check if application is running
pm2 status

# Test local access
curl http://localhost:3000

# Test external access (replace with your domain)
curl https://your-domain.com
```

### Contact Form Testing
1. Navigate to your website's contact page
2. Submit a test contact form
3. Verify email notifications are received
4. Check PM2 logs for any errors: `pm2 logs gathered-roots`

### Booking Form Testing
1. Navigate to your website's booking page
2. Submit a test booking request
3. Verify email notifications are received
4. Confirm Square integration is working (if applicable)

## Deployment Automation

### Using the Deploy Script
```bash
# Make deploy script executable
chmod +x scripts/deploy.sh

# Run deployment
./scripts/deploy.sh
```

### Manual Deployment Steps
```bash
cd /home/ubuntu/gathered_roots

# Pull latest changes
git pull origin main

# Install any new dependencies
npm ci --production=false

# Build application
npm run build

# Restart application
pm2 restart gathered-roots

# Check status
pm2 status
```

## Troubleshooting

### Common Issues

1. **Application won't start**
   ```bash
   # Check logs
   pm2 logs gathered-roots
   
   # Check environment variables
   pm2 show gathered-roots
   ```

2. **Nginx 502 Bad Gateway**
   ```bash
   # Check if application is running
   pm2 status
   
   # Test Nginx configuration
   sudo nginx -t
   
   # Check Nginx logs
   sudo tail -f /var/log/nginx/error.log
   ```

3. **SSL Certificate Issues**
   ```bash
   # Check certificate status
   sudo certbot certificates
   
   # Test renewal
   sudo certbot renew --dry-run
   ```

4. **Email not sending**
   ```bash
   # Check SMTP configuration in .env.local
   # Verify email credentials
   # Check application logs for email errors
   pm2 logs gathered-roots | grep -i email
   ```

5. **Square Integration Issues**
   ```bash
   # Verify Square credentials in .env.local
   # Check Square API status
   # Review application logs for Square API errors
   pm2 logs gathered-roots | grep -i square
   ```

## Security Best Practices

- [ ] **Firewall configured** - Only necessary ports open
- [ ] **SSH key authentication** - Disable password authentication
- [ ] **SSL certificate** - HTTPS enabled with auto-renewal
- [ ] **Environment variables** - Sensitive data not in source code
- [ ] **Regular updates** - Automated security updates enabled
- [ ] **Rate limiting** - Contact forms protected against spam
- [ ] **Square API security** - Production credentials secured
- [ ] **Nginx security headers** - XSS and clickjacking protection

## Performance Optimization

### Instance Sizing
- **t3.small**: 2 vCPU, 2GB RAM - Good for small to medium traffic
- **t3.medium**: 2 vCPU, 4GB RAM - Better for higher traffic
- **t3.large**: 2 vCPU, 8GB RAM - For high traffic sites

### Application Performance
- **PM2 cluster mode**: Utilizes all CPU cores
- **Nginx caching**: Static assets cached with long expiry
- **Gzip compression**: Reduces bandwidth usage
- **Image optimization**: Ensure images are properly sized and compressed

## Cost Estimation

### Monthly AWS Costs (us-east-1)
- **t3.small**: ~$15-20/month
- **t3.medium**: ~$30-40/month
- **20GB GP3 storage**: ~$2/month
- **Data transfer**: ~$1-5/month (depending on traffic)

### Additional Costs
- **Domain registration**: ~$10-15/year
- **Square processing fees**: 2.6% + 10¢ per transaction
- **Email service**: Usually free for low volume (Gmail, etc.)

## Important Reminders

- **Client data is managed through Square** - no database maintenance required
- Configure Square webhooks for real-time updates if needed
- Regular monitoring of Square integration status
- Test payment processing thoroughly before going live
- Keep Square API credentials secure and rotate them periodically
- Monitor Square API rate limits and usage 