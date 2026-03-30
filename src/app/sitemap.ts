import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://invoice.orbizy.app'
  const lastModified = new Date()

  const routes = [
    '',
    '/ajuda',
    '/contato',
    '/cookies',
    '/download',
    '/lgpd',
    '/segmentos',
    '/status',
    '/termos-de-uso-e-privacidade',
    '/tutoriais',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: route === '' ? 'daily' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }))
}
