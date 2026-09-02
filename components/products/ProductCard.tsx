/**
 * Carte produit pour le catalogue
 */

'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Plus } from 'lucide-react'
import type { Product, Variant } from '@/lib/types'
import { formatPrice } from '@/lib/utils'
import { Badge } from '@/components/ui'
import { VariantSelector } from './VariantSelector'

interface ProductCardProps {
  product: Product
  onAddToCart: (product: Product, variant?: Variant) => void
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart
}) => {
  const [showVariants, setShowVariants] = useState(false)
  
  const handleAddClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    
    if (product.variants && product.variants.length > 0) {
      setShowVariants(true)
    } else {
      onAddToCart(product)
    }
  }
  
  const handleVariantSelect = (variant: Variant) => {
    onAddToCart(product, variant)
    setShowVariants(false)
  }
  
  return (
    <article className="group">
      {/* Image */}
      <div className="relative aspect-[4/5] overflow-hidden bg-muted">
        <Link href={`/produit/${product.slug}`} className="absolute inset-0 z-0">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover transition duration-700 group-hover:scale-105"
          />
        </Link>
        
        {/* Badge */}
        {product.badge && (
          <Badge
            className="absolute left-3 top-3 z-10 bg-background shadow-sm"
            variant="default"
          >
            {product.badge}
          </Badge>
        )}
        
        {/* Badge rupture de stock */}
        {!product.available && (
          <Badge
            className="absolute left-3 top-3 z-10"
            variant="destructive"
          >
            Rupture de stock
          </Badge>
        )}
        
        {/* Bouton Ajouter au panier */}
        {product.available && (
          <button
            onClick={handleAddClick}
            className="absolute bottom-3 left-3 right-3 z-20 flex translate-y-2 items-center justify-center gap-2 bg-background/95 py-3 text-xs font-semibold uppercase tracking-wider opacity-100 shadow-sm transition duration-300 hover:bg-primary hover:text-primary-foreground md:translate-y-3 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100"
          >
            <Plus size={14} />
            Ajouter au panier
          </button>
        )}
      </div>
      
      {/* Informations */}
      <Link href={`/produit/${product.slug}`} className="block pt-4">
        <p className="font-mono text-[10px] uppercase tracking-[.16em] text-muted-foreground">
          {product.category}
        </p>
        
        <h3 className="mt-1 font-serif text-xl line-clamp-1">
          {product.name}
        </h3>
        
        <p className="mt-1 text-xs text-muted-foreground line-clamp-1">
          {product.subcategory}
        </p>
        
        <div className="mt-2 flex items-center gap-2 text-sm">
          <span className="font-semibold">{formatPrice(product.price)}</span>
          {product.oldPrice && (
            <del className="text-xs text-muted-foreground">
              {formatPrice(product.oldPrice)}
            </del>
          )}
        </div>
      </Link>
      
      {/* Sélecteur de variantes */}
      {showVariants && product.variants && (
        <div className="mt-3 border border-border bg-background p-3">
          <p className="mb-2 text-xs font-semibold">Choisissez une saveur</p>
          <div className="flex flex-wrap gap-2">
            {product.variants.map((variant) => (
              <button
                key={variant.id}
                onClick={() => handleVariantSelect(variant)}
                disabled={variant.available === false}
                className="border border-border px-2 py-1 text-xs transition hover:border-primary hover:text-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {variant.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </article>
  )
}
