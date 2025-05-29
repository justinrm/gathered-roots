# Namecheap Domain Setup for EC2 - Gathered Roots Cleaning

## Overview
This guide walks you through connecting your Namecheap domain to your EC2 instance for the Gathered Roots Cleaning website.

## Prerequisites
- Namecheap account with your domain
- EC2 instance running (follow the main deployment guide first)
- EC2 instance public IP address

## Step 1: Get Your EC2 Instance Details

### Find Your EC2 Public IP
```bash
# On your EC2 instance, run:
curl http://checkip.amazonaws.com

# Or from AWS Console:
# EC2 Dashboard > Instances > Select your instance > Details tab > Public IPv4 address
```

### Consider Using Elastic IP (Recommended)
An Elastic IP ensures your IP address won't change if you restart your EC2 instance.

**In AWS Console:**
1. Go to **EC2 Dashboard** > **Elastic IPs**
2. Click **Allocate Elastic IP address**
3. Choose **Amazon's pool of IPv4 addresses**
4. Click **Allocate**
5. Select the new Elastic IP > **Actions** > **Associate Elastic IP address**
6. Choose your EC2 instance and associate it

## Step 2: Configure DNS in Namecheap

### Access Namecheap Domain Management
1. Log into your **Namecheap account**
2. Go to **Domain List**
3. Click **Manage** next to your domain (e.g., `gatheredrootscleaning.com`)

### Option A: Using Namecheap BasicDNS (Recommended for simplicity)

#### Set DNS to Namecheap BasicDNS
1. In the **Nameservers** section, select **Namecheap BasicDNS**
2. Click the checkmark to save

#### Configure DNS Records
1. Click **Advanced DNS** tab
2. Delete any existing **A Records** and **CNAME Records** for `@` and `www`
3. Add the following records:

**A Records:**
```
Type: A Record
Host: @
Value: YOUR_EC2_ELASTIC_IP
TTL: 30 min (or Automatic)

Type: A Record  
Host: www
Value: YOUR_EC2_ELASTIC_IP
TTL: 30 min (or Automatic)
```

**Example:**
```
A Record    @      1.2.3.4        30 min
A Record    www    1.2.3.4        30 min
```

### Option B: Using CloudFlare (Recommended for performance)

#### Setup CloudFlare
1. Sign up for a **free CloudFlare account**
2. Add your domain to CloudFlare
3. CloudFlare will scan your DNS records
4. Update the nameservers in Namecheap to CloudFlare's nameservers

#### In Namecheap:
1. Go to **Domain List** > **Manage** > **Nameservers**
2. Select **Custom DNS**
3. Add CloudFlare nameservers (provided by CloudFlare):
   ```
   lola.ns.cloudflare.com
   rick.ns.cloudflare.com
   ```

#### In CloudFlare:
1. Add A records pointing to your EC2 IP:
   ```
   Type: A
   Name: @
   IPv4 address: YOUR_EC2_ELASTIC_IP
   Proxy status: Proxied (orange cloud)
   
   Type: A
   Name: www  
   IPv4 address: YOUR_EC2_ELASTIC_IP
   Proxy status: Proxied (orange cloud)
   ```

## Step 3: Verify DNS Propagation

### Check DNS Propagation
```bash
# Check from your local machine:
nslookup yourdomain.com
nslookup www.yourdomain.com

# Or use online tools:
# https://dnschecker.org/
# https://www.whatsmydns.net/
```

### Test Domain Resolution
```bash
# Ping your domain (should resolve to your EC2 IP):
ping yourdomain.com
ping www.yourdomain.com
```

**Note:** DNS propagation can take 15 minutes to 48 hours, but usually completes within 1-2 hours.

## Step 4: Update Your EC2 Configuration

### Update Nginx Configuration
```bash
# On your EC2 instance:
sudo nano /etc/nginx/sites-available/gathered-roots
```

Replace `YOUR_DOMAIN.com` with your actual domain:
```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;
    # ... rest of configuration
}
```

### Update Environment Variables
```bash
# Edit your environment file:
nano /home/ubuntu/gathered_roots/.env.local
```

Update the site URL:
```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

### Restart Services
```bash
# Test Nginx configuration:
sudo nginx -t

# Restart Nginx:
sudo systemctl restart nginx

# Restart your application:
pm2 restart gathered-roots
```

## Step 5: SSL Certificate Setup

### Install SSL Certificate with Certbot
```bash
# Install SSL certificate for your domain:
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

### Verify SSL Certificate
```bash
# Check certificate status:
sudo certbot certificates

# Test automatic renewal:
sudo certbot renew --dry-run
```

## Step 6: Test Your Setup

### Verify Website Access
1. **HTTP Test:** `http://yourdomain.com` (should redirect to HTTPS)
2. **HTTPS Test:** `https://yourdomain.com` (should load your website)
3. **WWW Test:** `https://www.yourdomain.com` (should work)

### Test Contact Forms
1. Navigate to your contact page
2. Submit a test contact form
3. Verify emails are being sent

## Common Namecheap DNS Configurations

### For Primary Domain (e.g., gatheredrootscleaning.com)
```
Type    Host    Value               TTL
A       @       YOUR_EC2_IP         30 min
A       www     YOUR_EC2_IP         30 min
```

### For Subdomain (e.g., if using subdomain like app.yourdomain.com)
```
Type    Host    Value               TTL
A       @       YOUR_EC2_IP         30 min
A       www     YOUR_EC2_IP         30 min
A       app     YOUR_EC2_IP         30 min
```

### For Email (if you plan to use email with your domain)
```
Type    Host    Value                           TTL
MX      @       mail.yourdomain.com             30 min
A       mail    YOUR_EMAIL_SERVER_IP            30 min
```

## Troubleshooting

### DNS Not Resolving
1. **Check TTL:** Lower TTL values propagate faster
2. **Flush DNS cache:** 
   ```bash
   # On Linux/Mac:
   sudo systemctl flush-dns
   # or
   sudo dscacheutil -flushcache
   
   # On Windows:
   ipconfig /flushdns
   ```
3. **Test different DNS servers:**
   ```bash
   nslookup yourdomain.com 8.8.8.8
   nslookup yourdomain.com 1.1.1.1
   ```

### SSL Certificate Issues
```bash
# Check if domain is accessible on port 80:
curl -I http://yourdomain.com

# Verify Nginx is running:
sudo systemctl status nginx

# Check Nginx error logs:
sudo tail -f /var/log/nginx/error.log
```

### Website Not Loading
1. **Check Security Groups:** Ensure ports 80 and 443 are open
2. **Check Nginx status:** `sudo systemctl status nginx`
3. **Check application status:** `pm2 status`
4. **Check firewall:** `sudo ufw status`

## Security Considerations

### Namecheap Account Security
- Enable **two-factor authentication** on your Namecheap account
- Use a **strong password**
- Enable **domain lock** to prevent unauthorized transfers

### DNS Security
- Consider using **CloudFlare** for DDoS protection
- Set up **DNSSEC** if available
- Monitor DNS changes with **DNS monitoring services**

## Performance Optimization with CloudFlare

If using CloudFlare:

### Enable Performance Features
1. **Auto Minify:** CSS, JavaScript, HTML
2. **Brotli Compression:** Better than gzip
3. **Rocket Loader:** Prioritize critical content
4. **Browser Cache TTL:** Set to 1 year for static assets

### Security Features
1. **SSL/TLS:** Full (strict) mode
2. **Always Use HTTPS:** Force HTTPS redirects
3. **HSTS:** Enable HTTP Strict Transport Security
4. **WAF:** Web Application Firewall rules

## Estimated Timeline

- **DNS Configuration:** 5-10 minutes
- **DNS Propagation:** 15 minutes - 2 hours
- **SSL Certificate:** 2-5 minutes
- **Testing:** 10-15 minutes
- **Total:** 30 minutes - 3 hours (depending on DNS propagation)

## Cost Considerations

### Namecheap Only
- **Domain registration:** $8-15/year
- **No additional DNS costs**

### With CloudFlare
- **Domain registration:** $8-15/year  
- **CloudFlare Free Plan:** $0/month
- **CloudFlare Pro:** $20/month (optional, for enhanced features)

The free CloudFlare plan provides excellent performance and security improvements for most small businesses like Gathered Roots Cleaning. 