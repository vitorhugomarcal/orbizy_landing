import { StatusContent } from "@/components/status-content"
import { getDictionary } from "@/i18n/get-dictionary"
import { getLocale } from "@/i18n/get-locale"
import type { Metadata } from "next"

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale()
  const dict = await getDictionary(locale)

  return {
    title: locale === "pt" ? "Status do Sistema - Orbizy" : "System Status - Orbizy",
    description: locale === "pt"
      ? "Verifique o status em tempo real dos serviços da plataforma Orbizy."
      : "Check real-time status of Orbizy platform services.",
    alternates: {
      canonical: "https://invoice.orbizy.app/status",
    }
  }
}

export default async function StatusPageRoute() {
  const locale = await getLocale()
  const dict = await getDictionary(locale)

  return <StatusContent dict={dict} locale={locale} />
}
