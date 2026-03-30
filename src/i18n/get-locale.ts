import { cookies, headers } from 'next/headers'

export const getLocale = async () => {
  const cookieStore = await cookies()
  const localeFromCookie = cookieStore.get('next-locale')?.value

  if (localeFromCookie) {
    return localeFromCookie
  }

  const headersList = await headers()
  const localeFromHeader = headersList.get('x-next-locale')

  if (localeFromHeader) {
    return localeFromHeader
  }

  return 'pt' // default
}
