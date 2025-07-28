import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Status do Sistema | Orbizy - Monitoramento em Tempo Real",
  description:
    "Acompanhe o status em tempo real dos serviços da Orbizy. Monitoramento de uptime, performance e incidentes da plataforma de gestão empresarial.",
  keywords:
    "status Orbizy, uptime, monitoramento, serviços, sistema, performance, incidentes",
  robots: "index, follow",
}

export default function StatusLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
