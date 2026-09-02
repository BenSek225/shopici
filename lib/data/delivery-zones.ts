/**
 * Zones et tarifs de livraison SHOPICI
 * Conforme au cahier des charges
 */

import type { DeliveryZone } from '@/lib/types'

/**
 * ABIDJAN - 3 zones tarifaires
 */
export const ABIDJAN_ZONES: DeliveryZone[] = [
  {
    name: 'Zone 1',
    price: 1500,
    communes: [
      'Abobo',
      'Cocody',
      'Yopougon',
      'Adjamé',
      'Plateau',
      'Treichville',
      'Marcory',
      'Koumassi'
    ]
  },
  {
    name: 'Zone 2',
    price: 2000,
    communes: [
      'Bingerville',
      'Songon',
      'Port-Bouët',
      'Gonzague'
    ]
  },
  {
    name: 'Zone 3',
    price: 3000,
    communes: [
      'Anyama',
      'Songon Carrefour Jacqueville',
      'Grand-Bassam'
    ]
  }
]

/**
 * Hors Abidjan - forfait unique
 */
export const OUTSIDE_ABIDJAN_FEE = 2500

/**
 * Toutes les communes d'Abidjan (pour validation)
 */
export const ALL_ABIDJAN_COMMUNES = ABIDJAN_ZONES.flatMap(zone => zone.communes)

/**
 * Calcule les frais de livraison selon la ville et la commune
 */
export function calculateDeliveryFee(city: string, commune?: string): number {
  // Normaliser la ville
  const normalizedCity = city.trim().toLowerCase()
  
  // Si c'est Abidjan
  if (normalizedCity === 'abidjan') {
    if (!commune) return 0 // Pas de commune sélectionnée
    
    // Trouver la zone correspondante
    const zone = ABIDJAN_ZONES.find(z => 
      z.communes.some(c => 
        c.toLowerCase() === commune.trim().toLowerCase()
      )
    )
    
    return zone ? zone.price : 0
  }
  
  // Hors Abidjan
  return OUTSIDE_ABIDJAN_FEE
}

/**
 * Obtient le nom de la zone pour une commune donnée
 */
export function getZoneForCommune(commune: string): DeliveryZone | null {
  return ABIDJAN_ZONES.find(zone =>
    zone.communes.some(c => 
      c.toLowerCase() === commune.trim().toLowerCase()
    )
  ) || null
}

/**
 * Vérifie si une commune fait partie d'Abidjan
 */
export function isCommuneInAbidjan(commune: string): boolean {
  return ALL_ABIDJAN_COMMUNES.some(c => 
    c.toLowerCase() === commune.trim().toLowerCase()
  )
}
