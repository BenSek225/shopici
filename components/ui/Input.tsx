/**
 * Composant Input réutilisable
 */

import React from 'react'
import { cn } from '@/lib/utils'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  helperText?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, helperText, type = 'text', id, ...props }, ref) => {
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`
    
    return (
      <div className="grid gap-2">
        {label && (
          <label htmlFor={inputId} className="text-sm font-medium">
            {label}
            {props.required && <span className="text-destructive ml-1">*</span>}
          </label>
        )}
        
        <input
          id={inputId}
          ref={ref}
          type={type}
          className={cn(
            'w-full border-b border-border bg-transparent py-3 text-sm outline-none transition-colors',
            'focus:border-primary',
            'disabled:cursor-not-allowed disabled:opacity-50',
            'placeholder:text-muted-foreground',
            error && 'border-destructive focus:border-destructive',
            className
          )}
          {...props}
        />
        
        {error && (
          <p className="text-xs text-destructive">{error}</p>
        )}
        
        {helperText && !error && (
          <p className="text-xs text-muted-foreground">{helperText}</p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'

export { Input }
