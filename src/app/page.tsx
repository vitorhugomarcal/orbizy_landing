import { LandingContent } from "@/components/landing-content"
import { getDictionary } from "@/i18n/get-dictionary"
import { getLocale } from "@/i18n/get-locale"
import type { Metadata } from "next"

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale()
  const dict = await getDictionary(locale)

  return {
    title: dict.seo.title,
    description: dict.seo.description,
    keywords: dict.seo.keywords,
    openGraph: {
      title: dict.seo.title,
      description: dict.seo.description,
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: "Orbizy",
        },
      ],
      locale: locale === "pt" ? "pt_BR" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: dict.seo.title,
      description: dict.seo.description,
      images: ["/og-image.png"],
    },
    alternates: {
      canonical: "https://invoice.orbizy.app",
    },
    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      google: "google-site-verification-id", // Substituir pelo ID real
    },
  }
}

export default async function Home() {
  const locale = await getLocale()
  const dict = await getDictionary(locale)

  return <LandingContent dict={dict} locale={locale} />
}
