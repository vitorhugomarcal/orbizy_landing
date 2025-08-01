import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Baixar App Orbizy | iOS e Android - Gestão Empresarial Mobile",
  description:
    "Baixe o aplicativo Orbizy para iOS e Android. Gerencie seu negócio de qualquer lugar com nosso app completo de gestão empresarial.",
  keywords:
    "app Orbizy, download, iOS, Android, aplicativo, gestão empresarial, mobile",
  robots: "index, follow",
}

export default function DownloadLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
