import { NextRequest, NextResponse } from 'next/server';


 



export async function middleware(request: NextRequest) {
  // console.time('middlewareExecutionTime');


  const url = request.nextUrl.clone();


  if (url.pathname.startsWith('/pages/api')) {
    return NextResponse.next(); // Skip middleware for API routes
  }


   const allCookies = request.cookies.getAll()

  // Log all cookies (remove in production)
  console.log('All Cookies:', allCookies)

  
  // // console.log( request.cookies.getall())
  // console.log(token)
  // if (token) {
  //   try {
  //     const decoded = jwt.verify(token, process.env.JWT_SECRET);
      
  //     // Access token contents
  //     console.log({
  //       userId: decoded.id,
  //       email: decoded.email,
  //       name: decoded.name,
  //       role: decoded.role
  //     });

  //     // You can use these decoded values for route protection
  //     if (decoded.role === 'patient') {
  //       // Patient-specific logic
  //     }

  //   } catch (error) {
  //     // Token invalid or expired
  //     console.error('Token verification failed');
  //     // Redirect to login or handle invalid token
  //   }
  // }
 
  
  
  if (url.pathname === '/pages/login' || url.pathname === '/pages/signup') {
    if(url.pathname === '/pages/login')
    { url.pathname = '/pages/auth/login';}
      else{
        url.pathname = '/pages/auth/signup';
    }
    // Redirect to '/auth/login'
    return NextResponse.redirect(url);
  }




  const userType = 'patient'

    if (url.pathname === '/pages/Dashboard' || url.pathname === '/Dashboard' || url.pathname == "/pages/Dashboard-Doc") {
      if(url.pathname == "/pages/Dashboard-Doc")
      {
        url.pathname = '/pages/dashDoc/notification';
      }
      else
      {
        if(userType == 'patient')
          {
            url.pathname = '/pages/dashPat/search';
          }else{
            if( userType == 'doctor')
            { url.pathname = '/pages/dashDoc/notification';}
              else{
                url.pathname = '/pages/auth/login ';
              }
          }
      }
  
  
      return NextResponse.redirect(url);
    }



    if (url.pathname === '/pages/dashDoc' ) {
      url.pathname = '/pages/dashDoc/notification'; // Redirect to '/dash/notification'
      return NextResponse.redirect(url);
    }

    if (url.pathname === '/pages/dashPat') {
      url.pathname = '/pages/dashPat/search'; // Redirect to '/dash/search'
      return NextResponse.redirect(url);
    }


  




  // console.timeEnd('middlewareExecutionTime');


  return NextResponse.next(); // Allow other routes to proceed as normal


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
}