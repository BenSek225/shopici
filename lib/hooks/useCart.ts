/**
 * Hook pour gérer le panier d'achat
 */

'use client'

import { useState, useCallback, useMemo } from 'react'
import type { CartItem, Product, Variant } from '@/lib/types'
import { useLocalStorage } from './useLocalStorage'
import { getItemPrice, getItemDisplayName } from '@/lib/utils/whatsapp'

const CART_STORAGE_KEY = 'shopici-cart'

export function useCart() {
  const [items, setItems, hydrated] = useLocalStorage<CartItem[]>(CART_STORAGE_KEY, [])
  const [isOpen, setIsOpen] = useState(false)
  const [toastMessage, setToastMessage] = useState('')

  /**
   * Génère une clé unique pour un item (produit + variante)
   */
  const getItemKey = useCallback((product: Product, variant?: Variant): string => {
    return `${product.slug}-${variant?.id || 'default'}`
  }, [])

  /**
   * Affiche un message toast temporaire
   */
  const showToast = useCallback((message: string) => {
    setToastMessage(message)
    setTimeout(() => setToastMessage(''), 2600)
  }, [])

  /**
   * Ajoute un produit au panier
   */
  const addItem = useCallback((product: Product, variant?: Variant, quantity = 1) => {
    const key = getItemKey(product, variant)
    
    setItems(prevItems => {
      const existingItem = prevItems.find(
        item => getItemKey(item.product, item.variant) === key
      )

      if (existingItem) {
        // Incrémenter la quantité
        return prevItems.map(item =>
          getItemKey(item.product, item.variant) === key
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      } else {
        // Ajouter nouveau item
        return [...prevItems, { product, variant, quantity }]
      }
    })

    const displayName = getItemDisplayName({ product, variant, quantity })
    showToast(`${displayName} ajouté au panier`)
    setIsOpen(true)
  }, [getItemKey, setItems, showToast])

  /**
   * Change la quantité d'un item
   */
  const changeQuantity = useCallback((item: CartItem, delta: number) => {
    setItems(prevItems =>
      prevItems.map(i =>
        i === item
          ? { ...i, quantity: Math.max(1, i.quantity + delta) }
          : i
      )
    )
  }, [setItems])

  /**
   * Supprime un item du panier
   */
  const removeItem = useCallback((item: CartItem) => {
    setItems(prevItems => prevItems.filter(i => i !== item))
    showToast('Article retiré du panier')
  }, [setItems, showToast])

  /**
   * Vide complètement le panier
   */
  const clearCart = useCallback(() => {
    setItems([])
    showToast('Panier vidé')
  }, [setItems, showToast])

  /**
   * Calcul du total
   */
  const total = useMemo(() => {
    return items.reduce((sum, item) => {
      return sum + getItemPrice(item) * item.quantity
    }, 0)
  }, [items])

  /**
   * Nombre total d'articles
   */
  const count = useMemo(() => {
    return items.reduce((sum, item) => sum + item.quantity, 0)
  }, [items])

  /**
   * Vérifie si le panier est vide
   */
  const isEmpty = useMemo(() => items.length === 0, [items])

  return {
    // État
    items,
    total,
    count,
    isEmpty,
    hydrated,
    isOpen,
    toastMessage,

    // Actions
    addItem,
    changeQuantity,
    removeItem,
    clearCart,
    setIsOpen,

    // Helpers exportés
    getItemPrice,
    getItemDisplayName
  }
}
