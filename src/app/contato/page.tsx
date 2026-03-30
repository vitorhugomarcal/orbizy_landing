import { ContactContent } from "@/components/contact-content"
import { getDictionary } from "@/i18n/get-dictionary"
import { getLocale } from "@/i18n/get-locale"
import type { Metadata } from "next"

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale()
  const dict = await getDictionary(locale)

  return {
    title: locale === "pt" ? "Contato - Orbizy Atendimento" : "Contact - Orbizy Support",
    description: locale === "pt"
      ? "Entre em contato com a equipe da Orbizy. Suporte, vendas, parcerias e informações gerais."
      : "Contact the Orbizy team. Support, sales, partnerships and general information.",
    alternates: {
      canonical: "https://invoice.orbizy.app/contato",
    },
    openGraph: {
      title: locale === "pt" ? "Orbizy - Fale Conosco" : "Orbizy - Contact Us",
      description: locale === "pt" 
        ? "Estamos prontos para ajudar sua empresa a crescer." 
        : "We are ready to help your business grow.",
      images: ["/og-image.png"],
    },
  }
}

export default async function ContatoPageRoute() {
  const locale = await getLocale()
  const dict = await getDictionary(locale)

  return <ContactContent dict={dict} locale={locale} />
}
