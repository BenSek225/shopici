/**
 * Composant Toast pour les notifications
 */

'use client'

import React from 'react'
import { Check, X, AlertCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface ToastProps {
  message: string
  type?: 'success' | 'error' | 'info'
  onClose?: () => void
}

const Toast: React.FC<ToastProps> = ({ message, type = 'success', onClose }) => {
  const icons = {
    success: <Check size={16} />,
    error: <X size={16} />,
    info: <AlertCircle size={16} />
  }
  
  const styles = {
    success: 'bg-primary text-primary-foreground',
    error: 'bg-destructive text-destructive-foreground',
    info: 'bg-muted text-foreground'
  }
  
  return (
    <div
      role="status"
      className={cn(
        'fixed bottom-5 left-1/2 z-[60] flex -translate-x-1/2 items-center gap-2 px-4 py-3 text-sm shadow-lg',
        styles[type]
      )}
    >
      {icons[type]}
      <span>{message}</span>
      {onClose && (
        <button
          onClick={onClose}
          className="ml-2 hover:opacity-70"
          aria-label="Fermer"
        >
          <X size={14} />
        </button>
      )}
    </div>
  )
}

Toast.displayName = 'Toast'

export { Toast }
