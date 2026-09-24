import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function proxy(req: NextRequest) {
  const pathname = req.nextUrl.pathname;

  // Public login pages
  if (pathname === "/user/login" || pathname === "/user/signup" || pathname === "/admin/login" || pathname==="/"
  ) {
    return NextResponse.next();
  }

  // Get session token
  const token = await getToken({
    req,
    secret: process.env.AUTH_SECRET,
  });

  // User routes
  if (pathname.startsWith("/user")) {
    // Not logged in
    if (!token) {
      return NextResponse.redirect(
        new URL("/user/login", req.url)
      );
    }

    // Logged in but not a user
    if (token.role !== "user") {
      return NextResponse.redirect(
        new URL("/admin", req.url)
      );
    }
  }

  // Admin routes
  if (pathname.startsWith("/admin")) {
    // Not logged in
    if (!token) {
      return NextResponse.redirect(
        new URL("/admin/login", req.url)
      );
    }

    // Logged in but not an admin
    if (token.role !== "admin") {
      return NextResponse.redirect(
        new URL("/user", req.url)
      );
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/user/:path*",
    "/admin/:path*",
  ],
};