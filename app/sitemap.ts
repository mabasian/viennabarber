import type { MetadataRoute } from 'next'

const siteUrl = 'https://viennabarber.mabasian.dev'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date('2026-06-03'),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}
