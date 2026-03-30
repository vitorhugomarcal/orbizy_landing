import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const PUBLIC_FILE = /\.(.*)$/
const SUPPORTED_LOCALES = ['pt', 'en']
const DEFAULT_LOCALE = 'pt'

export function proxy(request: NextRequest) {
  // Skip public files and API routes
  if (
    request.nextUrl.pathname.startsWith('/_next') ||
    request.nextUrl.pathname.includes('/api/') ||
    PUBLIC_FILE.test(request.nextUrl.pathname)
  ) {
    return NextResponse.next()
  }

  // 1. Get locale from cookie
  let locale = request.cookies.get('next-locale')?.value

  // 2. If no cookie, get from Accept-Language header
  if (!locale) {
    const acceptLanguage = request.headers.get('accept-language')
    if (acceptLanguage) {
      // Find the first supported locale in the header
      const preferred = acceptLanguage.split(',').find(lang => 
        SUPPORTED_LOCALES.some(supported => lang.trim().startsWith(supported))
      )
      if (preferred) {
        locale = preferred.trim().substring(0, 2)
      }
    }
  }

  // 3. Fallback to default
  if (!locale || !SUPPORTED_LOCALES.includes(locale)) {
    locale = DEFAULT_LOCALE
  }

  const response = NextResponse.next()
  
  // Set the locale in a header for server components to read easily
  response.headers.set('x-next-locale', locale)
  
  // Also set/refresh the cookie
  response.cookies.set('next-locale', locale, {
    path: '/',
    maxAge: 60 * 60 * 24 * 365, // 1 year
  })

  return response
}

export default proxy

export const config = {
  matcher: [
    // Match all routes except for the ones that start with:
    // - api (API routes)
    // - _next/static (static files)
    // - _next/image (image optimization files)
    // - favicon.ico (favicon file)
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
