import { NextResponse } from "next/server";
import { verifyToken } from "./lib/joseAuth";

export async function middleware(req) {
  const token = req.cookies.get("token")?.value;
  const { pathname } = req.nextUrl;

  const isDashboard = pathname.startsWith("/dashboard");

  if (isDashboard) {
    if (!token) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
    const user = await verifyToken(token);
    if (!user) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }
  const isLoginPage = pathname === "/login";
  if (isLoginPage && token) {
    const user = await verifyToken(token);
    if (user) {
      return NextResponse.redirect(new URL(`/dashboard`, req.url));
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard", "/login"],
};
