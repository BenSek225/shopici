/**
 * Catalogue de produits SHOPICI
 */

import type { Product, Variant } from '@/lib/types'

/**
 * Helper pour générer plusieurs images identiques (provisoire)
 */
const generateImages = (image: string, count = 5): string[] => 
  Array(count).fill(image)

/**
 * Variantes du lubrifiant (5 saveurs)
 */
const lubricantVariants: Variant[] = [
  { id: 'fraise', name: 'Fraise', price: 6500, image: '/lubrifiant.png', available: true },
  { id: 'vanille', name: 'Vanille', price: 6500, image: '/lubrifiant.png', available: true },
  { id: 'menthe', name: 'Menthe', price: 6500, image: '/lubrifiant.png', available: true },
  { id: 'cerise', name: 'Cerise', price: 6500, image: '/lubrifiant.png', available: true },
  { id: 'chocolat', name: 'Chocolat', price: 6500, image: '/lubrifiant.png', available: true }
]

/**
 * Catalogue complet des produits
 */
export const products: Product[] = [
  {
    slug: 'height-grow',
    name: 'Height Grow',
    category: 'Performance',
    subcategory: 'Croissance & nutrition',
    price: 15000,
    badge: 'Lancement',
    available: true,
    description: 'Un complément à base de calcium destiné à accompagner la croissance et la santé osseuse.',
    details: [
      'Complément alimentaire à base de calcium',
      'À intégrer dans une routine équilibrée',
      'Respecter les conseils d\'utilisation indiqués sur l\'emballage'
    ],
    images: generateImages('/height-grow.png'),
    note: 'Ce produit accompagne une bonne hygiène de vie. Il ne garantit pas une augmentation de taille.'
  },
  {
    slug: 'lubrifiant-comestible',
    name: 'Lubrifiant comestible',
    category: 'Bien-être',
    subcategory: 'Intimité & plaisir',
    price: 6500,
    badge: '5 saveurs',
    available: true,
    description: 'Un lubrifiant comestible et parfumé, proposé en cinq saveurs pour varier les envies.',
    details: [
      'Texture agréable et parfumée',
      'Choisir une saveur avant l\'ajout au panier',
      'Usage externe uniquement · conserver à température ambiante'
    ],
    images: generateImages('/lubrifiant.png'),
    variants: lubricantVariants,
    note: 'Produit réservé à un public majeur.'
  },
  {
    slug: 'the-minceur',
    name: 'Thé minceur',
    category: 'Bien-être',
    subcategory: 'Routine & équilibre',
    price: 8000,
    oldPrice: 10000,
    badge: 'Nouveau',
    available: true,
    description: 'Une infusion bien-être à intégrer dans une routine équilibrée et active.',
    details: [
      'Mélange de plantes sélectionnées',
      'À déguster dans le cadre d\'une alimentation variée',
      'Suivre la préparation indiquée sur l\'emballage'
    ],
    images: generateImages('/the-minceur.png'),
    note: 'Ce produit ne remplace pas une alimentation équilibrée ni un avis médical.'
  },
  {
    slug: '5d-white',
    name: '5D White',
    category: 'Beauté',
    subcategory: 'Soin du sourire',
    price: 12000,
    oldPrice: 15000,
    badge: 'Best-seller',
    available: true,
    description: 'Un kit de blanchiment dentaire à utiliser simplement à la maison, selon les instructions.',
    details: [
      'Kit avec dispositif lumineux et accessoires',
      'Lire attentivement la notice avant utilisation',
      'Ne pas utiliser en cas de sensibilité sans conseil professionnel'
    ],
    images: generateImages('/5d-white.png'),
    note: 'En cas de doute ou de sensibilité, demandez conseil à un professionnel de santé.'
  },
  {
    slug: 'briquet-electrique-rechargeable',
    name: 'Briquet électrique rechargeable',
    category: 'Maison & Accessoires',
    subcategory: 'Objets pratiques',
    price: 9000,
    badge: 'Pratique',
    available: true,
    description: 'Un briquet électrique rechargeable, pratique au quotidien et sans flamme traditionnelle.',
    details: [
      'Recharge USB',
      'Résistant au vent',
      'Garder hors de portée des enfants'
    ],
    images: generateImages('/briquet-electrique.png')
  }
]

/**
 * Trouve un produit par son slug
 */
export function findProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug)
}

/**
 * Filtre les produits par catégorie
 */
export function filterProductsByCategory(category: string): Product[] {
  if (category.toLowerCase() === 'toutes') {
    return products
  }
  return products.filter(p => 
    p.category.toLowerCase() === category.toLowerCase()
  )
}

/**
 * Recherche de produits par terme
 */
export function searchProducts(query: string): Product[] {
  const lowerQuery = query.toLowerCase().trim()
  
  if (!lowerQuery) return products
  
  return products.filter(p =>
    p.name.toLowerCase().includes(lowerQuery) ||
    p.description.toLowerCase().includes(lowerQuery) ||
    p.category.toLowerCase().includes(lowerQuery) ||
    p.subcategory.toLowerCase().includes(lowerQuery)
  )
}

/**
 * Trie les produits
 */
export function sortProducts(
  products: Product[],
  sortBy: 'default' | 'price-asc' | 'price-desc' | 'name'
): Product[] {
  const sorted = [...products]
  
  switch (sortBy) {
    case 'price-asc':
      return sorted.sort((a, b) => a.price - b.price)
    case 'price-desc':
      return sorted.sort((a, b) => b.price - a.price)
    case 'name':
      return sorted.sort((a, b) => a.name.localeCompare(b.name, 'fr'))
    default:
      return sorted
  }
}

/**
 * Obtient les produits disponibles uniquement
 */
export function getAvailableProducts(): Product[] {
  return products.filter(p => p.available)
}
