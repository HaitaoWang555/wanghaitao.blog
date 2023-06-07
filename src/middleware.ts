import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/resume')) {
    const cookies = request.cookies

    if (cookies.get('authorization')?.value === process.env.NEXT_PUBLIC_AUTHORIZATION) {
      return NextResponse.next()
    } else {
      return NextResponse.redirect(new URL('/login?redirect=' + request.nextUrl.pathname, request.url))
    }
  }
  return NextResponse.next()
}
