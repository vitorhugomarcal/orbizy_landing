import { TermsContent } from "@/components/terms-content"
import { getDictionary } from "@/i18n/get-dictionary"
import { getLocale } from "@/i18n/get-locale"
import type { Metadata } from "next"

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale()
  const dict = await getDictionary(locale)

  return {
    title: locale === "pt" ? "Termos de Uso e Privacidade - Orbizy" : "Terms of Use and Privacy - Orbizy",
    description: locale === "pt"
      ? "Leia os Termos de Uso e a Política de Privacidade da plataforma Orbizy."
      : "Read the Terms of Use and Privacy Policy of the Orbizy platform.",
    alternates: {
      canonical: "https://invoice.orbizy.app/termos-de-uso-e-privacidade",
    }
  }
}

export default async function TermsPageRoute() {
  const locale = await getLocale()
  const dict = await getDictionary(locale)

  return <TermsContent dict={dict} locale={locale} />
}
