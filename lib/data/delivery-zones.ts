/**
 * Zones et tarifs de livraison SHOPICI
 * Conforme au cahier des charges
 */

import type { DeliveryZone, DeliveryCity } from '@/lib/types'

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
 * Villes principales de Côte d'Ivoire (ordre alphabétique)
 */
export const DELIVERY_CITIES: DeliveryCity[] = [
  { id: 'abidjan', name: 'Abidjan', hasZones: true },
  { id: 'abengourou', name: 'Abengourou', hasZones: false },
  { id: 'aboisso', name: 'Aboisso', hasZones: false },
  { id: 'adzope', name: 'Adzopé', hasZones: false },
  { id: 'agboville', name: 'Agboville', hasZones: false },
  { id: 'agnibilekrou', name: 'Agnibilékrou', hasZones: false },
  { id: 'beoumi', name: 'Béoumi', hasZones: false },
  { id: 'bondoukou', name: 'Bondoukou', hasZones: false },
  { id: 'bongouanou', name: 'Bongouanou', hasZones: false },
  { id: 'bouafle', name: 'Bouaflé', hasZones: false },
  { id: 'bouake', name: 'Bouaké', hasZones: false },
  { id: 'bouna', name: 'Bouna', hasZones: false },
  { id: 'boundiali', name: 'Boundiali', hasZones: false },
  { id: 'dabou', name: 'Dabou', hasZones: false },
  { id: 'daloa', name: 'Daloa', hasZones: false },
  { id: 'danane', name: 'Danané', hasZones: false },
  { id: 'daoukro', name: 'Daoukro', hasZones: false },
  { id: 'dimbokro', name: 'Dimbokro', hasZones: false },
  { id: 'divo', name: 'Divo', hasZones: false },
  { id: 'duekoue', name: 'Duékoué', hasZones: false },
  { id: 'ferkessedougou', name: 'Ferkessédougou', hasZones: false },
  { id: 'gagnoa', name: 'Gagnoa', hasZones: false },
  { id: 'grand-bassam', name: 'Grand-Bassam', hasZones: false },
  { id: 'grand-lahou', name: 'Grand-Lahou', hasZones: false },
  { id: 'guiglo', name: 'Guiglo', hasZones: false },
  { id: 'issia', name: 'Issia', hasZones: false },
  { id: 'jacqueville', name: 'Jacqueville', hasZones: false },
  { id: 'katiola', name: 'Katiola', hasZones: false },
  { id: 'korhogo', name: 'Korhogo', hasZones: false },
  { id: 'lakota', name: 'Lakota', hasZones: false },
  { id: 'man', name: 'Man', hasZones: false },
  { id: 'odienne', name: 'Odienné', hasZones: false },
  { id: 'oume', name: 'Oumé', hasZones: false },
  { id: 'san-pedro', name: 'San-Pédro', hasZones: false },
  { id: 'sassandra', name: 'Sassandra', hasZones: false },
  { id: 'seguela', name: 'Séguéla', hasZones: false },
  { id: 'sinfra', name: 'Sinfra', hasZones: false },
  { id: 'soubre', name: 'Soubré', hasZones: false },
  { id: 'tabou', name: 'Tabou', hasZones: false },
  { id: 'tanda', name: 'Tanda', hasZones: false },
  { id: 'tiassale', name: 'Tiassalé', hasZones: false },
  { id: 'touba', name: 'Touba', hasZones: false },
  { id: 'toumodi', name: 'Toumodi', hasZones: false },
  { id: 'vavoua', name: 'Vavoua', hasZones: false },
  { id: 'yamoussoukro', name: 'Yamoussoukro', hasZones: false },
  { id: 'zuenoula', name: 'Zuénoula', hasZones: false },
  { id: 'other', name: 'Autre', hasZones: false }
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
