/**
 * Types pour les produits SHOPICI
 */

export interface Variant {
  id: string
  name: string
  price: number
  image: string
  available?: boolean
}

export interface Product {
  slug: string
  name: string
  category: string
  subcategory: string
  price: number
  oldPrice?: number
  badge?: string
  available: boolean
  description: string
  details: string[]
  images: string[]
  variants?: Variant[]
  note?: string
}

export interface Category {
  name: string
  description: string
  image: string
}
