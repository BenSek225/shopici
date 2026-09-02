/**
 * Catégories de produits SHOPICI
 */

import type { Category } from '@/lib/types'

export const categories: Category[] = [
  {
    name: 'Performance',
    description: 'Croissance, nutrition et énergie au quotidien.',
    image: '/height-grow.png'
  },
  {
    name: 'Bien-être',
    description: 'Des rituels intimes et personnels, choisis avec soin.',
    image: '/lubrifiant.png'
  },
  {
    name: 'Beauté',
    description: 'Des essentiels pour prendre soin de vous.',
    image: '/5d-white.png'
  },
  {
    name: 'Maison & Accessoires',
    description: 'Des objets pratiques pour votre quotidien.',
    image: '/briquet-electrique.png'
  }
]

/**
 * Récupère une catégorie par son nom
 */
export function getCategoryByName(name: string): Category | undefined {
  return categories.find(c => c.name.toLowerCase() === name.toLowerCase())
}

/**
 * Liste tous les noms de catégories
 */
export function getAllCategoryNames(): string[] {
  return categories.map(c => c.name)
}
