import { NextRequest, NextResponse } from 'next/server';

// Define paths that don't need authentication
const PUBLIC_PATHS = [
  '/admin/login',
  '/api/admin/auth/login'
];

// Define paths that require authentication
const PROTECTED_PATHS = [
  '/admin',
  '/api/admin/applications'
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Skip middleware for non-admin routes
  if (!pathname.startsWith('/admin') && !pathname.startsWith('/api/admin')) {
    return NextResponse.next();
  }
  
  // Allow access to login-related pages
  if (PUBLIC_PATHS.some(path => pathname.startsWith(path))) {
    return NextResponse.next();
  }
  
  // Check for auth cookie on protected paths
  const authCookie = request.cookies.get('admin_auth');
  
  // If no auth cookie or incorrect value, redirect to login
  if (!authCookie || authCookie.value !== 'authenticated') {
    // Handle API requests differently (return 401 instead of redirect)
    if (pathname.startsWith('/api/')) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      );
    }
    
    // For normal routes, redirect to login page
    const url = request.nextUrl.clone();
    url.pathname = '/admin/login';
    return NextResponse.redirect(url);
  }
  
  // Allow access for authenticated users
  return NextResponse.next();
}

// Configure the paths that this middleware should run on
export const config = {
  matcher: ['/admin/:path*', '/api/admin/:path*'],
};