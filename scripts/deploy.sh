#!/bin/bash

# Gathered Roots Cleaning - EC2 Deployment Script
# This script automates the deployment process for updates
# Note: Client contact information is now managed through Square (no database operations needed)

set -e  # Exit on any error

echo "🚀 Starting deployment for Gathered Roots Cleaning..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Configuration
APP_DIR="/home/ubuntu/gathered_roots"
BACKUP_DIR="/home/ubuntu/backups"
PM2_APP_NAME="gathered-roots"

# Function to print colored output
print_status() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Create backup directory if it doesn't exist
mkdir -p $BACKUP_DIR

# Function to create application backup
backup_application() {
    print_status "Creating application backup..."
    BACKUP_FILE="$BACKUP_DIR/app_backup_$(date +%Y%m%d_%H%M%S).tar.gz"
    
    cd $APP_DIR
    tar -czf "$BACKUP_FILE" \
        --exclude='node_modules' \
        --exclude='.next' \
        --exclude='.git' \
        --exclude='*.log' \
        .
    
    print_status "Application backup created: $BACKUP_FILE"
}

# Function to update application
update_application() {
    print_status "Updating application code..."
    
    cd $APP_DIR
    
    # Stash any local changes
    git stash push -m "Auto-stash before deployment $(date)"
    
    # Pull latest changes
    git pull origin main
    
    # Install/update dependencies
    print_status "Installing dependencies..."
    npm ci --production=false
    
    # Build application
    print_status "Building application..."
    npm run build
    
    print_status "Application updated successfully!"
}

# Function to restart services
restart_services() {
    print_status "Restarting services..."
    
    # Restart PM2 application
    pm2 restart $PM2_APP_NAME
    
    # Wait a moment for the app to start
    sleep 5
    
    # Check if app is running
    if pm2 list | grep -q "online.*$PM2_APP_NAME"; then
        print_status "Application restarted successfully!"
    else
        print_error "Application failed to start properly"
        pm2 logs $PM2_APP_NAME --lines 20
        exit 1
    fi
}

# Function to run health check
health_check() {
    print_status "Running health check..."
    
    # Wait for application to be fully ready
    sleep 10
    
    # Check if the application responds
    if curl -f http://localhost:3000 > /dev/null 2>&1; then
        print_status "✅ Health check passed!"
    else
        print_error "❌ Health check failed!"
        print_error "Application may not be responding correctly"
        pm2 logs $PM2_APP_NAME --lines 10
        exit 1
    fi
}

# Function to cleanup old backups (keep last 5)
cleanup_backups() {
    print_status "Cleaning up old backups..."
    find $BACKUP_DIR -name "app_backup_*.tar.gz" -type f | sort -r | tail -n +6 | xargs rm -f
    print_status "Backup cleanup completed"
}

# Main deployment process
main() {
    print_status "Starting deployment process..."
    print_warning "Client contact data is managed through Square (no database operations)"
    
    # Check if we're in the right directory
    if [ ! -d "$APP_DIR" ]; then
        print_error "Application directory not found: $APP_DIR"
        exit 1
    fi
    
    # Check if PM2 app exists
    if ! pm2 list | grep -q "$PM2_APP_NAME"; then
        print_error "PM2 application '$PM2_APP_NAME' not found"
        print_status "Available PM2 applications:"
        pm2 list
        exit 1
    fi
    
    # Create backup
    backup_application
    
    # Update application
    update_application
    
    # Restart services
    restart_services
    
    # Health check
    health_check
    
    # Cleanup
    cleanup_backups
    
    print_status "🎉 Deployment completed successfully!"
    print_status "Application is running at: http://localhost:3000"
    print_status "Check logs with: pm2 logs $PM2_APP_NAME"
    print_warning "Remember: Client data is managed through Square"
}

# Handle script arguments
case "${1:-deploy}" in
    "deploy")
        main
        ;;
    "backup")
        backup_application
        ;;
    "restart")
        restart_services
        health_check
        ;;
    "health")
        health_check
        ;;
    "logs")
        pm2 logs $PM2_APP_NAME
        ;;
    *)
        echo "Usage: $0 {deploy|backup|restart|health|logs}"
        echo "  deploy  - Full deployment (default)"
        echo "  backup  - Create application backup only"
        echo "  restart - Restart services and health check"
        echo "  health  - Run health check only"
        echo "  logs    - Show application logs"
        exit 1
        ;;
esac 