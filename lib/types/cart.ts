/**
 * Types pour le panier d'achat
 */

import type { Product, Variant } from './product'

export interface CartItem {
  product: Product
  variant?: Variant
  quantity: number
}

export interface Cart {
  items: CartItem[]
  total: number
  count: number
}
