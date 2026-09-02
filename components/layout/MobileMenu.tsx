/**
 * Menu mobile avec animations Framer Motion
 */

'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Home, Grid3X3, ShoppingBag, FileText, Scale } from 'lucide-react'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

const menuItems = [
  { href: '/', label: 'Accueil', icon: Home },
  { href: '/catalogue', label: 'Catalogue', icon: Grid3X3 },
  { href: '/commande', label: 'Commander', icon: ShoppingBag },
  { href: '/politique-confidentialite', label: 'Confidentialité', icon: FileText },
  { href: '/conditions-utilisation', label: 'CGU', icon: Scale }
]

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
}

const menuVariants = {
  hidden: { x: '100%' },
  visible: {
    x: 0,
    transition: {
      type: 'spring' as const,
      stiffness: 300,
      damping: 30
    }
  },
  exit: {
    x: '100%',
    transition: {
      type: 'spring' as const,
      stiffness: 300,
      damping: 30
    }
  }
}

const itemVariants = {
  hidden: { x: 20, opacity: 0 },
  visible: (i: number) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.3
    }
  })
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname()

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm md:hidden"
          />

          {/* Menu Panel */}
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed right-0 top-0 z-50 h-full w-[85%] max-w-sm bg-background shadow-2xl md:hidden"
          >
            <div className="flex h-full flex-col">
              {/* Header */}
              <div className="border-b border-border px-6 py-6">
                <h2 className="font-serif text-2xl font-semibold">
                  SHOP<span className="text-primary">ICI</span>
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">Votre sélection, simplement</p>
              </div>

              {/* Navigation */}
              <nav className="flex-1 overflow-y-auto px-4 py-6">
                <ul className="space-y-2">
                  {menuItems.map((item, index) => {
                    const isActive = pathname === item.href
                    const Icon = item.icon
                    
                    return (
                      <motion.li
                        key={item.href}
                        custom={index}
                        variants={itemVariants}
                        initial="hidden"
                        animate="visible"
                      >
                        <Link
                          href={item.href}
                          onClick={onClose}
                          className={`flex items-center gap-3 rounded-lg px-4 py-3 transition-all ${
                            isActive
                              ? 'bg-primary text-primary-foreground shadow-md'
                              : 'text-foreground hover:bg-muted'
                          }`}
                        >
                          <Icon size={20} />
                          <span className="font-medium">{item.label}</span>
                        </Link>
                      </motion.li>
                    )
                  })}
                </ul>
              </nav>

              {/* Footer */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="border-t border-border px-6 py-4"
              >
                <p className="text-center text-xs text-muted-foreground">
                  © 2025 SHOPICI
                </p>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
