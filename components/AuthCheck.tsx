"use client"

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { checkAuthStatus } from '@/lib/authUtils';

/**
 * Component that checks authentication status and redirects to login if not authenticated
 * Place this in admin layouts and pages that require authentication
 */
export default function AuthCheck({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        setIsLoading(true);
        const isAuthenticated = await checkAuthStatus();
        
        if (!isAuthenticated) {
          // Redirect to login if not authenticated
          router.push('/admin/login');
        } else {
          setIsAuth(true);
        }
      } catch (error) {
        console.error('Auth check error:', error);
        router.push('/admin/login');
      } finally {
        setIsLoading(false);
      }
    };

    // Check auth status immediately
    checkAuth();
    
    // Set up periodic check every 5 minutes (adjust as needed)
    const intervalId = setInterval(checkAuth, 5 * 60 * 1000);
    
    // Clean up interval on unmount
    return () => clearInterval(intervalId);
  }, [router]);

  // Show loading state while checking authentication
  if (isLoading && !isAuth) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-center">
          <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin mx-auto mb-4"></div>
          <h2 className="text-xl font-semibold text-gray-700">Verifying authentication...</h2>
        </div>
      </div>
    );
  }

  // Only render children when authenticated
  return isAuth ? <>{children}</> : null;
}