import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Tutoriais | Orbizy - Aprenda a Usar a Plataforma",
  description:
    "Tutoriais completos para dominar a Orbizy. Guias passo a passo, vídeos explicativos e dicas para otimizar sua gestão empresarial.",
  keywords:
    "tutoriais Orbizy, como usar, guias, passo a passo, vídeos, treinamento, gestão empresarial",
  robots: "index, follow",
}

export default function TutoriaisLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
