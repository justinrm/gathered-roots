import type { NextApiRequest, NextApiResponse } from 'next';
import { validateDatabaseSetup, getClientErrorMessage } from '../../../lib/dbSetup';

/**
 * API endpoint to check database status and connectivity
 * Useful for health monitoring and diagnostics
 */
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Only allow GET requests
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  try {
    // Validate database setup
    const validation = await validateDatabaseSetup();

    if (validation.isValid) {
      return res.status(200).json({
        status: 'ok',
        message: 'Database is properly configured and accessible',
      });
    } else {
      // Database validation failed
      const isDev = process.env.NODE_ENV === 'development';
      
      return res.status(503).json({
        status: 'error',
        message: getClientErrorMessage(validation.error),
        // Only include detailed error information in development mode
        ...(isDev && validation.error ? {
          error: {
            type: validation.error.type,
            message: validation.error.message,
            details: validation.error.details,
          }
        } : {})
      });
    }
  } catch (error) {
    console.error('Error checking database status:', error);
    
    return res.status(500).json({
      status: 'error',
      message: getClientErrorMessage(error),
      ...(process.env.NODE_ENV === 'development' ? {
        error: error instanceof Error ? error.message : String(error)
      } : {})
    });
  }
} 