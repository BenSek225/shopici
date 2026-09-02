import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Export all utilities
export * from './utils/format'
export * from './utils/validation'
export * from './utils/whatsapp'
