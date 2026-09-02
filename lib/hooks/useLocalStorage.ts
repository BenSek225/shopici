/**
 * Hook générique pour gérer localStorage avec hydratation SSR
 */

'use client'

import { useState, useEffect } from 'react'

export function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (value: T | ((prev: T) => T)) => void, boolean] {
  // État pour stocker la valeur
  const [storedValue, setStoredValue] = useState<T>(initialValue)
  
  // État d'hydratation (évite les erreurs SSR)
  const [hydrated, setHydrated] = useState(false)

  // Charger depuis localStorage au montage du composant
  useEffect(() => {
    try {
      const item = window.localStorage.getItem(key)
      if (item) {
        setStoredValue(JSON.parse(item))
      }
    } catch (error) {
      console.warn(`Erreur lors de la lecture de localStorage (${key}):`, error)
    } finally {
      setHydrated(true)
    }
  }, [key])

  // Sauvegarder dans localStorage à chaque changement
  useEffect(() => {
    if (hydrated) {
      try {
        window.localStorage.setItem(key, JSON.stringify(storedValue))
      } catch (error) {
        console.warn(`Erreur lors de l'écriture dans localStorage (${key}):`, error)
      }
    }
  }, [key, storedValue, hydrated])

  // Wrapper pour setter avec support de fonction
  const setValue = (value: T | ((prev: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value
      setStoredValue(valueToStore)
    } catch (error) {
      console.warn(`Erreur lors de la mise à jour de la valeur (${key}):`, error)
    }
  }

  return [storedValue, setValue, hydrated]
}
