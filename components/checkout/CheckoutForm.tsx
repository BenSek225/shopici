/**
 * Formulaire de commande complet
 */

'use client'

import React, { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import type { CartItem, CheckoutFormData } from '@/lib/types'
import { Input, Textarea, Button } from '@/components/ui'
import { DeliveryZoneSelector } from './DeliveryZoneSelector'
import { validateCheckoutForm } from '@/lib/utils'
import { useDelivery } from '@/lib/hooks'
import { generateOrderMessage, generateWhatsAppLink } from '@/lib/utils/whatsapp'

interface CheckoutFormProps {
  items: CartItem[]
  subtotal: number
  onSuccess?: () => void
}

export const CheckoutForm: React.FC<CheckoutFormProps> = ({
  items,
  subtotal,
  onSuccess
}) => {
  const delivery = useDelivery()
  
  const [formData, setFormData] = useState<CheckoutFormData>({
    name: '',
    phone: '',
    city: '',
    commune: '',
    quarter: '',
    address: ''
  })
  
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  // Calcul du total
  const total = subtotal + delivery.fee
  
  // Gestion des changements de champs
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Effacer l'erreur du champ modifié
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }
  
  // Gestion de la ville
  const handleCityChange = (city: string) => {
    setFormData(prev => ({ ...prev, city, commune: '' }))
    delivery.setCity(city)
    if (errors.city) {
      setErrors(prev => ({ ...prev, city: '' }))
    }
  }
  
  // Gestion de la commune
  const handleCommuneChange = (commune: string) => {
    setFormData(prev => ({ ...prev, commune }))
    delivery.setCommune(commune)
  }
  
  // Soumission du formulaire
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validation
    const validation = validateCheckoutForm(formData)
    
    if (!validation.valid) {
      const newErrors: Record<string, string> = {}
      Object.entries(validation.errors).forEach(([key, result]) => {
        if (!result.valid && result.error) {
          newErrors[key] = result.error
        }
      })
      setErrors(newErrors)
      return
    }
    
    // Vérifier qu'il y a des articles
    if (items.length === 0) {
      setErrors({ general: 'Votre panier est vide.' })
      return
    }
    
    // Vérifier les frais de livraison
    if (delivery.isAbidjan && !formData.commune) {
      setErrors({ commune: 'Veuillez sélectionner votre commune' })
      return
    }
    
    setIsSubmitting(true)
    
    try {
      // Générer le message WhatsApp
      const message = generateOrderMessage(items, delivery.fee, formData)
      const whatsappUrl = generateWhatsAppLink(message)
      
      // Ouvrir WhatsApp
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
      
      // Callback de succès
      onSuccess?.()
    } catch (error) {
      console.error('Erreur lors de la génération de la commande:', error)
      setErrors({
        general: 'Une erreur est survenue. Veuillez réessayer.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }
  
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Informations client */}
      <div className="space-y-5">
        <h2 className="font-serif text-2xl">Vos informations</h2>
        
        <Input
          label="Nom complet"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Votre nom"
          required
          error={errors.name}
        />
        
        <Input
          label="Téléphone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          placeholder="07 10 50 40 07"
          required
          error={errors.phone}
        />
      </div>
      
      {/* Adresse de livraison */}
      <div className="space-y-5">
        <h2 className="font-serif text-2xl">Livraison</h2>
        
        <DeliveryZoneSelector
          city={formData.city}
          commune={formData.commune}
          deliveryFee={delivery.fee}
          onCityChange={handleCityChange}
          onCommuneChange={handleCommuneChange}
        />
        
        <Input
          label="Quartier"
          name="quarter"
          value={formData.quarter}
          onChange={handleChange}
          placeholder="Angré, Cocody"
          required
          error={errors.quarter}
        />
        
        <Textarea
          label="Adresse / précisions"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Près de la pharmacie centrale..."
          helperText="Détails pour faciliter la livraison"
        />
      </div>
      
      {/* Erreur générale */}
      {errors.general && (
        <div className="rounded-sm border border-destructive bg-destructive/10 p-4">
          <p className="text-sm text-destructive">{errors.general}</p>
        </div>
      )}
      
      {/* Bouton de soumission */}
      <Button
        type="submit"
        variant="primary"
        size="lg"
        fullWidth
        loading={isSubmitting}
        disabled={isSubmitting || items.length === 0}
      >
        {isSubmitting ? (
          'Préparation...'
        ) : (
          <>
            Confirmer et commander sur WhatsApp
            <ArrowRight size={16} />
          </>
        )}
      </Button>
      
      {/* Note de confidentialité */}
      <p className="text-center text-xs text-muted-foreground">
        En continuant, vous serez redirigé vers WhatsApp pour finaliser votre commande.
      </p>
    </form>
  )
}
