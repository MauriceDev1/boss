import { NextRequest, NextResponse } from 'next/server';
import checkAuth from './app/actions/checkAuth';

export async function middleware(request: NextRequest): Promise<NextResponse> {
  const { isAuthenticated } = await checkAuth();

  if (!isAuthenticated) {
    const loginUrl = new URL('/login', request.nextUrl.origin); // Absolute URL
    return NextResponse.redirect(loginUrl);
  }

  // Proceed normally if authenticated
  return NextResponse.next();
}

export const config = {
  matcher: ['/female', '/rooms/add', '/rooms/my'], // Routes where this middleware applies
};
