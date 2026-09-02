/**
 * Fonctions de validation de formulaires
 */

/**
 * Valide un nom (minimum 2 caractères)
 */
export function validateName(name: string): { valid: boolean; error?: string } {
  const trimmed = name.trim()
  
  if (!trimmed) {
    return { valid: false, error: 'Le nom est requis' }
  }
  
  if (trimmed.length < 2) {
    return { valid: false, error: 'Le nom doit contenir au moins 2 caractères' }
  }
  
  return { valid: true }
}

/**
 * Valide un numéro de téléphone ivoirien
 */
export function validatePhone(phone: string): { valid: boolean; error?: string } {
  const cleaned = phone.replace(/\D/g, '')
  
  if (!cleaned) {
    return { valid: false, error: 'Le numéro de téléphone est requis' }
  }
  
  // Format ivoirien : 10 chiffres commençant par 0 ou 8-10 chiffres
  if (cleaned.length < 8 || cleaned.length > 10) {
    return { valid: false, error: 'Numéro de téléphone invalide (8 à 10 chiffres)' }
  }
  
  return { valid: true }
}

/**
 * Valide une ville
 */
export function validateCity(city: string): { valid: boolean; error?: string } {
  const trimmed = city.trim()
  
  if (!trimmed) {
    return { valid: false, error: 'La ville est requise' }
  }
  
  return { valid: true }
}

/**
 * Valide un quartier
 */
export function validateQuarter(quarter: string): { valid: boolean; error?: string } {
  const trimmed = quarter.trim()
  
  if (!trimmed) {
    return { valid: false, error: 'Le quartier est requis' }
  }
  
  if (trimmed.length < 2) {
    return { valid: false, error: 'Le quartier doit contenir au moins 2 caractères' }
  }
  
  return { valid: true }
}

/**
 * Valide une adresse email
 */
export function validateEmail(email: string): { valid: boolean; error?: string } {
  const trimmed = email.trim()
  
  if (!trimmed) {
    return { valid: false, error: 'L\'email est requis' }
  }
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  
  if (!emailRegex.test(trimmed)) {
    return { valid: false, error: 'Format d\'email invalide' }
  }
  
  return { valid: true }
}

/**
 * Valide un formulaire de commande complet
 */
export interface CheckoutValidation {
  name: { valid: boolean; error?: string }
  phone: { valid: boolean; error?: string }
  city: { valid: boolean; error?: string }
  quarter: { valid: boolean; error?: string }
}

export function validateCheckoutForm(data: {
  name: string
  phone: string
  city: string
  quarter: string
}): { valid: boolean; errors: CheckoutValidation } {
  const errors: CheckoutValidation = {
    name: validateName(data.name),
    phone: validatePhone(data.phone),
    city: validateCity(data.city),
    quarter: validateQuarter(data.quarter)
  }
  
  const valid = Object.values(errors).every(e => e.valid)
  
  return { valid, errors }
}
