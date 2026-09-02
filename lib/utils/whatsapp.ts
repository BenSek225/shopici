/**
 * Utilitaires pour WhatsApp
 */

import type { CartItem, CheckoutFormData } from '@/lib/types'
import { SITE_CONFIG, WHATSAPP_BASE_URL } from '@/lib/constants/config'
import { formatPrice } from './format'

/**
 * Génère le nom complet d'un article (produit + variante)
 */
export function getItemDisplayName(item: CartItem): string {
  if (item.variant) {
    return `${item.product.name} — ${item.variant.name}`
  }
  return item.product.name
}

/**
 * Obtient le prix d'un article (variante ou produit)
 */
export function getItemPrice(item: CartItem): number {
  return item.variant?.price ?? item.product.price
}

/**
 * Génère un lien WhatsApp avec message pré-rempli
 */
export function generateWhatsAppLink(message: string): string {
  const encodedMessage = encodeURIComponent(message)
  return `${WHATSAPP_BASE_URL}/${SITE_CONFIG.contact.whatsapp.number}?text=${encodedMessage}`
}

/**
 * Génère le message de commande complet pour WhatsApp
 */
export function generateOrderMessage(
  items: CartItem[],
  deliveryFee: number,
  customerInfo?: CheckoutFormData
): string {
  // En-tête
  let message = 'Bonjour SHOPICI, je souhaite commander :\n\n'
  
  // Liste des produits
  items.forEach(item => {
    const name = getItemDisplayName(item)
    const price = getItemPrice(item)
    const lineTotal = price * item.quantity
    
    message += `• ${name} x${item.quantity} — ${formatPrice(lineTotal)}\n`
  })
  
  // Totaux
  const subtotal = items.reduce((sum, item) => {
    return sum + getItemPrice(item) * item.quantity
  }, 0)
  
  const total = subtotal + deliveryFee
  
  message += `\nTotal produits : ${formatPrice(subtotal)}\n`
  message += `Livraison : ${deliveryFee > 0 ? formatPrice(deliveryFee) : 'à confirmer'}`
  
  if (deliveryFee > 0) {
    message += ` (${customerInfo?.commune || customerInfo?.city || ''})`
  }
  
  message += `\nTOTAL COMMANDE : ${formatPrice(total)}\n`
  
  // Informations client
  if (customerInfo) {
    message += `\nNom : ${customerInfo.name}`
    message += `\nTéléphone : ${customerInfo.phone}`
    message += `\nVille : ${customerInfo.city}`
    
    if (customerInfo.commune) {
      message += `, ${customerInfo.commune}`
    }
    
    message += `\nQuartier : ${customerInfo.quarter}`
    
    if (customerInfo.address) {
      message += ` — ${customerInfo.address}`
    }
  }
  
  return message
}

/**
 * Génère un message simple pour le bouton WhatsApp
 */
export function generateSimpleWhatsAppMessage(productName?: string): string {
  if (productName) {
    return `Bonjour SHOPICI, je suis intéressé(e) par ${productName}. Je souhaite en savoir plus.`
  }
  
  return SITE_CONFIG.contact.whatsapp.defaultMessage
}
