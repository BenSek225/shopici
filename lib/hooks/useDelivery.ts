/**
 * Hook pour gérer le calcul des frais de livraison
 */

'use client'

import { useState, useCallback, useMemo } from 'react'
import { calculateDeliveryFee, ABIDJAN_ZONES, OUTSIDE_ABIDJAN_FEE } from '@/lib/data/delivery-zones'

export interface DeliveryState {
  city: string
  commune?: string
  fee: number
}

export function useDelivery() {
  const [deliveryState, setDeliveryState] = useState<DeliveryState>({
    city: '',
    commune: undefined,
    fee: 0
  })

  /**
   * Met à jour la ville
   */
  const setCity = useCallback((city: string) => {
    const fee = calculateDeliveryFee(city)
    setDeliveryState({
      city,
      commune: undefined,
      fee
    })
  }, [])

  /**
   * Met à jour la commune (pour Abidjan uniquement)
   */
  const setCommune = useCallback((commune: string) => {
    const fee = calculateDeliveryFee(deliveryState.city, commune)
    setDeliveryState(prev => ({
      ...prev,
      commune,
      fee
    }))
  }, [deliveryState.city])

  /**
   * Réinitialise les informations de livraison
   */
  const reset = useCallback(() => {
    setDeliveryState({
      city: '',
      commune: undefined,
      fee: 0
    })
  }, [])

  /**
   * Vérifie si la ville est Abidjan
   */
  const isAbidjan = useMemo(() => {
    return deliveryState.city.toLowerCase().trim() === 'abidjan'
  }, [deliveryState.city])

  /**
   * Obtient les zones disponibles (pour Abidjan)
   */
  const zones = useMemo(() => {
    return isAbidjan ? ABIDJAN_ZONES : []
  }, [isAbidjan])

  return {
    // État
    city: deliveryState.city,
    commune: deliveryState.commune,
    fee: deliveryState.fee,
    isAbidjan,
    zones,

    // Actions
    setCity,
    setCommune,
    reset,

    // Constantes utiles
    outsideAbidjanFee: OUTSIDE_ABIDJAN_FEE
  }
}
