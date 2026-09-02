# SHOPICI - E-commerce Next.js

> **Votre sélection, simplement.** Site e-commerce complet pour la vente de produits cosmétiques, bien-être et accessoires en Côte d'Ivoire avec tunnel de commande WhatsApp.

![Next.js](https://img.shields.io/badge/Next.js-16.3.3-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8?style=flat-square&logo=tailwind-css)

## 🚀 Fonctionnalités

### E-commerce
- ✅ **Catalogue produits** : 5 produits (Height Grow, Lubrifiant, Thé minceur, 5D White, Briquet électrique)
- ✅ **Variantes produits** : Gestion des saveurs (Lubrifiant : 5 saveurs)
- ✅ **Panier persistant** : LocalStorage avec synchronisation automatique
- ✅ **Gestion stock** : Indicateur disponibilité + badge rupture de stock
- ✅ **Calcul livraison automatique** : 3 zones Abidjan (1500/2000/3000 FCFA) + hors Abidjan (2500 FCFA)

### Tunnel de commande WhatsApp
- ✅ **Formulaire complet** : Nom, téléphone, ville, commune/quartier, adresse
- ✅ **Validation temps réel** : Vérification des champs obligatoires
- ✅ **Message WhatsApp pré-rempli** : Détails commande + produits + livraison + total
- ✅ **Redirection automatique** : WhatsApp Business +225 01 03 67 98 50

### UX/UI
- ✅ **Design moderne** : Interface épurée avec animations subtiles
- ✅ **Responsive** : Mobile-first, optimisé tablette et desktop
- ✅ **CartDrawer** : Panier latéral avec overlay et blocage scroll
- ✅ **WhatsApp flottant** : Bouton d'assistance avec animation pulse
- ✅ **Mobile Menu** : Navigation hamburger avec overlay
- ✅ **Toast notifications** : Feedback ajout panier / erreurs

### SEO & Performance
- ✅ **Metadata complètes** : OpenGraph, Twitter Cards, keywords
- ✅ **Sitemap XML** : Génération automatique
- ✅ **Robots.txt** : Configuration SEO
- ✅ **Images optimisées** : Next.js Image avec lazy loading
- ✅ **Pages légales** : Politique confidentialité + CGU

## 📁 Architecture du projet

```
shopici/
├── app/                          # Pages Next.js App Router
│   ├── page.tsx                  # Page d'accueil (Hero + Produits)
│   ├── catalogue/page.tsx        # Catalogue avec filtres/recherche
│   ├── produit/[slug]/page.tsx   # Page produit détaillée
│   ├── commande/page.tsx         # Tunnel de commande
│   ├── politique-confidentialite/
│   ├── conditions-utilisation/
│   ├── layout.tsx                # Layout global + metadata SEO
│   ├── sitemap.ts                # Sitemap XML
│   └── robots.ts                 # Robots.txt
│
├── components/                   # Composants React modulaires
│   ├── layout/                   # Layout & Navigation
│   │   ├── Header.tsx            # Header avec logo + nav + panier
│   │   ├── Footer.tsx            # Footer 3 colonnes + réseaux sociaux
│   │   ├── MobileMenu.tsx        # Menu hamburger mobile
│   │   └── WhatsAppButton.tsx    # Bouton WhatsApp flottant
│   │
│   ├── cart/                     # Panier
│   │   ├── CartDrawer.tsx        # Drawer latéral du panier
│   │   ├── CartItem.tsx          # Ligne article avec quantité
│   │   ├── CartSummary.tsx       # Récapitulatif + total
│   │   └── EmptyCart.tsx         # État vide avec CTA
│   │
│   ├── products/                 # Produits
│   │   ├── ProductCard.tsx       # Card produit (catalogue)
│   │   ├── ProductGallery.tsx    # Galerie images + thumbnails
│   │   ├── ProductInfo.tsx       # Infos produit + sections dépliables
│   │   ├── VariantSelector.tsx   # Sélection saveurs
│   │   └── QuantitySelector.tsx  # Contrôles quantité +/-
│   │
│   ├── checkout/                 # Commande
│   │   ├── CheckoutForm.tsx      # Formulaire + validation
│   │   ├── DeliveryZoneSelector.tsx  # Sélection zone livraison
│   │   └── OrderSummary.tsx      # Récapitulatif commande
│   │
│   └── ui/                       # Composants UI réutilisables
│       ├── button.tsx            # Button avec variants
│       ├── Input.tsx             # Champ texte
│       ├── Select.tsx            # Select dropdown
│       ├── Textarea.tsx          # Zone de texte
│       ├── Badge.tsx             # Badge (nouveau/rupture)
│       └── Toast.tsx             # Notifications
│
├── lib/                          # Logique métier & utilitaires
│   ├── types/                    # Types TypeScript
│   │   ├── product.ts            # Product, Variant, Category
│   │   ├── cart.ts               # Cart, CartItem
│   │   ├── delivery.ts           # DeliveryZone, DeliveryCity
│   │   ├── checkout.ts           # CheckoutFormData, ValidationErrors
│   │   └── index.ts              # Export centralisé
│   │
│   ├── data/                     # Données statiques
│   │   ├── products.ts           # 5 produits
│   │   ├── categories.ts         # Catégories
│   │   └── delivery-zones.ts    # Zones de livraison Abidjan
│   │
│   ├── hooks/                    # Hooks React personnalisés
│   │   ├── useCart.ts            # Gestion panier
│   │   ├── useDelivery.ts        # Calcul livraison
│   │   └── useLocalStorage.ts    # Persistance localStorage
│   │
│   ├── utils/                    # Utilitaires
│   │   ├── format.ts             # formatPrice, formatDate
│   │   ├── validation.ts         # validateCheckoutForm, validatePhone
│   │   └── whatsapp.ts           # generateOrderMessage, generateWhatsAppLink
│   │
│   ├── constants/
│   │   └── config.ts             # Configuration site (nom, email, WhatsApp)
│   │
│   └── utils.ts                  # cn() + exports utils
│
├── public/                       # Assets statiques
│   ├── shopici-hero.png          # Image hero
│   ├── height-grow.png           # Images produits
│   ├── lubrifiant.png
│   ├── the-minceur.png
│   ├── 5d-white.png
│   ├── briquet-electrique.png
│   └── icon.svg                  # Favicon
│
├── .gitignore
├── next.config.mjs
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## 🛠️ Stack Technique

| Technologie | Version | Rôle |
|------------|---------|------|
| **Next.js** | 16.3.3 | Framework React avec App Router |
| **React** | 19 | Bibliothèque UI |
| **TypeScript** | 5.0+ | Typage statique |
| **Tailwind CSS** | 4.0 | Framework CSS utility-first |
| **Lucide React** | 1.16.0 | Icônes SVG |
| **Vercel Analytics** | Latest | Analytics production |

## 📦 Installation

### Prérequis
- Node.js 18.18+ ou 20.0+
- npm ou yarn

### Étapes

```bash
# 1. Cloner le repo
git clone https://github.com/BenSek225/shopici.git
cd shopici

# 2. Installer les dépendances
npm install

# 3. Lancer le serveur de développement
npm run dev

# 4. Ouvrir dans le navigateur
# http://localhost:3000
```

## 🚀 Scripts disponibles

```bash
# Développement
npm run dev          # Lance le serveur Next.js (http://localhost:3000)

# Build & Production
npm run build        # Compile le projet pour production
npm run start        # Lance le serveur production (après build)

# Linting & Formatage
npm run lint         # Vérifie le code avec ESLint
```

## 🌍 Déploiement

### Vercel (Recommandé)

1. Push sur GitHub
```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

2. Importer sur Vercel
- Aller sur [vercel.com](https://vercel.com)
- Cliquer "Import Project"
- Sélectionner le repo GitHub `shopici`
- Vercel détecte automatiquement Next.js
- Cliquer "Deploy"

3. Variables d'environnement (optionnelles)
```env
# Pas de variables requises pour V1
# WhatsApp et config sont en dur dans le code
```

### Autres plateformes

**Netlify**
```bash
npm run build
# Deploy le dossier .next
```

**Railway / Render**
```bash
# Build command: npm run build
# Start command: npm run start
```

## 📱 Configuration

### WhatsApp Business
Numéro configuré : **+225 01 03 67 98 50**

Pour changer le numéro :
```typescript
// lib/constants/config.ts
export const SITE_CONFIG = {
  whatsapp: '+225XXXXXXXXXX', // Nouveau numéro
  // ...
}
```

### Zones de livraison
```typescript
// lib/data/delivery-zones.ts
export const ABIDJAN_ZONES = [
  { id: 'zone1', name: 'Zone 1 (Plateau, Cocody...)', price: 1500 },
  { id: 'zone2', name: 'Zone 2 (Yopougon, Abobo...)', price: 2000 },
  { id: 'zone3', name: 'Zone 3 (Bingerville...)', price: 3000 }
]

export const OUTSIDE_ABIDJAN_FEE = 2500
```

### Produits
```typescript
// lib/data/products.ts
export const products: Product[] = [
  {
    id: '1',
    name: 'Height Grow',
    slug: 'height-grow',
    price: 15000,
    image: '/height-grow.png',
    category: 'nutrition',
    inStock: true,
    // ...
  }
]
```

## 🧪 Tests

### Tests manuels en local

1. **Navigation**
   - [ ] Page d'accueil
   - [ ] Catalogue
   - [ ] Page produit
   - [ ] Page commande

2. **Panier**
   - [ ] Ajout produit
   - [ ] Modification quantité
   - [ ] Suppression article
   - [ ] Persistance après refresh

3. **Commande**
   - [ ] Calcul livraison Abidjan (zones 1/2/3)
   - [ ] Calcul livraison hors Abidjan
   - [ ] Validation formulaire
   - [ ] Message WhatsApp généré

4. **Responsive**
   - [ ] Mobile (< 640px)
   - [ ] Tablette (768px - 1024px)
   - [ ] Desktop (> 1024px)

### Tests automatisés (TODO V2)
```bash
# À implémenter
npm run test          # Jest + React Testing Library
npm run test:e2e      # Playwright E2E tests
```

## 📝 Données du site

### Produits (5)
1. **Height Grow** - 15 000 FCFA (Nutrition)
2. **Lubrifiant intime** - 3 000 FCFA (Bien-être, 5 saveurs)
3. **Thé minceur** - 8 000 FCFA (Nutrition)
4. **5D White** - 12 000 FCFA (Beauté)
5. **Briquet électrique** - 2 500 FCFA (Accessoires)

### Contact
- **Email** : contact@shopici.com
- **WhatsApp** : +225 01 03 67 98 50
- **Facebook** : shopici.officiel
- **Instagram** : @shopici.ci
- **TikTok** : @shopici

## 🗺️ Roadmap

### ✅ V1 - MVP (Actuel)
- [x] Catalogue produits avec variantes
- [x] Panier persistant localStorage
- [x] Calcul livraison automatique (3 zones Abidjan)
- [x] Tunnel commande WhatsApp
- [x] Pages légales (Politique confidentialité, CGU)
- [x] SEO (Metadata, Sitemap, Robots.txt)
- [x] Responsive mobile/tablet/desktop

### 🚧 V2 - Dashboard Admin (Futur)
- [ ] Authentification (NextAuth.js)
- [ ] Dashboard admin
- [ ] CRUD produits (ajout/modification/suppression)
- [ ] Gestion stock temps réel
- [ ] Gestion commandes (historique, statuts)
- [ ] Analytics (ventes, produits populaires)
- [ ] Base de données (PostgreSQL + Prisma)

### 🔮 V3 - Évolutions (Long terme)
- [ ] Paiement en ligne (Stripe, PayPal, Mobile Money)
- [ ] Authentification clients (comptes utilisateurs)
- [ ] Historique commandes client
- [ ] Système de notes/avis
- [ ] Programme de fidélité
- [ ] Notifications email/SMS
- [ ] Multi-langues (FR/EN)

## 🐛 Problèmes connus

Aucun problème connu pour le moment. Le build production passe avec succès.

Pour reporter un bug :
1. Aller sur [GitHub Issues](https://github.com/BenSek225/shopici/issues)
2. Créer une nouvelle issue avec :
   - Description du bug
   - Étapes pour reproduire
   - Screenshots si possible
   - Environnement (navigateur, OS)

## 🤝 Contribution

Ce projet est actuellement en développement privé. Pour toute suggestion ou collaboration, contactez :

**Ben Sek**  
📧 Email : contact@shopici.com  
📱 WhatsApp : +225 01 03 67 98 50

## 📄 Licence

© 2025 SHOPICI. Tous droits réservés.

---

**Développé avec ❤️ en Côte d'Ivoire**
