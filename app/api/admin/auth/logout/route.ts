import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

/**
 * API endpoint for admin logout
 */
export async function POST() {
  // Delete auth cookie
  cookies().delete('admin_auth');
  
  // Return success
  return NextResponse.json({ success: true });
}