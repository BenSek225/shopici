/**
 * Drawer latéral du panier
 */

'use client'

import React, { useEffect } from 'react'
import { X } from 'lucide-react'
import type { CartItem as CartItemType } from '@/lib/types'
import { CartItem } from './CartItem'
import { CartSummary } from './CartSummary'
import { EmptyCart } from './EmptyCart'

interface CartDrawerProps {
  isOpen: boolean
  onClose: () => void
  items: CartItemType[]
  total: number
  itemCount: number
  hydrated: boolean
  onQuantityChange: (item: CartItemType, delta: number) => void
  onRemove: (item: CartItemType) => void
  onCheckout?: () => void
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  total,
  itemCount,
  hydrated,
  onQuantityChange,
  onRemove,
  onCheckout
}) => {
  // Bloquer le scroll du body quand le drawer est ouvert
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])
  
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-foreground/25"
          onClick={onClose}
          aria-hidden="true"
        />
      )}
      
      {/* Drawer */}
      <aside
        aria-label="Panier"
        aria-hidden={!isOpen}
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-background shadow-2xl transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* En-tête */}
        <div className="flex items-center justify-between border-b border-border p-6 pb-5">
          <div>
            <p className="font-mono text-xs uppercase tracking-[.2em] text-muted-foreground">
              Votre sélection
            </p>
            <h2 className="font-serif text-3xl">Le panier</h2>
          </div>
          
          <button
            onClick={onClose}
            className="rounded-full p-2 hover:bg-muted"
            aria-label="Fermer le panier"
          >
            <X size={20} />
          </button>
        </div>
        
        {/* Contenu */}
        <div className="flex-1 overflow-y-auto p-6 pt-0">
          {!hydrated ? (
            // État de chargement
            <div className="flex h-full items-center justify-center">
              <p className="text-sm text-muted-foreground">
                Restauration de votre panier…
              </p>
            </div>
          ) : items.length === 0 ? (
            // Panier vide
            <EmptyCart onClose={onClose} />
          ) : (
            // Liste des articles
            <div className="space-y-0">
              {items.map((item, index) => (
                <CartItem
                  key={`${item.product.slug}-${item.variant?.id || 'default'}-${index}`}
                  item={item}
                  onQuantityChange={(delta) => onQuantityChange(item, delta)}
                  onRemove={() => onRemove(item)}
                />
              ))}
            </div>
          )}
        </div>
        
        {/* Résumé (si panier non vide) */}
        {hydrated && items.length > 0 && (
          <div className="border-t border-border p-6">
            <CartSummary
              total={total}
              itemCount={itemCount}
              onCheckout={onCheckout}
              onClose={onClose}
            />
          </div>
        )}
      </aside>
    </>
  )
}
