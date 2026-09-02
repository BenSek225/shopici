/**
 * Menu mobile (burger menu)
 */

'use client'

import React from 'react'
import Link from 'next/link'
import { X } from 'lucide-react'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

const menuItems = [
  { href: '/', label: 'Accueil' },
  { href: '/catalogue', label: 'Boutique' },
  { href: '/#categories', label: 'Catégories' },
  { href: '/#contact', label: 'Contact' }
]

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null
  
  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 z-40 bg-foreground/25 lg:hidden"
        onClick={onClose}
        aria-hidden="true"
      />
      
      {/* Menu */}
      <nav
        className="fixed right-0 top-0 z-50 flex h-full w-64 flex-col bg-background p-6 shadow-2xl lg:hidden"
        role="dialog"
        aria-label="Menu mobile"
      >
        <div className="flex items-center justify-between border-b border-border pb-5">
          <span className="font-serif text-xl font-semibold">
            SHOP<span className="text-primary">ICI</span>
          </span>
          <button
            onClick={onClose}
            className="rounded-full p-2 hover:bg-muted"
            aria-label="Fermer le menu"
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="flex flex-col gap-5 pt-6 text-lg">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="transition hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </>
  )
}
