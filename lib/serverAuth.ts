/**
 * Server-side authentication utilities
 * Only import these in server components or API routes
 */

import { cookies } from 'next/headers';

/**
 * Check if user is authenticated on the server-side
 */
export function isAuthenticated() {
  const cookieStore = cookies();
  const authCookie = cookieStore.get('admin_auth');
  return !!authCookie;
}