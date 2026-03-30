import { HelpContent } from "@/components/help-content"
import { getDictionary } from "@/i18n/get-dictionary"
import { getLocale } from "@/i18n/get-locale"
import type { Metadata } from "next"

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale()
  const dict = await getDictionary(locale)

  return {
    title: locale === "pt" ? "Central de Ajuda - Orbizy" : "Help Center - Orbizy",
    description: locale === "pt"
      ? "Encontre respostas para suas dúvidas sobre a Orbizy. Suporte completo para sua gestão empresarial."
      : "Find answers to your questions about Orbizy. Complete support for your business management.",
    alternates: {
      canonical: "https://invoice.orbizy.app/ajuda",
    }
  }
}

export default async function AjudaPageRoute() {
  const locale = await getLocale()
  const dict = await getDictionary(locale)

  return <HelpContent dict={dict} locale={locale} />
}
