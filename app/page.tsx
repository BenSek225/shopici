/**
 * Page d'accueil SHOPICI
 */

'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Header, Footer, WhatsAppButton } from '@/components/layout'
import { CartDrawer } from '@/components/cart'
import { ProductCard } from '@/components/products'
import { Toast } from '@/components/ui'
import { useCart } from '@/lib/contexts/CartContext'
import { products, categories } from '@/lib/data'
import { SITE_CONFIG } from '@/lib/constants/config'
import { generateWhatsAppLink, generateSimpleWhatsAppMessage } from '@/lib/utils'

export default function HomePage() {
  const cart = useCart()
  const whatsappUrl = generateWhatsAppLink(generateSimpleWhatsAppMessage())
  
  return (
    <>
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="mx-auto grid max-w-7xl gap-10 px-5 pb-16 pt-12 md:grid-cols-[.9fr_1.1fr] md:items-center md:pb-24 md:pt-20 lg:px-10">
          <div className="max-w-xl">
            <p className="font-mono text-xs uppercase tracking-[.25em] text-primary">
              {SITE_CONFIG.tagline}
            </p>
            
            <h1 className="mt-5 font-serif text-5xl leading-[.98] tracking-tight sm:text-7xl">
              Les essentiels qui trouvent{' '}
              <em className="text-primary">leur place.</em>
            </h1>
            
            <p className="mt-7 max-w-md text-base leading-7 text-muted-foreground">
              Découvrez les produits de lancement SHOPICI : nutrition, bien-être,
              beauté et objets pratiques, avec une commande simple en Côte d'Ivoire.
            </p>
            
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/catalogue"
                className="inline-flex items-center gap-3 bg-primary px-6 py-4 text-sm font-semibold text-primary-foreground transition hover:-translate-y-1 hover:bg-foreground"
              >
                Découvrir la boutique <ArrowRight size={17} />
              </Link>
              
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center border border-foreground/20 px-6 py-4 text-sm font-semibold transition hover:-translate-y-1 hover:bg-muted"
              >
                Commander sur WhatsApp
              </a>
            </div>
            
            <div className="mt-12 grid grid-cols-2 gap-5 border-t border-border pt-5 text-xs text-muted-foreground">
              <span>Livraison en Côte d'Ivoire</span>
              <span>Service client disponible</span>
            </div>
          </div>
          
          <div className="relative aspect-[.9] overflow-hidden bg-muted md:aspect-[.85]">
            <Image
              src={SITE_CONFIG.heroImage}
              alt="Produit SHOPICI"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 55vw"
              className="object-cover"
            />
            <div className="absolute bottom-5 left-5 bg-background/90 px-4 py-3 backdrop-blur-sm">
              <p className="font-mono text-[10px] uppercase tracking-wider">
                Nouveau lancement
              </p>
              <p className="mt-1 font-serif text-lg">Des essentiels, autrement.</p>
            </div>
          </div>
        </section>
        
        {/* Categories Section */}
        <section className="border-y border-border" id="categories">
          <div className="mx-auto max-w-7xl px-5 py-16 lg:px-10">
            <div className="mb-8 flex items-end justify-between">
              <div>
                <p className="font-mono text-xs uppercase tracking-[.2em] text-primary">
                  Explorer
                </p>
                <h2 className="mt-2 font-serif text-4xl">Par univers.</h2>
              </div>
              <Link
                href="/catalogue"
                className="hidden items-center gap-2 text-sm underline sm:flex hover:text-primary"
              >
                Voir tout <ArrowRight size={15} />
              </Link>
            </div>
            
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {categories.map((category) => (
                <Link
                  key={category.name}
                  href={`/catalogue?categorie=${encodeURIComponent(category.name)}`}
                  className="group relative aspect-[.85] overflow-hidden bg-muted"
                >
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-background/90 p-4 transition group-hover:bg-primary group-hover:text-primary-foreground">
                    <p className="font-serif text-xl">{category.name}</p>
                    <p className="mt-1 text-xs opacity-70">{category.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
        
        {/* Products Section */}
        <section className="mx-auto max-w-7xl px-5 py-16 lg:px-10">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-[.2em] text-primary">
                La sélection
              </p>
              <h2 className="mt-2 font-serif text-4xl">Les indispensables.</h2>
            </div>
            <Link
              href="/catalogue"
              className="hidden items-center gap-2 text-sm underline sm:flex hover:text-primary"
            >
              Tout voir <ArrowRight size={15} />
            </Link>
          </div>
          
          <div className="grid grid-cols-2 gap-x-3 gap-y-10 md:grid-cols-3 lg:grid-cols-5">
            {products.map((product) => (
              <ProductCard
                key={product.slug}
                product={product}
                onAddToCart={(product, variant) => cart.addItem(product, variant)}
              />
            ))}
          </div>
        </section>
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
