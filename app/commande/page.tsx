/**
 * Page de commande (checkout)
 */

'use client'

import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Header, Footer, WhatsAppButton } from '@/components/layout'
import { CheckoutForm, OrderSummary } from '@/components/checkout'
import { useCart } from '@/lib/hooks'

export default function CommandePage() {
  const router = useRouter()
  const cart = useCart()
  
  // Rediriger si le panier est vide
  useEffect(() => {
    if (cart.hydrated && cart.isEmpty) {
      router.push('/catalogue')
    }
  }, [cart.hydrated, cart.isEmpty, router])
  
  // Gérer le succès de la commande
  const handleSuccess = () => {
    // On pourrait vider le panier ici
    // cart.clearCart()
    
    // Ou simplement fermer le modal
    // L'utilisateur finalisera sur WhatsApp
  }
  
  if (!cart.hydrated || cart.isEmpty) {
    return null
  }
  
  return (
    <>
      <Header cartCount={cart.count} onCartClick={() => cart.setIsOpen(true)} />
      
      <main className="mx-auto grid max-w-6xl gap-12 px-5 py-12 md:grid-cols-[1fr_.8fr] lg:px-10">
        {/* Formulaire */}
        <div>
          <div className="mb-8">
            <p className="font-mono text-xs uppercase tracking-[.2em] text-primary">
              Dernière étape
            </p>
            <h1 className="mt-3 font-serif text-5xl">Passer commande.</h1>
            <p className="mt-5 max-w-md leading-7 text-muted-foreground">
              Renseignez vos informations. Nous ouvrirons WhatsApp pour confirmer
              ensemble votre commande et la livraison.
            </p>
          </div>
          
          <CheckoutForm
            items={cart.items}
            subtotal={cart.total}
            onSuccess={handleSuccess}
          />
        </div>
        
        {/* Récapitulatif */}
        <aside>
          <OrderSummary
            items={cart.items}
            subtotal={cart.total}
            deliveryFee={0} // Sera calculé dans le formulaire
            total={cart.total}
          />
        </aside>
      </main>
      
      <Footer />
      <WhatsAppButton />
    </>
  )
}
