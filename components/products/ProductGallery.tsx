/**
 * Galerie d'images produit
 */

'use client'

import React, { useState } from 'react'
import Image from 'next/image'

interface ProductGalleryProps {
  images: string[]
  productName: string
  activeImage?: string
}

export const ProductGallery: React.FC<ProductGalleryProps> = ({
  images,
  productName,
  activeImage
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const currentImage = activeImage || images[selectedIndex]
  
  return (
    <div className="flex flex-col-reverse gap-3 sm:flex-row">
      {/* Thumbnails */}
      <div className="flex gap-2 overflow-auto sm:w-20 sm:flex-col">
        {images.map((src, index) => (
          <button
            key={`${src}-${index}`}
            onClick={() => setSelectedIndex(index)}
            className={`relative h-20 min-w-16 flex-shrink-0 overflow-hidden border-2 transition ${
              selectedIndex === index
                ? 'border-primary ring-2 ring-primary/20'
                : 'border-transparent hover:border-border'
            }`}
            aria-label={`Voir ${productName} vue ${index + 1}`}
          >
            <Image
              src={src}
              alt={`${productName} vue ${index + 1}`}
              fill
              sizes="80px"
              className="object-cover"
            />
          </button>
        ))}
      </div>
      
      {/* Image principale */}
      <div className="relative aspect-[.9] flex-1 overflow-hidden bg-muted">
        <Image
          src={currentImage}
          alt={productName}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      </div>
    </div>
  )
}
