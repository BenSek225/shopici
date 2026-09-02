/**
 * Pied de page du site
 */

'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight, Mail, Hash } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/constants/config'
import { generateWhatsAppLink, generateSimpleWhatsAppMessage } from '@/lib/utils'

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()
  const whatsappUrl = generateWhatsAppLink(generateSimpleWhatsAppMessage())
  
  return (
    <footer id="contact" className="border-t border-border bg-secondary/40">
      {/* Contenu principal */}
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-3 lg:px-10">
        {/* Colonne 1 : À propos */}
        <div>
          <div className="flex items-center gap-2">
            <h3 className="font-serif text-3xl">
              SHOP<span className="text-primary">ICI</span>
            </h3>
          </div>
          <p className="mt-3 max-w-xs text-sm leading-6 text-muted-foreground">
            {SITE_CONFIG.description}
          </p>
        </div>
        
        {/* Colonne 2 : Contact */}
        <div>
          <p className="font-mono text-xs uppercase tracking-[.2em]">
            Nous trouver
          </p>
          <div className="mt-4 space-y-1 text-sm leading-7">
            <p>{SITE_CONFIG.contact.location}</p>
            <p>{SITE_CONFIG.contact.hours}</p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block underline hover:text-primary"
            >
              WhatsApp : {SITE_CONFIG.contact.whatsapp.displayNumber}
            </a>
            <a
              href={`mailto:${SITE_CONFIG.contact.email}`}
              className="block underline hover:text-primary"
            >
              {SITE_CONFIG.contact.email}
            </a>
          </div>
        </div>
        
        {/* Colonne 3 : Réseaux sociaux */}
        <div>
          <p className="font-mono text-xs uppercase tracking-[.2em]">
            Suivez SHOPICI
          </p>
          
          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href={SITE_CONFIG.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-border px-3 py-2 text-sm transition hover:-translate-y-1 hover:bg-muted"
              aria-label="Facebook"
            >
              <Mail size={16} />
              <span>Facebook</span>
            </a>
            
            <a
              href={SITE_CONFIG.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-border px-3 py-2 text-sm transition hover:-translate-y-1 hover:bg-muted"
              aria-label="Instagram"
            >
              <Hash size={16} />
              <span>Instagram</span>
            </a>
            
            <a
              href={SITE_CONFIG.socials.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-border px-3 py-2 text-sm transition hover:-translate-y-1 hover:bg-muted"
              aria-label="TikTok"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
              <span>TikTok</span>
            </a>
          </div>
          
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 font-semibold underline hover:text-primary"
          >
            Parler à SHOPICI <ArrowRight size={15} />
          </a>
        </div>
      </div>
      
      {/* Bas de page */}
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-5 text-xs text-muted-foreground sm:flex-row lg:px-10">
          <p>© {currentYear} SHOPICI · Votre sélection, simplement.</p>
          
          <div className="flex gap-4">
            <Link
              href="/politique-confidentialite"
              className="hover:text-foreground hover:underline"
            >
              Politique de confidentialité
            </Link>
            <Link
              href="/conditions-utilisation"
              className="hover:text-foreground hover:underline"
            >
              CGU
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
