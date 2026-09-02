/**
 * Sitemap pour SEO
 */

import { MetadataRoute } from 'next'
import { products, categories } from '@/lib/data'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://shopici.com'
  
  // Pages statiques
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1
    },
    {
      url: `${baseUrl}/catalogue`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9
    },
    {
      url: `${baseUrl}/commande`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8
    },
    {
      url: `${baseUrl}/politique-confidentialite`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.3
    },
    {
      url: `${baseUrl}/conditions-utilisation`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.3
    }
  ]
  
  // Pages produits
  const productPages = products.map((product) => ({
    url: `${baseUrl}/produit/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7
  }))
  
  return [...staticPages, ...productPages]
}
