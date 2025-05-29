/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // SEO and Performance optimizations
  images: {
    formats: ['image/webp', 'image/avif'],
    domains: ['www.gatheredrootscleaning.com'],
  },
  
  // Security and SEO headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ];
  },
  
  // SEO-friendly redirects
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/contact-us',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/services/standard',
        destination: '/services/standard-clean',
        permanent: true,
      },
      {
        source: '/services/deep',
        destination: '/services/deep-clean',
        permanent: true,
      },
    ];
  },
  
  // Generate static pages for better SEO
  trailingSlash: false,
};

module.exports = nextConfig; 