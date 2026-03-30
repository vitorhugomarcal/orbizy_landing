import { TutorialsContent } from "@/components/tutorials-content"
import { getDictionary } from "@/i18n/get-dictionary"
import { getLocale } from "@/i18n/get-locale"
import type { Metadata } from "next"

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale()
  const dict = await getDictionary(locale)

  return {
    title: locale === "pt" ? "Tutoriais Orbizy - Centro de Aprendizado" : "Orbizy Tutorials - Learning Center",
    description: locale === "pt"
      ? "Domine todas as funcionalidades da Orbizy com nossos tutoriais e guias práticos."
      : "Master all Orbizy features with our tutorials and practical guides.",
    alternates: {
      canonical: "https://invoice.orbizy.app/tutoriais",
    }
  }
}

export default async function TutoriaisPageRoute() {
  const locale = await getLocale()
  const dict = await getDictionary(locale)

  return <TutorialsContent dict={dict} locale={locale} />
}
