import { NextResponse } from 'next/server';
import { isAuthenticated } from '@/lib/serverAuth';

/**
 * API endpoint to check authentication status
 * Used by client components to verify if user is still logged in
 */
export async function GET() {
  // Use server-side auth utility to check authentication
  const authenticated = isAuthenticated();
  
  return NextResponse.json({
    authenticated
  });
}