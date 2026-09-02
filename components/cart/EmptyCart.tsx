/**
 * Affichage du panier vide
 */

'use client'

import React from 'react'
import Link from 'next/link'
import { ShoppingBag } from 'lucide-react'

interface EmptyCartProps {
  onClose?: () => void
}

export const EmptyCart: React.FC<EmptyCartProps> = ({ onClose }) => {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-4 text-center px-6">
      <ShoppingBag size={48} className="text-muted-foreground" />
      
      <div className="space-y-2">
        <h3 className="font-serif text-2xl">Votre panier est vide</h3>
        <p className="text-sm text-muted-foreground max-w-xs">
          Découvrez notre sélection et ajoutez vos essentiels.
        </p>
      </div>
      
      <Link
        href="/catalogue"
        onClick={onClose}
        className="mt-4 inline-flex items-center justify-center bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:-translate-y-0.5 hover:bg-foreground"
      >
        Découvrir la boutique
      </Link>
    </div>
  )
}
