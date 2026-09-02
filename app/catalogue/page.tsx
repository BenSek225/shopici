/**
 * Page catalogue SHOPICI
 */

'use client'

import React, { useState, useMemo, useEffect } from 'react'
import { Search } from 'lucide-react'
import { Header, Footer, WhatsAppButton } from '@/components/layout'
import { CartDrawer } from '@/components/cart'
import { ProductCard } from '@/components/products'
import { Toast } from '@/components/ui'
import { useCart } from '@/lib/hooks'
import { products, categories, filterProductsByCategory, searchProducts, sortProducts } from '@/lib/data'

export default function CataloguePage() {
  const cart = useCart()
  const [query, setQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('Toutes')
  const [sortBy, setSortBy] = useState<'default' | 'price-asc' | 'price-desc' | 'name'>('default')
  
  // Récupérer la catégorie depuis l'URL
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const category = params.get('categorie')
    if (category) {
      setSelectedCategory(category)
    }
  }, [])
  
  // Filtrage et tri des produits
  const filteredProducts = useMemo(() => {
    let result = filterProductsByCategory(selectedCategory)
    
    if (query) {
      result = searchProducts(query).filter(p =>
        selectedCategory === 'Toutes' || p.category === selectedCategory
      )
    }
    
    return sortProducts(result, sortBy)
  }, [query, selectedCategory, sortBy])
  
  const categoryOptions = ['Toutes', ...categories.map(c => c.name)]
  
  return (
    <>
      <Header cartCount={cart.count} onCartClick={() => cart.setIsOpen(true)} />
      
      <main className="mx-auto max-w-7xl px-5 py-12 lg:px-10">
        {/* En-tête */}
        <div className="flex flex-col justify-between gap-5 border-b border-border pb-10 md:flex-row md:items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-[.2em] text-primary">
              La boutique
            </p>
            <h1 className="mt-3 font-serif text-5xl">Tout SHOPICI.</h1>
            <p className="mt-3 text-muted-foreground">
              Les cinq essentiels du lancement, choisis pour mieux accompagner vos journées.
            </p>
          </div>
          
          {/* Recherche */}
          <div className="relative w-full md:w-64">
            <Search size={17} className="absolute left-3 top-3 text-muted-foreground" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Rechercher"
              aria-label="Rechercher un produit"
              className="w-full border-b border-border bg-transparent py-3 pl-9 text-sm outline-none focus:border-primary"
            />
          </div>
        </div>
        
        {/* Filtres */}
        <div className="flex flex-wrap items-center justify-between gap-4 py-7">
          {/* Catégories */}
          <div className="flex flex-wrap gap-2">
            {categoryOptions.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 py-2 text-xs transition hover:-translate-y-0.5 ${
                  selectedCategory === category
                    ? 'bg-primary text-primary-foreground'
                    : 'border border-border hover:bg-muted'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Tri */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
            aria-label="Trier les produits"
            className="border-b border-border bg-transparent py-2 text-xs outline-none focus:border-primary"
          >
            <option value="default">Trier par</option>
            <option value="price-asc">Prix croissant</option>
            <option value="price-desc">Prix décroissant</option>
            <option value="name">Nom</option>
          </select>
        </div>
        
        {/* Résultats */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 gap-x-3 gap-y-10 md:grid-cols-3 lg:grid-cols-4">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.slug}
                product={product}
                onAddToCart={(product, variant) => cart.addItem(product, variant)}
              />
            ))}
          </div>
        ) : (
          <div className="py-16 text-center">
            <p className="text-muted-foreground">
              Aucun produit ne correspond à votre recherche.
            </p>
          </div>
        )}
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
