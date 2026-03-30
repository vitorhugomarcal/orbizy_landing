import { LGPDContent } from "@/components/lgpd-content"
import { getDictionary } from "@/i18n/get-dictionary"
import { getLocale } from "@/i18n/get-locale"
import type { Metadata } from "next"

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale()
  const dict = await getDictionary(locale)

  return {
    title: locale === "pt" ? "LGPD - Proteção de Dados - Orbizy" : "LGPD - Data Protection - Orbizy",
    description: locale === "pt"
      ? "Nossos compromissos com a proteção de dados pessoais e privacidade."
      : "Our commitments to personal data protection and privacy.",
    alternates: {
      canonical: "https://invoice.orbizy.app/lgpd",
    }
  }
}

export default async function LGPDPageRoute() {
  const locale = await getLocale()
  const dict = await getDictionary(locale)

  return <LGPDContent dict={dict} locale={locale} />
}
