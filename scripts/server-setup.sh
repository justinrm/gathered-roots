#!/bin/bash

# Gathered Roots Cleaning - EC2 Server Setup Script
# This script sets up the server environment for the Gathered Roots Cleaning website
# Note: Client contact information is now managed through Square

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Helper functions
print_header() {
    echo -e "\n${BLUE}============================================${NC}"
    echo -e "${BLUE}$1${NC}"
    echo -e "${BLUE}============================================${NC}"
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

# Check if running as non-root user
if [ "$EUID" -eq 0 ]; then
    print_error "Please run this script as a non-root user with sudo privileges"
    exit 1
fi

print_header "Starting Gathered Roots Cleaning Server Setup"
print_status "Setting up environment for Gathered Roots Cleaning website"
print_warning "Client contact information is now managed through Square"

print_header "Updating System Packages"
print_status "Updating package lists..."
sudo apt update

print_status "Upgrading system packages..."
sudo apt upgrade -y

print_status "Installing essential packages..."
sudo apt install -y curl wget unzip software-properties-common apt-transport-https ca-certificates gnupg lsb-release

print_header "Installing Node.js"
print_status "Installing Node.js 18 LTS..."
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

print_status "Node.js version: $(node --version)"
print_status "npm version: $(npm --version)"

print_header "Installing Additional Tools"
print_status "Installing Git, Nginx, Certbot, and PM2..."
sudo apt install git nginx certbot python3-certbot-nginx -y

# Install PM2 globally
sudo npm install -g pm2

print_status "Git version: $(git --version)"
print_status "Nginx version: $(nginx -v 2>&1)"
print_status "PM2 version: $(pm2 --version)"

print_header "Setting up Directories"
mkdir -p /home/ubuntu/logs
mkdir -p /home/ubuntu/backups
mkdir -p /home/ubuntu/ssl-backup

print_status "Created directories: logs, backups, ssl-backup"

print_header "Configuring Firewall"
print_status "Setting up UFW firewall..."
sudo ufw --force enable
sudo ufw allow ssh
sudo ufw allow 'Nginx Full'

print_status "Firewall configured"

print_header "Nginx Configuration"
print_status "Removing default Nginx site..."
sudo rm -f /etc/nginx/sites-enabled/default

print_status "Nginx ready for site configuration"

print_header "Security Updates"
print_status "Configuring automatic security updates..."
sudo apt install unattended-upgrades -y
echo 'Unattended-Upgrade::Automatic-Reboot "false";' | sudo tee -a /etc/apt/apt.conf.d/20auto-upgrades

print_header "Environment File Template"
cat > /home/ubuntu/.env.template << 'EOF'
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NODE_ENV=production

# Email Configuration
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=contact@your-domain.com
EMAIL_PASS=your-google-workspace-app-password
EMAIL_FROM_NAME=Gathered Roots Cleaning
EMAIL_FROM_ADDRESS=contact@your-domain.com
ADMIN_NOTIFICATION_EMAIL=admin@your-domain.com
CONTACT_FORM_RECIPIENT_EMAIL=contact@your-domain.com

# SMTP Configuration (Alternative naming)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=contact@your-domain.com
SMTP_PASSWORD=your-google-workspace-app-password
SMTP_SECURE=false
MAILER_FROM_ADDRESS=noreply@your-domain.com

# Rate Limiting
CONTACT_FORM_RATE_LIMIT=5
CONTACT_FORM_RATE_WINDOW=60000
BOOKING_FORM_RATE_LIMIT=3
BOOKING_FORM_RATE_WINDOW=3600000

# Square Configuration (for payment processing and client management)
SQUARE_ACCESS_TOKEN=your-square-access-token
SQUARE_ENVIRONMENT=sandbox
SQUARE_APPLICATION_ID=your-square-application-id
SQUARE_LOCATION_ID=your-square-location-id

# Security
NEXTAUTH_SECRET=your-random-secret-string

# Optional: Analytics
GOOGLE_ANALYTICS_ID=
FACEBOOK_PIXEL_ID=
EOF

print_status "Environment template created at /home/ubuntu/.env.template"

print_header "PM2 Ecosystem Template"
cat > /home/ubuntu/ecosystem.config.js << 'EOF'
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
    exec_mode: 'cluster',
    max_memory_restart: '1G',
    restart_delay: 4000,
    watch: false
  }]
};
EOF

print_status "PM2 ecosystem config created"

print_header "Nginx Site Template"
cat > /home/ubuntu/nginx-site.conf << 'EOF'
server {
    listen 80;
    server_name YOUR_DOMAIN.com www.YOUR_DOMAIN.com;

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
EOF

print_status "Nginx site template created at /home/ubuntu/nginx-site.conf"

print_header "Cron Job Templates"
cat > /home/ubuntu/cron-templates.txt << 'EOF'
# Add these to your crontab with: crontab -e

# SSL certificate auto-renewal (runs daily at noon)
0 12 * * * /usr/bin/certbot renew --quiet

# System updates (runs monthly on the 1st at 3 AM)
0 3 1 * * sudo apt update && sudo apt upgrade -y

# Log rotation for PM2 (runs weekly on Monday at 1 AM)
0 1 * * 1 pm2 flush
EOF

print_status "Cron job templates created"

print_header "Setup Summary"
print_status "✅ System packages updated and upgraded"
print_status "✅ Node.js 18 LTS installed"
print_status "✅ Git, Nginx, Certbot installed"
print_status "✅ PM2 process manager installed"
print_status "✅ Firewall configured (SSH, HTTP, HTTPS)"
print_status "✅ Directory structure created"
print_status "✅ Configuration templates created"
print_warning "📝 Client contact data is managed through Square (no database setup needed)"

print_header "Next Steps"
echo -e "${GREEN}1.${NC} Clone your repository:"
echo "   git clone https://github.com/your-username/gathered_roots.git"
echo ""
echo -e "${GREEN}2.${NC} Navigate to project directory:"
echo "   cd gathered_roots"
echo ""
echo -e "${GREEN}3.${NC} Copy and configure environment:"
echo "   cp template.env .env.local"
echo "   nano .env.local"
echo ""
echo -e "${GREEN}4.${NC} Install dependencies and build:"
echo "   npm install"
echo "   npm run build"
echo ""
echo -e "${GREEN}5.${NC} Configure Nginx:"
echo "   sudo cp /home/ubuntu/nginx-site.conf /etc/nginx/sites-available/gathered_roots"
echo "   sudo ln -s /etc/nginx/sites-available/gathered_roots /etc/nginx/sites-enabled/"
echo "   sudo nginx -t && sudo systemctl reload nginx"
echo ""
echo -e "${GREEN}6.${NC} Start the application:"
echo "   pm2 start /home/ubuntu/ecosystem.config.js"
echo "   pm2 save"
echo "   pm2 startup"
echo ""
echo -e "${GREEN}7.${NC} Set up SSL certificate:"
echo "   sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com"
echo ""
echo -e "${YELLOW}⚠${NC} Remember to:"
echo "   • Configure your Square account for client management"
echo "   • Set up your email SMTP credentials"
echo "   • Update your domain DNS settings"
echo "   • Test contact forms and booking functionality"

print_header "Setup Complete!"
print_status "Server is ready for Gathered Roots Cleaning deployment"
print_warning "Remember: Client contact information is now handled by Square" 