import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"

const geistSans = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Orbizy",
  description: "Innovate and Grow",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} antialiased`}>{children}</body>
    </html>
  )
}
