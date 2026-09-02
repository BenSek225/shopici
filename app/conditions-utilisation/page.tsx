/**
 * Page Conditions Générales d'Utilisation (CGU)
 */

import React from 'react'
import Link from 'next/link'
import { Header, Footer, WhatsAppButton } from '@/components/layout'
import { SITE_CONFIG } from '@/lib/constants/config'

export default function ConditionsUtilisationPage() {
  return (
    <>
      <Header />
      
      <main className="mx-auto max-w-4xl px-5 py-16 lg:px-10">
        {/* Breadcrumb */}
        <nav className="mb-8 text-xs text-muted-foreground">
          <Link href="/" className="hover:text-foreground">
            Accueil
          </Link>
          {' / '}
          <span>Conditions d'utilisation</span>
        </nav>
        
        {/* Contenu */}
        <article className="prose prose-neutral max-w-none">
          <h1 className="font-serif text-4xl sm:text-5xl">
            Conditions Générales d'Utilisation
          </h1>
          
          <p className="text-lg text-muted-foreground">
            Dernière mise à jour : 2 septembre 2026
          </p>
          
          <section className="mt-12 space-y-8">
            <div>
              <h2 className="font-serif text-2xl">1. Présentation</h2>
              <p className="mt-3 leading-7 text-muted-foreground">
                Le site {SITE_CONFIG.domain} est une plateforme e-commerce proposant la vente de produits 
                cosmétiques, bien-être et accessoires en Côte d'Ivoire. L'utilisation de ce site implique 
                l'acceptation pleine et entière des présentes conditions générales d'utilisation.
              </p>
            </div>
            
            <div>
              <h2 className="font-serif text-2xl">2. Accès au site</h2>
              <p className="mt-3 leading-7 text-muted-foreground">
                L'accès au site est gratuit et ouvert à tous. Nous nous réservons le droit de suspendre, 
                modifier ou interrompre l'accès au site à tout moment sans préavis.
              </p>
            </div>
            
            <div>
              <h2 className="font-serif text-2xl">3. Commandes</h2>
              <h3 className="mt-4 font-semibold">3.1 Processus de commande</h3>
              <p className="mt-2 leading-7 text-muted-foreground">
                Les commandes sont passées via notre catalogue en ligne et finalisées sur WhatsApp. 
                Une commande n'est définitive qu'après confirmation mutuelle sur WhatsApp.
              </p>
              
              <h3 className="mt-4 font-semibold">3.2 Disponibilité des produits</h3>
              <p className="mt-2 leading-7 text-muted-foreground">
                Tous les produits présentés sont disponibles dans la limite des stocks. En cas de rupture 
                de stock après votre commande, nous vous en informerons par WhatsApp.
              </p>
              
              <h3 className="mt-4 font-semibold">3.3 Prix</h3>
              <p className="mt-2 leading-7 text-muted-foreground">
                Les prix sont indiqués en Francs CFA (FCFA) et sont valables au moment de la passation de 
                la commande. Les frais de livraison sont calculés selon votre zone et affichés avant 
                validation de la commande.
              </p>
            </div>
            
            <div>
              <h2 className="font-serif text-2xl">4. Paiement</h2>
              <p className="mt-3 leading-7 text-muted-foreground">
                Le paiement s'effectue après confirmation de votre commande via WhatsApp. Les modes de 
                paiement acceptés incluent :
              </p>
              <ul className="mt-3 space-y-2 text-muted-foreground">
                <li>• Mobile Money (Orange Money, MTN Mobile Money)</li>
                <li>• Wave</li>
                <li>• Paiement à la livraison (selon disponibilité)</li>
              </ul>
            </div>
            
            <div>
              <h2 className="font-serif text-2xl">5. Livraison</h2>
              <h3 className="mt-4 font-semibold">5.1 Zones de livraison</h3>
              <p className="mt-2 leading-7 text-muted-foreground">
                Nous livrons dans toute la Côte d'Ivoire. Les tarifs varient selon votre localisation :
              </p>
              <ul className="mt-3 space-y-2 text-muted-foreground">
                <li>• Abidjan : 1 500 - 3 000 FCFA selon la commune</li>
                <li>• Hors Abidjan : 2 500 FCFA (forfait unique)</li>
              </ul>
              
              <h3 className="mt-4 font-semibold">5.2 Délais de livraison</h3>
              <p className="mt-2 leading-7 text-muted-foreground">
                Les délais de livraison sont communiqués lors de la confirmation de commande sur WhatsApp 
                et peuvent varier selon votre localisation.
              </p>
            </div>
            
            <div>
              <h2 className="font-serif text-2xl">6. Produits</h2>
              <h3 className="mt-4 font-semibold">6.1 Description</h3>
              <p className="mt-2 leading-7 text-muted-foreground">
                Nous nous efforçons de présenter les produits de la manière la plus précise possible. 
                Les images sont fournies à titre indicatif. Les couleurs peuvent varier selon votre écran.
              </p>
              
              <h3 className="mt-4 font-semibold">6.2 Avertissements</h3>
              <p className="mt-2 leading-7 text-muted-foreground">
                Certains produits peuvent comporter des avertissements spécifiques (âge minimum, précautions 
                d'utilisation). Il est de votre responsabilité de lire et respecter ces indications.
              </p>
            </div>
            
            <div>
              <h2 className="font-serif text-2xl">7. Réclamations</h2>
              <p className="mt-3 leading-7 text-muted-foreground">
                Pour toute réclamation concernant un produit ou une commande, contactez-nous dans les 48h 
                suivant la réception via :
              </p>
              <ul className="mt-3 space-y-2 text-muted-foreground">
                <li>• WhatsApp : {SITE_CONFIG.contact.whatsapp.displayNumber}</li>
                <li>• Email : {SITE_CONFIG.contact.email}</li>
              </ul>
            </div>
            
            <div>
              <h2 className="font-serif text-2xl">8. Responsabilité</h2>
              <p className="mt-3 leading-7 text-muted-foreground">
                SHOPICI ne peut être tenu responsable :
              </p>
              <ul className="mt-3 space-y-2 text-muted-foreground">
                <li>• Des dommages résultant d'une mauvaise utilisation des produits</li>
                <li>• Des interruptions du site pour maintenance</li>
                <li>• Des retards de livraison indépendants de notre volonté</li>
                <li>• Des erreurs de saisie lors de votre commande</li>
              </ul>
            </div>
            
            <div>
              <h2 className="font-serif text-2xl">9. Propriété intellectuelle</h2>
              <p className="mt-3 leading-7 text-muted-foreground">
                Tous les contenus du site (textes, images, logos, design) sont protégés par le droit 
                d'auteur et appartiennent à SHOPICI ou à leurs propriétaires respectifs. Toute reproduction 
                est interdite sans autorisation préalable.
              </p>
            </div>
            
            <div>
              <h2 className="font-serif text-2xl">10. Données personnelles</h2>
              <p className="mt-3 leading-7 text-muted-foreground">
                Vos données personnelles sont traitées conformément à notre{' '}
                <Link href="/politique-confidentialite" className="underline hover:text-primary">
                  Politique de confidentialité
                </Link>
                .
              </p>
            </div>
            
            <div>
              <h2 className="font-serif text-2xl">11. Modifications</h2>
              <p className="mt-3 leading-7 text-muted-foreground">
                SHOPICI se réserve le droit de modifier les présentes CGU à tout moment. Les modifications 
                entrent en vigueur dès leur publication sur le site.
              </p>
            </div>
            
            <div>
              <h2 className="font-serif text-2xl">12. Droit applicable</h2>
              <p className="mt-3 leading-7 text-muted-foreground">
                Les présentes CGU sont régies par le droit ivoirien. En cas de litige, les tribunaux 
                compétents d'Abidjan seront seuls compétents.
              </p>
            </div>
            
            <div>
              <h2 className="font-serif text-2xl">13. Contact</h2>
              <p className="mt-3 leading-7 text-muted-foreground">
                Pour toute question concernant ces conditions d'utilisation :
              </p>
              <ul className="mt-3 space-y-2 text-muted-foreground">
                <li>• Email : {SITE_CONFIG.contact.email}</li>
                <li>• WhatsApp : {SITE_CONFIG.contact.whatsapp.displayNumber}</li>
                <li>• Adresse : {SITE_CONFIG.contact.location}</li>
                <li>• Horaires : {SITE_CONFIG.contact.hours}</li>
              </ul>
            </div>
          </section>
          
          <div className="mt-12 border-t border-border pt-8">
            <Link
              href="/"
              className="inline-flex items-center text-sm font-medium underline hover:text-primary"
            >
              ← Retour à l'accueil
            </Link>
          </div>
        </article>
      </main>
      
      <Footer />
      <WhatsAppButton />
    </>
  )
}
