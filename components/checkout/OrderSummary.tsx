/**
 * Résumé de commande dans le checkout
 */

'use client'

import React from 'react'
import Image from 'next/image'
import type { CartItem } from '@/lib/types'
import { formatPrice } from '@/lib/utils'
import { getItemDisplayName, getItemPrice } from '@/lib/utils/whatsapp'

interface OrderSummaryProps {
  items: CartItem[]
  subtotal: number
  deliveryFee: number
  total: number
}

export const OrderSummary: React.FC<OrderSummaryProps> = ({
  items,
  subtotal,
  deliveryFee,
  total
}) => {
  return (
    <div className="h-fit space-y-6 border border-border p-6">
      {/* Titre */}
      <div>
        <p className="font-mono text-xs uppercase tracking-[.2em] text-primary">
          Récapitulatif
        </p>
        <h3 className="mt-1 font-serif text-2xl">Votre commande</h3>
      </div>
      
      {/* Liste des articles */}
      <div className="space-y-4 border-t border-border pt-4">
        {items.map((item, index) => {
          const itemName = getItemDisplayName(item)
          const itemPrice = getItemPrice(item)
          const itemTotal = itemPrice * item.quantity
          const itemImage = item.variant?.image || item.product.images[0]
          
          return (
            <div key={`${item.product.slug}-${item.variant?.id || 'default'}-${index}`} className="flex gap-3">
              {/* Image miniature */}
              <div className="relative h-16 w-14 flex-shrink-0 overflow-hidden rounded-sm bg-muted">
                <Image
                  src={itemImage}
                  alt={itemName}
                  fill
                  sizes="56px"
                  className="object-cover"
                />
              </div>
              
              {/* Détails */}
              <div className="flex min-w-0 flex-1 flex-col justify-between text-sm">
                <p className="font-medium line-clamp-2">{itemName}</p>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs text-muted-foreground">
                    Qté : {item.quantity}
                  </span>
                  <span className="font-semibold">
                    {formatPrice(itemTotal)}
                  </span>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      
      {/* Totaux */}
      <div className="space-y-3 border-t border-border pt-4 text-sm">
        {/* Sous-total */}
        <div className="flex justify-between">
          <span className="text-muted-foreground">Sous-total</span>
          <span className="font-medium">{formatPrice(subtotal)}</span>
        </div>
        
        {/* Frais de livraison */}
        <div className="flex justify-between">
          <span className="text-muted-foreground">Livraison</span>
          <span className="font-medium">
            {deliveryFee > 0 ? formatPrice(deliveryFee) : 'À confirmer'}
          </span>
        </div>
        
        {/* Total */}
        <div className="flex justify-between border-t border-border pt-3 text-base">
          <span className="font-semibold">Total</span>
          <span className="text-xl font-bold text-primary">
            {formatPrice(total)}
          </span>
        </div>
      </div>
      
      {/* Note */}
      <p className="text-xs text-muted-foreground">
        Le paiement sera confirmé sur WhatsApp après validation de votre commande.
      </p>
    </div>
  )
}
