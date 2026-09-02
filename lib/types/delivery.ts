/**
 * Types pour la livraison et les zones
 */

export interface DeliveryZone {
  name: string
  communes: string[]
  price: number
}

export interface DeliveryCity {
  id: string
  name: string
  hasZones: boolean
}

export interface DeliveryInfo {
  city: string
  commune?: string
  quarter: string
  address?: string
  fee: number
}

export type CityType = 'Abidjan' | 'Hors Abidjan'
