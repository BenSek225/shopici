/**
 * Résumé du panier avec total et bouton de commande
 */

'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { formatPrice } from '@/lib/utils'
import { Button } from '@/components/ui'

interface CartSummaryProps {
  total: number
  itemCount: number
  onCheckout?: () => void
  onClose?: () => void
}

export const CartSummary: React.FC<CartSummaryProps> = ({
  total,
  itemCount,
  onCheckout,
  onClose
}) => {
  const handleCheckoutClick = () => {
    onCheckout?.()
    onClose?.()
  }
  
  return (
    <div className="border-t border-border pt-5 space-y-4">
      {/* Total */}
      <div className="flex justify-between items-center">
        <span className="font-semibold">Total produits</span>
        <span className="font-bold text-lg">{formatPrice(total)}</span>
      </div>
      
      {/* Info livraison */}
      <p className="text-xs text-muted-foreground">
        Livraison : à confirmer sur WhatsApp
      </p>
      
      {/* Bouton commander */}
      <Link
        href="/commande"
        onClick={handleCheckoutClick}
        className="flex w-full items-center justify-center gap-2 bg-primary py-4 text-sm font-semibold text-primary-foreground transition hover:-translate-y-0.5 hover:bg-foreground"
      >
        Passer la commande
        <ArrowRight size={16} />
      </Link>
      
      {/* Info articles */}
      <p className="text-center text-xs text-muted-foreground">
        {itemCount} article{itemCount > 1 ? 's' : ''} dans votre panier
      </p>
    </div>
  )
}
