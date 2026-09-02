/**
 * Sélecteur de zone de livraison avec calcul automatique
 */

'use client'

import React, { useEffect } from 'react'
import { Select, Input } from '@/components/ui'
import { ABIDJAN_ZONES } from '@/lib/data/delivery-zones'
import { formatPrice } from '@/lib/utils'

interface DeliveryZoneSelectorProps {
  city: string
  commune?: string
  deliveryFee: number
  onCityChange: (city: string) => void
  onCommuneChange: (commune: string) => void
}

export const DeliveryZoneSelector: React.FC<DeliveryZoneSelectorProps> = ({
  city,
  commune,
  deliveryFee,
  onCityChange,
  onCommuneChange
}) => {
  const isAbidjan = city.toLowerCase().trim() === 'abidjan'
  
  // Options de ville
  const cityOptions = [
    { value: '', label: 'Sélectionner une ville' },
    { value: 'Abidjan', label: 'Abidjan' },
    { value: 'Hors Abidjan', label: 'Autre ville (Hors Abidjan)' }
  ]
  
  // Options de communes (si Abidjan)
  const communeOptions = [
    { value: '', label: 'Sélectionner une commune' },
    ...ABIDJAN_ZONES.flatMap(zone =>
      zone.communes.map(c => ({
        value: c,
        label: `${c} (${formatPrice(zone.price)})`
      }))
    )
  ]
  
  return (
    <div className="space-y-4">
      {/* Sélection de ville */}
      <Select
        label="Ville *"
        options={cityOptions}
        value={city}
        onChange={(e) => onCityChange(e.target.value)}
        required
      />
      
      {/* Sélection de commune (Abidjan uniquement) */}
      {isAbidjan && (
        <Select
          label="Commune *"
          options={communeOptions}
          value={commune || ''}
          onChange={(e) => onCommuneChange(e.target.value)}
          required
          helperText="Le tarif de livraison sera calculé automatiquement"
        />
      )}
      
      {/* Affichage des frais de livraison */}
      {deliveryFee > 0 && (
        <div className="rounded-sm border border-primary/30 bg-primary/5 p-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Frais de livraison</span>
            <span className="text-lg font-bold text-primary">
              {formatPrice(deliveryFee)}
            </span>
          </div>
          <p className="mt-1 text-xs text-muted-foreground">
            {isAbidjan && commune
              ? `Zone : ${commune}, Abidjan`
              : 'Livraison hors Abidjan'}
          </p>
        </div>
      )}
      
      {/* Message si ville sélectionnée mais pas de commune */}
      {isAbidjan && !commune && city && (
        <p className="text-xs text-muted-foreground">
          Sélectionnez votre commune pour calculer les frais de livraison
        </p>
      )}
    </div>
  )
}
