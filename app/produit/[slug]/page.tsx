/**
 * Page produit dynamique
 */

'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'
import { ShoppingBag } from 'lucide-react'
import { Header, Footer, WhatsAppButton } from '@/components/layout'
import { CartDrawer } from '@/components/cart'
import {
  ProductGallery,
  ProductInfo,
  VariantSelector,
  QuantitySelector
} from '@/components/products'
import { Button, Toast } from '@/components/ui'
import { useCart } from '@/lib/contexts/CartContext'
import { findProductBySlug } from '@/lib/data'
import { generateWhatsAppLink, generateSimpleWhatsAppMessage } from '@/lib/utils'
import { formatPrice } from '@/lib/utils'
import type { Variant } from '@/lib/types'

export default function ProductPage() {
  const params = useParams()
  const router = useRouter()
  const cart = useCart()
  
  const slug = params.slug as string
  const product = findProductBySlug(slug)
  
  const [selectedVariant, setSelectedVariant] = useState<Variant | undefined>()
  const [quantity, setQuantity] = useState(1)
  
  // Si le produit n'existe pas, rediriger
  if (!product) {
    router.push('/catalogue')
    return null
  }
  
  // Vérifier si on peut ajouter au panier
  const canAddToCart = product.available && (!product.variants || selectedVariant)
  const displayPrice = selectedVariant?.price || product.price
  const displayImage = selectedVariant?.image || product.images[0]
  
  // Gérer l'ajout au panier
  const handleAddToCart = () => {
    if (canAddToCart) {
      cart.addItem(product, selectedVariant, quantity)
      setQuantity(1) // Réinitialiser la quantité
    }
  }
  
  // Message WhatsApp direct
  const productWhatsAppMessage = generateSimpleWhatsAppMessage(
    `${product.name}${selectedVariant ? ` — ${selectedVariant.name}` : ''}`
  )
  const whatsappUrl = generateWhatsAppLink(productWhatsAppMessage)
  
  return (
    <>
      <Header />
      
      <main className="mx-auto max-w-7xl px-5 py-10 lg:px-10">
        {/* Breadcrumb */}
        <nav className="mb-8 text-xs text-muted-foreground">
          <Link href="/" className="hover:text-foreground">
            Accueil
          </Link>
          {' / '}
          <Link href="/catalogue" className="hover:text-foreground">
            Boutique
          </Link>
          {' / '}
          <span>{product.name}</span>
        </nav>
        
        {/* Contenu */}
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          {/* Galerie */}
          <ProductGallery
            images={product.images}
            productName={product.name}
            activeImage={displayImage}
          />
          
          {/* Informations */}
          <div className="flex flex-col justify-center space-y-8">
            <ProductInfo
              product={product}
              selectedVariantPrice={selectedVariant?.price}
            />
            
            {/* Sélection variante */}
            {product.variants && (
              <VariantSelector
                variants={product.variants}
                selectedVariant={selectedVariant}
                onSelect={setSelectedVariant}
                label="Choisir une saveur"
              />
            )}
            
            {/* Sélection quantité */}
            {product.available && (
              <div className="flex gap-3">
                <QuantitySelector
                  quantity={quantity}
                  onIncrease={() => setQuantity(q => q + 1)}
                  onDecrease={() => setQuantity(q => Math.max(1, q - 1))}
                />
                
                <Button
                  onClick={handleAddToCart}
                  disabled={!canAddToCart}
                  variant="primary"
                  size="md"
                  className="flex-1"
                >
                  <ShoppingBag size={17} />
                  {product.variants && !selectedVariant
                    ? 'Choisir une saveur'
                    : 'Ajouter au panier'}
                </Button>
              </div>
            )}
            
            {/* Bouton WhatsApp direct */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center border border-foreground/20 py-4 text-sm font-semibold transition hover:-translate-y-0.5 hover:bg-muted"
            >
              Commander directement sur WhatsApp
            </a>
          </div>
        </div>
      </main>
      
      <Footer />
      <WhatsAppButton />
      
      {/* Cart Drawer */}
      <CartDrawer
        isOpen={cart.isOpen}
        onClose={() => cart.setIsOpen(false)}
        items={cart.items}
        total={cart.total}
        itemCount={cart.count}
        hydrated={cart.hydrated}
        onQuantityChange={cart.changeQuantity}
        onRemove={cart.removeItem}
      />
      
      {/* Toast */}
      {cart.toastMessage && <Toast message={cart.toastMessage} type="success" />}
    </>
  )
}
