import type { Metadata, Viewport } from "next"
import { Montserrat } from "next/font/google"
import { getLocale } from "@/i18n/get-locale"
import { getDictionary } from "@/i18n/get-dictionary"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
})

export const viewport: Viewport = {
  themeColor: "#f97316",
  width: "device-width",
  initialScale: 1,
}

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale()
  const dict = await getDictionary(locale)
  const baseUrl = "https://invoice.orbizy.app"

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: dict.seo.title,
      template: `%s | Orbizy Invoice`,
    },
    description: dict.seo.description,
    keywords: dict.seo.keywords,
    authors: [{ name: "Orbizy", url: "https://orbizy.app" }],
    creator: "Orbizy",
    publisher: "Orbizy",
    manifest: "/manifest.json",
    icons: {
      icon: [
        { url: "/favicon.png" },
        { url: "/icon.png", sizes: "32x32", type: "image/png" },
      ],
      apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    },
    openGraph: {
      type: "website",
      locale: locale === 'pt' ? 'pt_BR' : 'en_US',
      url: baseUrl,
      title: dict.seo.title,
      description: dict.seo.description,
      siteName: "Orbizy Invoice",
      images: [
        {
          url: "/icon.png",
          width: 512,
          height: 512,
          alt: "Orbizy Invoice - Gestão de Orçamentos",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.seo.title,
      description: dict.seo.description,
      images: ["/icon.png"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: baseUrl,
      languages: {
        'pt-BR': `${baseUrl}/?lang=pt`,
        'en-US': `${baseUrl}/?lang=en`,
      },
    },
  }
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const locale = await getLocale()
  const lang = locale === 'pt' ? 'pt-BR' : 'en-US'

  return (
    <html lang={lang} className={`${montserrat.variable}`}>
      <body className={`${montserrat.className} antialiased selection:bg-orange-100 selection:text-orange-900`}>
        {children}
      </body>
    </html>
  )
}
