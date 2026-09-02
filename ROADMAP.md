# 🚀 ROADMAP TECHNIQUE - SHOPICI.COM

## 📌 Vue d'ensemble
Refonte complète de l'architecture et amélioration de l'application e-commerce SHOPICI selon les meilleures pratiques Next.js 16, TypeScript et les spécifications du cahier des charges.

---

## 🎯 OBJECTIFS PRINCIPAUX

### ✅ Architecture & Organisation du Code
- Séparer les composants monolithiques en composants réutilisables
- Organiser les fichiers selon les conventions Next.js App Router
- Éliminer les importations inutiles et optimiser les dépendances
- Respecter les principes SOLID et Clean Code

### ✅ Fonctionnalités E-commerce Complètes
- Système de panier avec persistance localStorage
- Calcul automatique des frais de livraison selon zones
- Tunnel de commande complet vers WhatsApp
- Gestion des variantes produits (saveurs)
- Gestion de la disponibilité (en stock / rupture)

### ✅ Design & UX Professionnels
- Identité visuelle cohérente (logo SHOPICI)
- Interface responsive mobile-first
- Animations et transitions fluides
- Accessibilité WCAG niveau A minimum

---

## 📂 PHASE 1 : RESTRUCTURATION ARCHITECTURE (CRITIQUE)

### 1.1 Réorganisation des dossiers

**Structure cible :**
```
shopici/
├── app/
│   ├── (root)/
│   │   ├── page.tsx                    # Page d'accueil
│   │   ├── layout.tsx                  # Layout principal
│   │   └── globals.css
│   ├── catalogue/
│   │   └── page.tsx                    # Page catalogue
│   ├── produit/
│   │   └── [slug]/
│   │       └── page.tsx                # Page produit dynamique
│   ├── commande/
│   │   └── page.tsx                    # Page checkout
│   ├── politique-confidentialite/
│   │   └── page.tsx                    # Politique de confidentialité
│   └── conditions-utilisation/
│       └── page.tsx                    # CGU
├── components/
│   ├── layout/
│   │   ├── Header.tsx                  # En-tête site
│   │   ├── Footer.tsx                  # Pied de page
│   │   └── WhatsAppButton.tsx          # Bouton flottant WhatsApp
│   ├── cart/
│   │   ├── CartDrawer.tsx              # Drawer panier latéral
│   │   ├── CartItem.tsx                # Item dans le panier
│   │   └── CartSummary.tsx             # Récapitulatif panier
│   ├── products/
│   │   ├── ProductCard.tsx             # Carte produit (liste)
│   │   ├── ProductGallery.tsx          # Galerie images produit
│   │   ├── ProductDetails.tsx          # Détails produit
│   │   └── VariantSelector.tsx         # Sélecteur de variantes
│   ├── checkout/
│   │   ├── CheckoutForm.tsx            # Formulaire de commande
│   │   ├── DeliveryZoneSelector.tsx    # Sélection zone livraison
│   │   └── OrderSummary.tsx            # Résumé commande
│   └── ui/
│       ├── Button.tsx                  # Composant bouton réutilisable
│       ├── Input.tsx                   # Composant input
│       ├── Select.tsx                  # Composant select
│       └── Toast.tsx                   # Notifications toast
├── lib/
│   ├── data/
│   │   ├── products.ts                 # Données produits
│   │   ├── categories.ts               # Données catégories
│   │   └── delivery-zones.ts           # Zones et tarifs de livraison
│   ├── hooks/
│   │   ├── useCart.ts                  # Hook gestion panier
│   │   ├── useDelivery.ts              # Hook calcul livraison
│   │   └── useLocalStorage.ts          # Hook localStorage générique
│   ├── utils/
│   │   ├── format.ts                   # Formatage (prix, texte)
│   │   ├── validation.ts               # Validation formulaires
│   │   └── whatsapp.ts                 # Génération messages WhatsApp
│   ├── types/
│   │   ├── product.ts                  # Types produits
│   │   ├── cart.ts                     # Types panier
│   │   └── delivery.ts                 # Types livraison
│   └── constants/
│       └── config.ts                   # Configuration globale
├── public/
│   ├── images/
│   │   ├── logo/
│   │   │   ├── shopici-logo.png
│   │   │   └── shopici-logo.svg
│   │   ├── products/                   # Images produits
│   │   └── icons/                      # Icônes réseaux sociaux
│   └── favicon.ico
└── styles/
    └── themes.css                      # Variables CSS personnalisées
```

**Actions :**
- [x] Créer la structure de dossiers complète
- [ ] Déplacer les fichiers existants vers les bons emplacements
- [ ] Vérifier l'absence de conflits d'imports

---

## 📂 PHASE 2 : SÉPARATION DES COMPOSANTS

### 2.1 Extraction du fichier monolithique `shopici-store.tsx`

**Fichier actuel :** 1 fichier de 350+ lignes contenant TOUS les composants

**Objectif :** Séparer en 20+ fichiers modulaires

#### Actions détaillées :

**A. Composants Layout**
- [ ] Extraire `Header` → `components/layout/Header.tsx`
- [ ] Extraire `Footer` → `components/layout/Footer.tsx`
- [ ] Créer `WhatsAppButton` → `components/layout/WhatsAppButton.tsx`
- [ ] Créer `MobileMenu` → `components/layout/MobileMenu.tsx`

**B. Composants Cart**
- [ ] Extraire `CartDrawer` → `components/cart/CartDrawer.tsx`
- [ ] Créer `CartItem` → `components/cart/CartItem.tsx`
- [ ] Créer `CartSummary` → `components/cart/CartSummary.tsx`
- [ ] Créer `EmptyCart` → `components/cart/EmptyCart.tsx`

**C. Composants Products**
- [ ] Extraire `ProductCard` → `components/products/ProductCard.tsx`
- [ ] Créer `ProductGallery` → `components/products/ProductGallery.tsx`
- [ ] Créer `ProductInfo` → `components/products/ProductInfo.tsx`
- [ ] Créer `VariantSelector` → `components/products/VariantSelector.tsx`
- [ ] Créer `QuantitySelector` → `components/products/QuantitySelector.tsx`

**D. Composants Checkout**
- [ ] Extraire formulaire → `components/checkout/CheckoutForm.tsx`
- [ ] Créer `DeliveryZoneSelector` → `components/checkout/DeliveryZoneSelector.tsx`
- [ ] Créer `OrderSummary` → `components/checkout/OrderSummary.tsx`

**E. Composants UI génériques**
- [ ] Améliorer `Button` → `components/ui/Button.tsx` (variants, sizes)
- [ ] Créer `Input` → `components/ui/Input.tsx`
- [ ] Créer `Select` → `components/ui/Select.tsx`
- [ ] Créer `Toast` → `components/ui/Toast.tsx`
- [ ] Créer `Badge` → `components/ui/Badge.tsx`

---

## 📂 PHASE 3 : REFACTORISATION DES DONNÉES

### 3.1 Séparation des données

**Fichier actuel :** `lib/shopici-data.ts` (tout mélangé)

**Objectif :** Séparer en fichiers thématiques typés

#### Actions :

**A. Créer `lib/data/products.ts`**
```typescript
export const products: Product[] = [...]
export const findProductBySlug = (slug: string) => products.find(p => p.slug === slug)
export const filterProductsByCategory = (category: string) => products.filter(p => p.category === category)
```

**B. Créer `lib/data/categories.ts`**
```typescript
export const categories: Category[] = [...]
export const getCategoryByName = (name: string) => categories.find(c => c.name === name)
```

**C. Créer `lib/data/delivery-zones.ts`**
```typescript
export const ABIDJAN_ZONES = {
  zone1: { communes: ['Abobo', 'Cocody', ...], price: 1500 },
  zone2: { communes: ['Bingerville', ...], price: 2000 },
  zone3: { communes: ['Anyama', ...], price: 3000 }
}

export const OUTSIDE_ABIDJAN_PRICE = 2500

export const calculateDeliveryFee = (city: string, commune?: string): number => {
  // Logique de calcul
}
```

**D. Créer `lib/constants/config.ts`**
```typescript
export const SITE_CONFIG = {
  name: 'SHOPICI',
  description: 'Votre sélection, simplement.',
  whatsapp: {
    number: '2250710504007',
    displayNumber: '+225 01 03 67 98 50'
  },
  email: 'contact@shopici.com',
  socials: {
    facebook: '#',
    instagram: '#',
    tiktok: '#'
  }
}
```

**Actions :**
- [ ] Créer tous les fichiers de données
- [ ] Typer toutes les données avec interfaces TypeScript
- [ ] Déplacer les fonctions utilitaires au bon endroit
- [ ] Mettre à jour les imports dans tout le projet

---

## 📂 PHASE 4 : SYSTÈME DE HOOKS PERSONNALISÉS

### 4.1 Hook useCart

**Fichier :** `lib/hooks/useCart.ts`

**Responsabilités :**
- Gestion de l'état du panier
- Persistance localStorage
- Ajout/modification/suppression d'articles
- Calcul du total

**Actions :**
- [ ] Extraire la logique du panier depuis le composant
- [ ] Ajouter la validation des quantités
- [ ] Gérer les variantes correctement
- [ ] Implémenter le vidage du panier

### 4.2 Hook useDelivery

**Fichier :** `lib/hooks/useDelivery.ts`

**Responsabilités :**
- Calcul automatique des frais de livraison
- Validation des zones
- Liste des communes par zone

**Actions :**
- [ ] Créer la logique de calcul
- [ ] Connecter aux données de zones
- [ ] Gérer Abidjan vs Hors Abidjan

### 4.3 Hook useLocalStorage

**Fichier :** `lib/hooks/useLocalStorage.ts`

**Responsabilités :**
- Abstraction de localStorage
- Gestion de l'hydratation
- Gestion des erreurs

**Actions :**
- [ ] Créer un hook générique réutilisable
- [ ] Gérer le SSR Next.js proprement
- [ ] Ajouter la validation de type

---

## 📂 PHASE 5 : TYPES TYPESCRIPT STRICTS

### 5.1 Définir tous les types

**Fichiers à créer :**

**A. `lib/types/product.ts`**
```typescript
export interface Product {
  slug: string
  name: string
  category: string
  subcategory: string
  price: number
  oldPrice?: number
  badge?: string
  available: boolean
  description: string
  details: string[]
  images: string[]
  variants?: Variant[]
  note?: string
}

export interface Variant {
  id: string
  name: string
  price: number
  image: string
  available?: boolean
}
```

**B. `lib/types/cart.ts`**
```typescript
export interface CartItem {
  product: Product
  variant?: Variant
  quantity: number
}

export interface Cart {
  items: CartItem[]
  total: number
  count: number
}
```

**C. `lib/types/delivery.ts`**
```typescript
export interface DeliveryZone {
  name: string
  communes: string[]
  price: number
}

export interface DeliveryInfo {
  city: string
  commune?: string
  quarter: string
  address?: string
  fee: number
}
```

**D. `lib/types/checkout.ts`**
```typescript
export interface CheckoutForm {
  name: string
  phone: string
  city: string
  commune?: string
  quarter: string
  address?: string
}

export interface Order {
  customer: CheckoutForm
  items: CartItem[]
  subtotal: number
  deliveryFee: number
  total: number
}
```

**Actions :**
- [ ] Créer tous les fichiers de types
- [ ] Exporter depuis un index.ts central
- [ ] Appliquer partout dans le code
- [ ] Activer mode strict TypeScript

---

## 📂 PHASE 6 : FONCTIONNALITÉS MÉTIER

### 6.1 Système de livraison complet

**Objectif :** Calcul automatique selon le cahier des charges

**Zones à implémenter :**

**Abidjan - 3 zones tarifaires :**
- Zone 1 (1 500 FCFA) : Abobo, Cocody, Yopougon, Adjamé, Plateau, Treichville, Marcory, Koumassi
- Zone 2 (2 000 FCFA) : Bingerville, Songon, Port-Bouët, Gonzague
- Zone 3 (3 000 FCFA) : Anyama, Songon Carrefour Jacqueville, Grand-Bassam

**Hors Abidjan :**
- Forfait unique : 2 500 FCFA

**Actions :**
- [ ] Créer `delivery-zones.ts` avec les données complètes
- [ ] Implémenter la fonction `calculateDeliveryFee()`
- [ ] Créer le composant `DeliveryZoneSelector`
- [ ] Intégrer dans le formulaire de commande
- [ ] Afficher le tarif en temps réel

### 6.2 Message WhatsApp professionnel

**Format cible :**
```
Bonjour SHOPICI, je souhaite commander :

• Height Grow x1 — 15 000 FCFA
• Lubrifiant comestible — Fraise x2 — 13 000 FCFA

Total produits : 28 000 FCFA
Livraison : 1 500 FCFA (Cocody, Abidjan)
TOTAL COMMANDE : 29 500 FCFA

Nom : Jean Kouassi
Téléphone : 07 10 50 40 07
Ville : Abidjan, Cocody
Quartier : Angré — Près de la pharmacie centrale
```

**Actions :**
- [ ] Créer `lib/utils/whatsapp.ts`
- [ ] Fonction `generateOrderMessage(order: Order): string`
- [ ] Inclure tous les détails (produits, variantes, livraison)
- [ ] Tester avec différents scénarios

### 6.3 Gestion des variantes

**Objectif :** Permettre le choix des saveurs (lubrifiant = 5 saveurs)

**Actions :**
- [ ] Créer `VariantSelector` component
- [ ] Gérer l'état de sélection
- [ ] Bloquer ajout panier si variante requise mais non sélectionnée
- [ ] Afficher prix/image de la variante sélectionnée
- [ ] Gérer la disponibilité par variante

### 6.4 Gestion disponibilité

**Statuts :**
- `available: true` → Afficher normalement
- `available: false` → Badge "Rupture de stock" + bouton désactivé

**Actions :**
- [ ] Ajouter le champ `available` partout
- [ ] Créer le badge de rupture de stock
- [ ] Désactiver l'ajout au panier si rupture
- [ ] Garder le produit visible dans le catalogue

---

## 📂 PHASE 7 : IDENTITÉ VISUELLE & DESIGN

### 7.1 Intégration du logo SHOPICI

**Logo fourni :** Soleil orange avec texte SHOPICI.COM

**Actions :**
- [ ] Placer `shopici-logo.png` et `.svg` dans `public/images/logo/`
- [ ] Remplacer le texte "SHOPICI" par `<Image>` dans Header
- [ ] Ajouter le logo dans le Footer
- [ ] Créer favicon à partir du logo
- [ ] Optimiser les tailles (header: 180px, footer: 120px)

### 7.2 Footer professionnel

**Contenu requis :**
- Logo SHOPICI
- Description courte
- Coordonnées (WhatsApp, Email)
- Icônes réseaux sociaux (Facebook, Instagram, TikTok)
- Liens légaux (Politique confidentialité, CGU)
- Copyright

**Actions :**
- [ ] Refaire complètement le Footer
- [ ] Intégrer icônes réseaux sociaux (lucide-react ou images)
- [ ] Layout 3 colonnes responsive
- [ ] Liens fonctionnels vers pages légales
- [ ] Bon contraste et lisibilité

### 7.3 Bouton WhatsApp flottant

**Spécifications :**
- Position : fixed bottom-right
- Couleur : vert WhatsApp (#25D366)
- Icône : Logo WhatsApp officiel
- Animation : pulse subtile
- Visible : desktop + mobile
- Lien : vers +225 01 03 67 98 50

**Actions :**
- [ ] Créer `WhatsAppButton.tsx`
- [ ] Ajouter animation CSS pulse
- [ ] Icône WhatsApp depuis lucide-react ou image
- [ ] Tester sur tous les viewports
- [ ] Message par défaut personnalisé

### 7.4 Améliorations UI/UX

**Actions :**
- [ ] Harmoniser les espacements (padding, margin)
- [ ] Améliorer la hiérarchie typographique
- [ ] Ajouter des états hover/focus clairs
- [ ] Animations de transitions fluides
- [ ] Toast notifications élégantes
- [ ] Loading states sur les boutons

---

## 📂 PHASE 8 : PAGES & ROUTING

### 8.1 Pages à créer/améliorer

**Pages principales :**
- [ ] `/` - Accueil (hero, catégories, produits phares)
- [ ] `/catalogue` - Catalogue complet (filtres, tri, recherche)
- [ ] `/produit/[slug]` - Page produit détaillée
- [ ] `/commande` - Checkout avec formulaire

**Pages légales :**
- [ ] `/politique-confidentialite` - Politique de confidentialité
- [ ] `/conditions-utilisation` - CGU

**Pages supplémentaires (optionnel) :**
- [ ] `/contact` - Page contact
- [ ] `/a-propos` - À propos de SHOPICI

### 8.2 Metadata & SEO

**Actions par page :**
- [ ] Définir `metadata` Next.js pour chaque page
- [ ] Titres optimisés (< 60 caractères)
- [ ] Descriptions meta (< 160 caractères)
- [ ] Open Graph tags (og:image, og:title, etc.)
- [ ] JSON-LD pour les produits
- [ ] Sitemap.xml dynamique
- [ ] robots.txt

---

## 📂 PHASE 9 : RESPONSIVE & MOBILE

### 9.1 Design mobile-first

**Breakpoints :**
- Mobile : < 640px
- Tablet : 640px - 1024px
- Desktop : > 1024px

**Actions :**
- [ ] Tester TOUTES les pages sur mobile
- [ ] Menu burger fonctionnel
- [ ] Panier drawer mobile-friendly
- [ ] Formulaires touch-optimisés
- [ ] Images responsive (Next.js Image)
- [ ] Grilles adaptatives (grid, flex)

### 9.2 Performance mobile

**Actions :**
- [ ] Lazy loading des images
- [ ] Code splitting des composants lourds
- [ ] Optimisation des fonts (next/font)
- [ ] Réduire la taille du bundle
- [ ] Tester avec Lighthouse (score > 90)

---

## 📂 PHASE 10 : QUALITÉ DU CODE

### 10.1 Conventions de code

**Standards à appliquer :**
- [ ] Nommage cohérent (camelCase, PascalCase)
- [ ] Un composant = un fichier
- [ ] Props typées avec interfaces
- [ ] Commentaires JSDoc sur fonctions complexes
- [ ] Pas de `any` en TypeScript
- [ ] Utiliser `const` par défaut

### 10.2 Nettoyage des imports

**Actions :**
- [ ] Supprimer les imports inutilisés
- [ ] Organiser les imports (React, Next, libs, local)
- [ ] Utiliser imports absolus (`@/components/...`)
- [ ] Pas d'imports circulaires

### 10.3 Gestion des erreurs

**Actions :**
- [ ] Try/catch sur localStorage
- [ ] Validation des formulaires avec messages clairs
- [ ] Gestion des états de chargement
- [ ] Pages d'erreur 404 personnalisées
- [ ] Error boundaries React

---

## 📂 PHASE 11 : TESTS & VALIDATION

### 11.1 Tests manuels

**Parcours utilisateur complet :**
- [ ] Navigation homepage → catalogue → produit
- [ ] Ajout produit au panier (avec/sans variante)
- [ ] Modification quantité dans panier
- [ ] Suppression d'un article
- [ ] Remplissage formulaire commande
- [ ] Calcul livraison automatique
- [ ] Génération message WhatsApp
- [ ] Redirection WhatsApp fonctionnelle

**Tests responsive :**
- [ ] iPhone SE (375px)
- [ ] iPhone 12/13 (390px)
- [ ] iPad (768px)
- [ ] Desktop (1920px)

### 11.2 Validation technique

**Checklist :**
- [ ] Aucune erreur console
- [ ] Aucun warning TypeScript
- [ ] Build Next.js réussi (`npm run build`)
- [ ] Lighthouse score > 90
- [ ] Toutes les images optimisées
- [ ] Tous les liens fonctionnels

---

## 📂 PHASE 12 : DÉPLOIEMENT & PRODUCTION

### 12.1 Configuration production

**Actions :**
- [ ] Variables d'environnement (.env.local)
- [ ] Configuration Vercel
- [ ] Nom de domaine shopici.com
- [ ] SSL automatique
- [ ] CDN Vercel activé

### 12.2 Analytics & monitoring

**Actions (optionnel Phase 2) :**
- [ ] Vercel Analytics
- [ ] Google Analytics 4
- [ ] Meta Pixel (Facebook Ads)
- [ ] Search Console

---

## 📊 RÉCAPITULATIF DES LIVRABLES

### ✅ Architecture
- 20+ composants modulaires séparés
- Structure de dossiers claire et scalable
- Hooks personnalisés réutilisables
- Types TypeScript stricts partout

### ✅ Fonctionnalités
- Panier persistant avec localStorage
- Système de livraison automatique (3 zones Abidjan + Hors Abidjan)
- Message WhatsApp professionnel complet
- Gestion variantes (5 saveurs lubrifiant)
- Gestion disponibilité produits

### ✅ Design
- Logo SHOPICI intégré partout
- Footer professionnel avec réseaux sociaux
- Bouton WhatsApp flottant avec animation
- Interface responsive mobile-first
- Animations et transitions fluides

### ✅ Pages
- 4 pages principales (accueil, catalogue, produit, commande)
- 2 pages légales (politique, CGU)
- Metadata SEO optimisées
- Sitemap + robots.txt

### ✅ Qualité
- Code propre et maintenable
- Imports optimisés
- Gestion d'erreurs robuste
- Performance optimisée

---

## 🎯 INDICATEURS DE SUCCÈS

- ✅ Build Next.js sans erreur
- ✅ 0 warning TypeScript
- ✅ Lighthouse Performance > 90
- ✅ Lighthouse Accessibility > 90
- ✅ Lighthouse SEO > 90
- ✅ Temps de chargement < 2s
- ✅ Tunnel de vente complet fonctionnel
- ✅ Message WhatsApp généré correctement
- ✅ Responsive parfait sur tous devices

---

## 📅 ESTIMATION TEMPORELLE

| Phase | Durée estimée | Priorité |
|-------|--------------|----------|
| Phase 1-3 : Architecture | 2-3 jours | 🔴 Critique |
| Phase 4-5 : Types & Hooks | 1-2 jours | 🔴 Critique |
| Phase 6 : Fonctionnalités | 2-3 jours | 🔴 Critique |
| Phase 7 : Design & UI | 2 jours | 🟠 Important |
| Phase 8 : Pages & SEO | 1-2 jours | 🟠 Important |
| Phase 9 : Responsive | 1 jour | 🟠 Important |
| Phase 10 : Qualité code | 1 jour | 🟡 Souhaitable |
| Phase 11 : Tests | 1 jour | 🟡 Souhaitable |
| Phase 12 : Déploiement | 0.5 jour | ✅ Final |

**TOTAL : 12-16 jours de travail effectif**

---

## 🚀 PROCHAINE ÉTAPE

**Commencer par Phase 1 :**
1. Créer la structure de dossiers complète
2. Extraire les composants du fichier monolithique
3. Séparer les données en fichiers thématiques
4. Typer toutes les entités

**Êtes-vous prêt à démarrer ? 🎯**
