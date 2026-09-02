/**
 * Bouton WhatsApp flottant
 */

'use client'

import React from 'react'
import { MessageCircle } from 'lucide-react'
import { generateWhatsAppLink, generateSimpleWhatsAppMessage } from '@/lib/utils'

export const WhatsAppButton: React.FC = () => {
  const whatsappUrl = generateWhatsAppLink(generateSimpleWhatsAppMessage())
  
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-30 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-xl sm:px-5 sm:py-4 animate-pulse hover:animate-none"
      aria-label="Contacter sur WhatsApp"
    >
      <MessageCircle size={20} />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  )
}
