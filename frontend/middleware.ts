import { NextRequest, NextResponse } from 'next/server';
import { jwtVerify } from 'jose';  // Import jwtVerify from jose

export async function middleware(request: NextRequest) {
  // Get the 'azouaou' cookie directly
  const tokenCookie = request.cookies.get('azouaou');

  // Default user if no token
  let user = null;

  if (tokenCookie) {
    const token = tokenCookie.value;

    try {
      // Verify and decode the JWT token using the secret from your environment variables
      const secret = new TextEncoder().encode(process.env.NEXT_PUBLIC_JWT_SECRET as string);
      const { payload } = await jwtVerify(token, secret);

      // Now safely assign the user data
      user = payload as { role: string; id: string; email: string }; // Update as needed based on your token's structure
      console.log('Decoded JWT:', payload);
    } catch (error) {
      // Token verification failed
      console.error('Token verification failed:', error);
    }
  } else {
    console.log('No "azouaou" cookie found');
  }

  // Clone the request URL to modify the pathname for redirection
  const url = request.nextUrl.clone();

  // Skip middleware for API routes
  if (url.pathname.startsWith('/api')) {
    return NextResponse.next(); // Skip middleware for API routes
  }

  // Redirection logic based on user role and route access
  if (url.pathname.startsWith('/pages/dashDoc')) {
    // If route starts with /pages/dashDoc/ and user is not a doctor
    if (!user || user.role !== 'doctor') {
      url.pathname = '/pages/auth/login'; // Redirect non-doctors to login
      return NextResponse.redirect(url);
    }
    url.pathname = '/pages/dashDoc/notification'; // Redirect non-doctors to login
    return NextResponse.redirect(url);

  } else if (url.pathname.startsWith('/pages/dashPat')) {
    // If route starts with /pages/dashPat/ and user is not a patient
    if (!user || user.role !== 'patient') {
      url.pathname = '/pages/auth/login'; // Redirect non-patients to login
      return NextResponse.redirect(url);
    }
  
  } else if (url.pathname === '/pages/login' || url.pathname === '/pages/signup') {
    // If user is logged in, redirect to dashboard
    if (user) {
      if (user.role === 'doctor') {
        url.pathname = '/pages/dashDoc/notification'; // Redirect doctor to their dashboard
      } else if (user.role === 'patient') {
        url.pathname = '/pages/dashPat/search'; // Redirect patient to their dashboard
      } else {
        url.pathname = '/pages/auth/login'; // Default fallback if role is not recognized
      }
      return NextResponse.redirect(url);
    }
  }

  // Allow other routes to proceed as normal
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/', 
    '/notification', 
    '/appointments', 
    '/historique', 
    '/profile', 
    '/search', 
    '/chat', 
    '/pages/:path*'
  ]
};
