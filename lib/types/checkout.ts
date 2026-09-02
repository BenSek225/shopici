/**
 * Types pour le processus de commande
 */

import type { CartItem } from './cart'

export interface CheckoutFormData {
  name: string
  phone: string
  city: string
  commune?: string
  quarter: string
  address?: string
}

export interface Order {
  customer: CheckoutFormData
  items: CartItem[]
  subtotal: number
  deliveryFee: number
  total: number
  timestamp: Date
}
