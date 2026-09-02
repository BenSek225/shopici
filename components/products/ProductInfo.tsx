/**
 * Informations détaillées du produit
 */

'use client'

import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import type { Product } from '@/lib/types'
import { formatPrice } from '@/lib/utils'
import { Badge } from '@/components/ui'

interface ProductInfoProps {
  product: Product
  selectedVariantPrice?: number
}

export const ProductInfo: React.FC<ProductInfoProps> = ({
  product,
  selectedVariantPrice
}) => {
  const [openSection, setOpenSection] = useState<string>('details')
  
  const displayPrice = selectedVariantPrice || product.price
  
  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? '' : section)
  }
  
  return (
    <div className="space-y-6">
      {/* Catégorie et badge */}
      <div className="flex items-center gap-2">
        <p className="font-mono text-xs uppercase tracking-[.2em] text-primary">
          {product.category} · {product.subcategory}
        </p>
        {product.badge && (
          <Badge variant="default">{product.badge}</Badge>
        )}
      </div>
      
      {/* Nom du produit */}
      <h1 className="font-serif text-4xl leading-none sm:text-5xl">
        {product.name}
      </h1>
      
      {/* Prix */}
      <div className="flex items-center gap-3 text-lg">
        <strong className="text-2xl">{formatPrice(displayPrice)}</strong>
        {product.oldPrice && !selectedVariantPrice && (
          <del className="text-sm text-muted-foreground">
            {formatPrice(product.oldPrice)}
          </del>
        )}
      </div>
      
      {/* Description */}
      <p className="max-w-lg text-base leading-7 text-muted-foreground">
        {product.description}
      </p>
      
      {/* Disponibilité */}
      {!product.available && (
        <div className="rounded-sm border border-destructive/50 bg-destructive/10 p-4">
          <p className="text-sm font-medium text-destructive">
            Ce produit est actuellement en rupture de stock.
          </p>
        </div>
      )}
      
      {/* Sections dépliables */}
      <div className="border-t border-border">
        {/* Détails */}
        <div className="border-b border-border">
          <button
            onClick={() => toggleSection('details')}
            className="flex w-full items-center justify-between py-5 text-left text-sm font-semibold"
            aria-expanded={openSection === 'details'}
          >
            Détails
            <ChevronDown
              size={17}
              className={`transition ${openSection === 'details' ? 'rotate-180' : ''}`}
            />
          </button>
          {openSection === 'details' && (
            <div className="pb-5">
              <ul className="space-y-2 text-sm leading-6 text-muted-foreground">
                {product.details.map((detail, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-muted-foreground" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        
        {/* Note / Avertissement */}
        {product.note && (
          <div className="border-b border-border">
            <button
              onClick={() => toggleSection('note')}
              className="flex w-full items-center justify-between py-5 text-left text-sm font-semibold"
              aria-expanded={openSection === 'note'}
            >
              À savoir
              <ChevronDown
                size={17}
                className={`transition ${openSection === 'note' ? 'rotate-180' : ''}`}
              />
            </button>
            {openSection === 'note' && (
              <p className="pb-5 text-sm leading-6 text-muted-foreground">
                {product.note}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
