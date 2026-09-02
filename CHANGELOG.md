# Changelog SHOPICI

## [2.0.0] - 2025-09-02

### 🎉 Refonte complète du site

#### ✨ Nouvelles fonctionnalités

**Sélection des villes**
- 47 villes de Côte d'Ivoire disponibles dans le formulaire de livraison
- Liste complète : Abidjan, Abengourou, Aboisso, Adzopé, Agboville, Agnibilékrou, Béoumi, Bondoukou, Bongouanou, Bouaflé, Bouaké, Bouna, Boundiali, Dabou, Daloa, Danané, Daoukro, Dimbokro, Divo, Duékoué, Ferkessédougou, Gagnoa, Grand-Bassam, Grand-Lahou, Guiglo, Issia, Jacqueville, Katiola, Korhogo, Lakota, Man, Odienné, Oumé, San-Pédro, Sassandra, Séguéla, Sinfra, Soubré, Tabou, Tanda, Tiassalé, Touba, Toumodi, Vavoua, Yamoussoukro, Zuénoula + "Autre"

**Animations & UX**
- Framer Motion intégré pour animations fluides
- Lenis pour smooth scroll sur toute la page
- Header avec animations :
  - Apparition animée au chargement
  - Changement de style au scroll (backdrop blur + shadow)
  - Badge panier animé
  - Liens nav avec underline animé
  - Transitions smooth entre les pages
- Footer avec animations fadeInUp
- Mobile menu avec slide-in animation
- Boutons avec scale & hover effects
- Toast notifications animées

**Header amélioré**
- Design moderne et responsive
- Navigation desktop avec indicateur actif animé
- Badge panier avec compteur d'articles
- Menu hamburger animé (rotation icon)
- Sticky header avec backdrop blur au scroll

**Footer redesigné**
- **Vrais logos SVG** réseaux sociaux :
  - Facebook (logo bleu officiel)
  - Instagram (gradient officiel)
  - TikTok (logo noir)
  - WhatsApp (logo vert)
- Animations hover sur les icônes
- **Lien "Developed by Ben"** vers https://sekongo-bienvenu.vercel.app/
- 4 colonnes : À propos, Navigation, Informations, Réseaux sociaux
- Footer simplifié (retrait "Parler à SHOPICI" et horaires)

**Mobile optimisé**
- Menu mobile fullscreen avec overlay
- Navigation avec icônes
- Transitions fluides
- Gestion du scroll bloqué quand menu ouvert
- Header adaptatif mobile/tablet/desktop

#### 🔧 Améliorations techniques

**Architecture**
- Structure modulaire complète (50+ fichiers)
- Types TypeScript stricts (0 erreur)
- Hooks personnalisés (useCart, useDelivery, useLocalStorage)
- Composants réutilisables (UI, Layout, Cart, Products, Checkout)

**Performance**
- Build optimisé Next.js 16.3.3
- Type-check réussi (tsc --noEmit)
- Code splitting automatique
- Images optimisées avec next/image

**SEO**
- Metadata complètes (OpenGraph, Twitter Cards)
- Sitemap XML automatique
- Robots.txt configuré
- Structure sémantique HTML

#### 🐛 Corrections

- **Imports** : Tous les imports `@/` fonctionnent correctement
- **Types** : 0 erreur TypeScript
- **Build** : Production build réussi
- **Exports** : lib/utils.ts exporte correctement format, validation, whatsapp
- **Components** : Button.tsx (minuscule) vs button.tsx résolu
- **Icons** : Facebook/Instagram remplacés par logos SVG custom
- **Cart** : useCart retourne items au lieu de cart
- **Header** : Props cartCount/onCartClick retirées (gestion interne)
- **Footer** : SITE_CONFIG.email → SITE_CONFIG.contact.email
- **Lenis** : smoothTouch option retirée (non supportée)
- **Framer Motion** : Variants typés correctement avec 'as const'

#### 📦 Dépendances ajoutées

- `framer-motion@^13.2.0` - Animations
- `lenis@^1.3.26` - Smooth scroll
- `eslint@^9` - Linting
- `eslint-config-next@16.3.3` - Config ESLint Next.js

#### 📝 Scripts ajoutés

```json
{
  "lint": "next lint",
  "type-check": "tsc --noEmit"
}
```

#### 🎨 Styles

- Lenis CSS classes ajoutées
- Animations globales configurées
- Responsive breakpoints optimisés

---

## [1.0.0] - 2025-09-01

### Initial Release

- Site e-commerce Next.js avec 5 produits
- Panier persistant localStorage
- Calcul livraison automatique (3 zones Abidjan)
- Tunnel commande WhatsApp
- Pages légales (Politique confidentialité, CGU)

---

**Légende**
- ✨ Nouvelles fonctionnalités
- 🔧 Améliorations
- 🐛 Corrections
- 📦 Dépendances
- 📝 Documentation
- 🎨 Styles
