import { NextApiRequest, NextApiResponse } from 'next';
import { LRUCache } from 'lru-cache';

/**
 * Rate limiting configuration
 */
type RateLimitOptions = {
  /** How many requests to allow in the specified interval */
  limit: number;
  /** Time window in milliseconds */
  windowMs: number;
  /** If true, returns detailed rate limit information in response headers */
  includeHeaders?: boolean;
};

/**
 * Track requests by client IP or custom identifier
 * Cache maps key to an array of timestamps when requests occurred
 */
const rateLimit = (options: RateLimitOptions) => {
  const {
    limit = 5,
    windowMs = 60 * 1000, // 1 minute default
    includeHeaders = true,
  } = options;

  // Create LRU cache to store IP addresses and their request counts
  const cache = new LRUCache<string, number[]>({
    max: 500, // Maximum number of IPs to track
    ttl: windowMs, // Time to live
  });

  return async function rateLimitMiddleware(
    req: NextApiRequest,
    res: NextApiResponse,
    next?: () => void
  ) {
    // Get client IP or use fallback if not available
    const ip =
      (req.headers['x-forwarded-for'] as string) || req.socket.remoteAddress || '127.0.0.1';

    // Get current timestamp
    const now = Date.now();

    // Get existing timestamps for this IP or initialize empty array
    let timestamps = cache.get(ip) || [];

    // Filter out timestamps outside the current window
    timestamps = timestamps.filter((timestamp) => timestamp > now - windowMs);

    // Add current timestamp
    timestamps.push(now);

    // Update the cache
    cache.set(ip, timestamps);

    // Count requests in current window
    const requestCount = timestamps.length;

    // Calculate time remaining until window resets in seconds
    const windowReset = Math.ceil((windowMs - (now - (timestamps[0] || 0))) / 1000);

    // Set rate limit headers if enabled
    if (includeHeaders) {
      res.setHeader('X-RateLimit-Limit', limit.toString());
      res.setHeader('X-RateLimit-Remaining', Math.max(0, limit - requestCount).toString());
      res.setHeader('X-RateLimit-Reset', windowReset.toString());
    }

    // If request count exceeds limit, return 429 Too Many Requests
    if (requestCount > limit) {
      return res.status(429).json({
        message: 'Too many requests, please try again later.',
        retryAfter: windowReset,
      });
    }

    // If using as Express middleware, call next()
    if (next) {
      return next();
    }

    // Otherwise continue processing the request
    return null;
  };
};

export default rateLimit;
