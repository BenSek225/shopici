/**
 * Context pour partager l'état du panier dans toute l'application
 */

'use client'

import React, { createContext, useContext, ReactNode } from 'react'
import { useCart as useCartHook } from '@/lib/hooks/useCart'

type CartContextType = ReturnType<typeof useCartHook>

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const cart = useCartHook()
  
  return (
    <CartContext.Provider value={cart}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within CartProvider')
  }
  return context
}
