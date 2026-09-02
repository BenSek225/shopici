/**
 * Configuration globale de SHOPICI
 */

export const SITE_CONFIG = {
  name: 'SHOPICI',
  tagline: 'Votre sélection, simplement.',
  description: 'Une sélection utile, belle et accessible, livrée partout en Côte d\'Ivoire.',
  domain: 'shopici.com',
  
  contact: {
    whatsapp: {
      number: '2250710504007',
      displayNumber: '+225 07 10 50 40 07',
      defaultMessage: 'Bonjour SHOPICI, je souhaite en savoir plus.'
    },
    email: 'contact@shopici.com',
    location: 'Abidjan, Côte d\'Ivoire',
    hours: 'Lun — Sam · 8h — 18h'
  },

  socials: {
    facebook: '#',
    instagram: '#',
    tiktok: '#',
    whatsapp: 'https://wa.me/2250710504007'
  },

  // Image par défaut pour le hero
  heroImage: '/height-grow.png'
} as const

export const WHATSAPP_BASE_URL = 'https://wa.me'
