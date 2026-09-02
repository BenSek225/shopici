/**
 * Composant Textarea réutilisable
 */

import React from 'react'
import { cn } from '@/lib/utils'

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
  helperText?: string
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, helperText, id, ...props }, ref) => {
    const textareaId = id || `textarea-${Math.random().toString(36).substr(2, 9)}`
    
    return (
      <div className="grid gap-2">
        {label && (
          <label htmlFor={textareaId} className="text-sm font-medium">
            {label}
            {props.required && <span className="text-destructive ml-1">*</span>}
          </label>
        )}
        
        <textarea
          id={textareaId}
          ref={ref}
          className={cn(
            'min-h-24 w-full resize-none border-b border-border bg-transparent py-3 text-sm outline-none transition-colors',
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

Textarea.displayName = 'Textarea'

export { Textarea }
