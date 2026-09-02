/**
 * Page Politique de confidentialité
 */

import React from 'react'
import Link from 'next/link'
import { Header, Footer, WhatsAppButton } from '@/components/layout'
import { SITE_CONFIG } from '@/lib/constants/config'

export default function PolitiqueConfidentialitePage() {
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
          <span>Politique de confidentialité</span>
        </nav>
        
        {/* Contenu */}
        <article className="prose prose-neutral max-w-none">
          <h1 className="font-serif text-4xl sm:text-5xl">
            Politique de confidentialité
          </h1>
          
          <p className="text-lg text-muted-foreground">
            Dernière mise à jour : 2 septembre 2026
          </p>
          
          <section className="mt-12 space-y-8">
            <div>
              <h2 className="font-serif text-2xl">1. Introduction</h2>
              <p className="mt-3 leading-7 text-muted-foreground">
                SHOPICI ({SITE_CONFIG.domain}) s'engage à protéger la confidentialité de vos données personnelles. 
                Cette politique décrit comment nous collectons, utilisons et protégeons vos informations lorsque 
                vous utilisez notre site web.
              </p>
            </div>
            
            <div>
              <h2 className="font-serif text-2xl">2. Données collectées</h2>
              <p className="mt-3 leading-7 text-muted-foreground">
                Nous collectons les informations suivantes lorsque vous passez commande :
              </p>
              <ul className="mt-3 space-y-2 text-muted-foreground">
                <li>• Nom complet</li>
                <li>• Numéro de téléphone</li>
                <li>• Adresse de livraison (ville, commune, quartier)</li>
                <li>• Informations sur votre commande (produits, quantités)</li>
              </ul>
            </div>
            
            <div>
              <h2 className="font-serif text-2xl">3. Utilisation des données</h2>
              <p className="mt-3 leading-7 text-muted-foreground">
                Vos données personnelles sont utilisées exclusivement pour :
              </p>
              <ul className="mt-3 space-y-2 text-muted-foreground">
                <li>• Traiter et livrer votre commande</li>
                <li>• Communiquer avec vous via WhatsApp concernant votre commande</li>
                <li>• Améliorer nos services</li>
                <li>• Respecter nos obligations légales</li>
              </ul>
            </div>
            
            <div>
              <h2 className="font-serif text-2xl">4. Stockage des données</h2>
              <p className="mt-3 leading-7 text-muted-foreground">
                Vos données sont stockées localement dans votre navigateur (localStorage) pour maintenir 
                votre panier d'achat. Aucune donnée personnelle n'est stockée sur nos serveurs sans votre 
                consentement explicite lors d'une commande.
              </p>
            </div>
            
            <div>
              <h2 className="font-serif text-2xl">5. Partage des données</h2>
              <p className="mt-3 leading-7 text-muted-foreground">
                Nous ne vendons, ne louons ni ne partageons vos données personnelles avec des tiers, 
                sauf dans les cas suivants :
              </p>
              <ul className="mt-3 space-y-2 text-muted-foreground">
                <li>• Avec votre consentement explicite</li>
                <li>• Pour respecter une obligation légale</li>
                <li>• Avec nos partenaires de livraison (uniquement les informations nécessaires)</li>
              </ul>
            </div>
            
            <div>
              <h2 className="font-serif text-2xl">6. WhatsApp</h2>
              <p className="mt-3 leading-7 text-muted-foreground">
                Lorsque vous passez commande, vous êtes redirigé vers WhatsApp pour finaliser votre achat. 
                L'utilisation de WhatsApp est soumise à la politique de confidentialité de Meta/WhatsApp. 
                Nous recommandons de consulter leurs conditions d'utilisation.
              </p>
            </div>
            
            <div>
              <h2 className="font-serif text-2xl">7. Cookies</h2>
              <p className="mt-3 leading-7 text-muted-foreground">
                Notre site utilise le localStorage pour sauvegarder votre panier. Aucun cookie de suivi 
                publicitaire n'est utilisé. Nous utilisons des cookies essentiels uniquement pour le 
                fonctionnement du site.
              </p>
            </div>
            
            <div>
              <h2 className="font-serif text-2xl">8. Vos droits</h2>
              <p className="mt-3 leading-7 text-muted-foreground">
                Conformément aux lois applicables en Côte d'Ivoire, vous disposez des droits suivants :
              </p>
              <ul className="mt-3 space-y-2 text-muted-foreground">
                <li>• Droit d'accès à vos données personnelles</li>
                <li>• Droit de rectification de vos données</li>
                <li>• Droit de suppression de vos données</li>
                <li>• Droit d'opposition au traitement de vos données</li>
              </ul>
              <p className="mt-3 leading-7 text-muted-foreground">
                Pour exercer ces droits, contactez-nous à : {SITE_CONFIG.contact.email}
              </p>
            </div>
            
            <div>
              <h2 className="font-serif text-2xl">9. Sécurité</h2>
              <p className="mt-3 leading-7 text-muted-foreground">
                Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos données contre 
                tout accès, modification, divulgation ou destruction non autorisés. Notre site utilise le 
                protocole HTTPS pour sécuriser les communications.
              </p>
            </div>
            
            <div>
              <h2 className="font-serif text-2xl">10. Modifications</h2>
              <p className="mt-3 leading-7 text-muted-foreground">
                Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. 
                Les modifications seront publiées sur cette page avec une date de mise à jour.
              </p>
            </div>
            
            <div>
              <h2 className="font-serif text-2xl">11. Contact</h2>
              <p className="mt-3 leading-7 text-muted-foreground">
                Pour toute question concernant cette politique de confidentialité, contactez-nous :
              </p>
              <ul className="mt-3 space-y-2 text-muted-foreground">
                <li>• Email : {SITE_CONFIG.contact.email}</li>
                <li>• WhatsApp : {SITE_CONFIG.contact.whatsapp.displayNumber}</li>
                <li>• Adresse : {SITE_CONFIG.contact.location}</li>
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
