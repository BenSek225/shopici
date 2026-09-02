/**
 * Sélecteur de variantes (saveurs, couleurs, etc.)
 */

'use client'

import React from 'react'
import type { Variant } from '@/lib/types'
import { formatPrice } from '@/lib/utils'

interface VariantSelectorProps {
  variants: Variant[]
  selectedVariant?: Variant
  onSelect: (variant: Variant) => void
  label?: string
}

export const VariantSelector: React.FC<VariantSelectorProps> = ({
  variants,
  selectedVariant,
  onSelect,
  label = 'Choisir une variante'
}) => {
  if (!variants || variants.length === 0) return null
  
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold">{label}</p>
        {selectedVariant && (
          <p className="text-sm text-muted-foreground">
            {formatPrice(selectedVariant.price)}
          </p>
        )}
      </div>
      
      <div className="flex flex-wrap gap-2">
        {variants.map((variant) => {
          const isSelected = selectedVariant?.id === variant.id
          const isAvailable = variant.available !== false
          
          return (
            <button
              key={variant.id}
              onClick={() => isAvailable && onSelect(variant)}
              disabled={!isAvailable}
              className={`border px-3 py-2 text-xs transition ${
                isSelected
                  ? 'border-primary bg-primary text-primary-foreground'
                  : 'border-border hover:border-primary hover:bg-primary/5'
              } ${
                !isAvailable && 'cursor-not-allowed opacity-50'
              }`}
              aria-pressed={isSelected}
              aria-label={`${variant.name}${!isAvailable ? ' (Indisponible)' : ''}`}
            >
              {variant.name}
              {!isAvailable && ' (Rupture)'}
            </button>
          )
        })}
      </div>
      
      {!selectedVariant && (
        <p className="text-xs text-muted-foreground">
          Veuillez sélectionner une option
        </p>
      )}
    </div>
  )
}
