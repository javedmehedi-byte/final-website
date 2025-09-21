import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

/**
 * API endpoint for admin login
 */
export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json();
    const { password } = body;
    
    // Get admin password from environment variables
    const adminPassword = process.env.ADMIN_PASSWORD || 'adminpass';
    
    // Validate password
    if (password !== adminPassword) {
      return NextResponse.json(
        { error: 'Invalid password' },
        { status: 401 }
      );
    }
    
    // Set auth cookie
    cookies().set('admin_auth', 'authenticated', { 
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24, // 1 day
      path: '/',
    });
    
    // Return success
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}