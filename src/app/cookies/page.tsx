import { CookiesContent } from "@/components/cookies-content"
import { getDictionary } from "@/i18n/get-dictionary"
import { getLocale } from "@/i18n/get-locale"
import type { Metadata } from "next"

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale()
  const dict = await getDictionary(locale)

  return {
    title: locale === "pt" ? "Política de Cookies - Orbizy" : "Cookies Policy - Orbizy",
    description: locale === "pt"
      ? "Nossa política de cookies e transparência no uso de rastreadores."
      : "Our cookies policy and transparency in the use of trackers.",
    alternates: {
      canonical: "https://invoice.orbizy.app/cookies",
    }
  }
}

export default async function CookiesPageRoute() {
  const locale = await getLocale()
  const dict = await getDictionary(locale)

  return <CookiesContent dict={dict} locale={locale} />
}
