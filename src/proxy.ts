import { NextRequest,NextResponse } from "next/server";
export function proxy(request:NextRequest){const path=request.nextUrl.pathname;if((path.startsWith("/app")||path.startsWith("/admin"))&&!request.cookies.has("__session")){const url=new URL("/login",request.url);url.searchParams.set("next",path);return NextResponse.redirect(url)}return NextResponse.next()}
export const config={matcher:["/app/:path*","/admin/:path*"]};
