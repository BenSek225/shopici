/**
 * Composant Badge pour afficher des labels
 */

import React from 'react'
import { cn } from '@/lib/utils'

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'success' | 'warning' | 'destructive' | 'outline'
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    const variantStyles = {
      default: 'bg-background text-foreground',
      success: 'bg-green-100 text-green-800',
      warning: 'bg-yellow-100 text-yellow-800',
      destructive: 'bg-destructive/10 text-destructive',
      outline: 'border border-border bg-transparent'
    }
    
    return (
      <span
        ref={ref}
        className={cn(
          'inline-flex items-center px-2 py-1 font-mono text-[10px] uppercase tracking-wider',
          variantStyles[variant],
          className
        )}
        {...props}
      />
    )
  }
)

Badge.displayName = 'Badge'

export { Badge }
