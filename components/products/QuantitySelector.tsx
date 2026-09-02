/**
 * Sélecteur de quantité
 */

'use client'

import React from 'react'
import { Minus, Plus } from 'lucide-react'

interface QuantitySelectorProps {
  quantity: number
  onIncrease: () => void
  onDecrease: () => void
  min?: number
  max?: number
}

export const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  quantity,
  onIncrease,
  onDecrease,
  min = 1,
  max
}) => {
  const canDecrease = quantity > min
  const canIncrease = !max || quantity < max
  
  return (
    <div className="flex items-center border border-border">
      <button
        onClick={onDecrease}
        disabled={!canDecrease}
        className="p-4 transition hover:bg-muted disabled:cursor-not-allowed disabled:opacity-30"
        aria-label="Diminuer la quantité"
      >
        <Minus size={15} />
      </button>
      
      <span className="min-w-12 text-center text-sm font-medium">
        {quantity}
      </span>
      
      <button
        onClick={onIncrease}
        disabled={!canIncrease}
        className="p-4 transition hover:bg-muted disabled:cursor-not-allowed disabled:opacity-30"
        aria-label="Augmenter la quantité"
      >
        <Plus size={15} />
      </button>
    </div>
  )
}
