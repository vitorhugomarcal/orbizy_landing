import { Metadata } from "next"

export const metadata: Metadata = {
  title:
    "Orbizy para Prestadores de Serviços | Gestão Empresarial Especializada",
  description:
    "Plataforma completa para prestadores de serviços. Gerencie clientes, agendamentos, orçamentos e financeiro. Ideal para consultores, técnicos, freelancers e profissionais autônomos.",
  keywords:
    "gestão serviços, prestadores de serviços, consultoria, técnicos, freelancers, agendamentos, orçamentos",
  robots: "index, follow",
}

export default function ServicosLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
