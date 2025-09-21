/**
 * Authentication utility functions
 * 
 * This file contains both server-side and client-side authentication utilities.
 * Be careful to only import the appropriate functions in each context.
 */

// CLIENT-SIDE AUTH FUNCTIONS
// These can be imported in client components (use client)

/**
 * Client-side function to check if user is authenticated
 * Returns a promise that resolves to true if authenticated, false otherwise
 */
export async function checkAuthStatus(): Promise<boolean> {
  try {
    const response = await fetch('/api/admin/auth/status', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      // Include credentials to send cookies
      credentials: 'same-origin',
    });
    
    if (!response.ok) {
      return false;
    }
    
    const data = await response.json();
    return data.authenticated;
  } catch (error) {
    console.error('Error checking auth status:', error);
    return false;
  }
}