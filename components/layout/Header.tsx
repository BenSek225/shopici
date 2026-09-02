/**
 * En-tête du site avec navigation
 */

'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Search, ShoppingBag, Menu } from 'lucide-react'
import { MobileMenu } from './MobileMenu'

interface HeaderProps {
  cartCount?: number
  onCartClick?: () => void
}

export const Header: React.FC<HeaderProps> = ({ cartCount = 0, onCartClick }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  
  return (
    <>
      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/90 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-10">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="font-serif text-3xl font-semibold tracking-tight">
              SHOP<span className="text-primary">ICI</span>
            </span>
          </Link>
          
          {/* Navigation desktop */}
          <nav className="hidden items-center gap-8 text-sm font-medium lg:flex">
            <Link
              href="/"
              className="transition hover:-translate-y-0.5 hover:text-primary"
            >
              Accueil
            </Link>
            <Link
              href="/catalogue"
              className="transition hover:-translate-y-0.5 hover:text-primary"
            >
              Boutique
            </Link>
            <Link
              href="/#categories"
              className="transition hover:-translate-y-0.5 hover:text-primary"
            >
              Catégories
            </Link>
            <Link
              href="/#contact"
              className="transition hover:-translate-y-0.5 hover:text-primary"
            >
              Contact
            </Link>
          </nav>
          
          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* Recherche (desktop) */}
            <Link
              href="/catalogue"
              aria-label="Rechercher"
              className="hidden rounded-full p-2 transition hover:bg-muted sm:block"
            >
              <Search size={19} />
            </Link>
            
            {/* Panier */}
            <button
              onClick={onCartClick}
              aria-label={`Ouvrir le panier, ${cartCount} article${cartCount > 1 ? 's' : ''}`}
              className="relative rounded-full p-2 transition hover:-translate-y-0.5 hover:bg-muted"
            >
              <ShoppingBag size={20} />
              {cartCount > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1 text-[10px] text-primary-foreground">
                  {cartCount}
                </span>
              )}
            </button>
            
            {/* Menu burger (mobile) */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="rounded-full p-2 lg:hidden"
              aria-label="Ouvrir le menu"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>
      
      {/* Menu mobile */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  )
}
