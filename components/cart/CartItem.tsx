/**
 * Item individuel dans le panier
 */

'use client'

import React from 'react'
import Image from 'next/image'
import { Minus, Plus, Trash2 } from 'lucide-react'
import type { CartItem as CartItemType } from '@/lib/types'
import { formatPrice } from '@/lib/utils'
import { getItemDisplayName, getItemPrice } from '@/lib/utils/whatsapp'

interface CartItemProps {
  item: CartItemType
  onQuantityChange: (delta: number) => void
  onRemove: () => void
}

export const CartItem: React.FC<CartItemProps> = ({
  item,
  onQuantityChange,
  onRemove
}) => {
  const itemName = getItemDisplayName(item)
  const itemPrice = getItemPrice(item)
  const itemTotal = itemPrice * item.quantity
  const itemImage = item.variant?.image || item.product.images[0]
  
  return (
    <div className="flex gap-4 border-b border-border py-4">
      {/* Image */}
      <div className="relative h-24 w-20 shrink-0 overflow-hidden rounded-sm bg-muted">
        <Image
          src={itemImage}
          alt={itemName}
          fill
          sizes="80px"
          className="object-cover"
        />
      </div>
      
      {/* Détails */}
      <div className="flex min-w-0 flex-1 flex-col justify-between">
        {/* Nom et prix */}
        <div className="flex justify-between gap-2">
          <h4 className="font-medium text-sm leading-tight line-clamp-2">
            {itemName}
          </h4>
          <p className="whitespace-nowrap text-sm font-semibold">
            {formatPrice(itemTotal)}
          </p>
        </div>
        
        {/* Prix unitaire */}
        <p className="text-xs text-muted-foreground">
          {formatPrice(itemPrice)} l'unité
        </p>
        
        {/* Contrôles quantité */}
        <div className="flex items-center gap-3 text-sm">
          {/* Diminuer */}
          <button
            onClick={() => onQuantityChange(-1)}
            disabled={item.quantity === 1}
            className="rounded-full border border-border p-1 transition hover:bg-muted disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Diminuer la quantité"
          >
            <Minus size={13} />
          </button>
          
          {/* Quantité */}
          <span className="min-w-6 text-center font-medium">
            {item.quantity}
          </span>
          
          {/* Augmenter */}
          <button
            onClick={() => onQuantityChange(1)}
            className="rounded-full border border-border p-1 transition hover:bg-muted"
            aria-label="Augmenter la quantité"
          >
            <Plus size={13} />
          </button>
          
          {/* Supprimer */}
          <button
            onClick={onRemove}
            className="ml-auto text-muted-foreground transition hover:text-destructive"
            aria-label={`Supprimer ${itemName}`}
          >
            <Trash2 size={16} />
          </button>
        </div>
      </div>
    </div>
  )
}
