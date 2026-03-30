import { DownloadContent } from "@/components/download-content"
import { getDictionary } from "@/i18n/get-dictionary"
import { getLocale } from "@/i18n/get-locale"
import type { Metadata } from "next"

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale()
  const dict = await getDictionary(locale)

  return {
    title: locale === "pt" ? "Baixe o Orbizy - App Mobile" : "Download Orbizy - Mobile App",
    description: locale === "pt"
      ? "Gerencie seu negócio de qualquer lugar com o aplicativo Orbizy. Disponível para iOS e Android."
      : "Manage your business from anywhere with the Orbizy app. Available for iOS and Android.",
    alternates: {
      canonical: "https://invoice.orbizy.app/download",
    }
  }
}

export default async function DownloadPageRoute() {
  const locale = await getLocale()
  const dict = await getDictionary(locale)

  return <DownloadContent dict={dict} locale={locale} />
}
