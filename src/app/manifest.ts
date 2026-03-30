import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Orbizy Invoice - Gestão de Orçamentos e Faturas',
    short_name: 'Orbizy Invoice',
    description: 'A solução definitiva para criar orçamentos profissionais e gerenciar faturamento de forma Simples, Rápida e Segura.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#f97316',
    icons: [
      {
        src: '/icon.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  }
}
