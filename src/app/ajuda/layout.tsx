import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Central de Ajuda | Orbizy - Suporte e FAQ",
  description:
    "Central de ajuda completa da Orbizy. Encontre respostas rápidas, guias detalhados e soluções para todas as suas dúvidas sobre gestão empresarial.",
  keywords:
    "ajuda Orbizy, FAQ, suporte, dúvidas, como usar, problemas, soluções, central de ajuda",
  robots: "index, follow",
}

export default function AjudaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
