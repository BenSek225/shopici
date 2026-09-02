export type Variant = { id: string; name: string; price: number; image: string }
export type Product = { slug: string; name: string; category: string; subcategory: string; price: number; oldPrice?: number; badge?: string; available: boolean; description: string; details: string[]; images: string[]; variants?: Variant[]; note?: string }

export const categories = [
  { name: 'Performance', description: 'Croissance, nutrition et énergie au quotidien.', image: '/height-grow.png' },
  { name: 'Bien-être', description: 'Des rituels intimes et personnels, choisis avec soin.', image: '/lubrifiant.png' },
  { name: 'Beauté', description: 'Des essentiels pour prendre soin de vous.', image: '/5d-white.png' },
  { name: 'Maison & Accessoires', description: 'Des objets pratiques pour votre quotidien.', image: '/briquet-electrique.png' },
]
const pics = (image: string) => [image, image, image, image, image]
const lubricantVariants: Variant[] = [
  { id: 'fraise', name: 'Fraise', price: 6500, image: '/lubrifiant.png' },
  { id: 'vanille', name: 'Vanille', price: 6500, image: '/lubrifiant.png' },
  { id: 'menthe', name: 'Menthe', price: 6500, image: '/lubrifiant.png' },
  { id: 'cerise', name: 'Cerise', price: 6500, image: '/lubrifiant.png' },
  { id: 'chocolat', name: 'Chocolat', price: 6500, image: '/lubrifiant.png' },
]
export const products: Product[] = [
  { slug: 'height-grow', name: 'Height Grow', category: 'Performance', subcategory: 'Croissance & nutrition', price: 15000, badge: 'Lancement', available: true, description: 'Un complément à base de calcium destiné à accompagner la croissance et la santé osseuse.', details: ['Complément alimentaire à base de calcium', 'À intégrer dans une routine équilibrée', 'Respecter les conseils d’utilisation indiqués sur l’emballage'], images: pics('/height-grow.png'), note: 'Ce produit accompagne une bonne hygiène de vie. Il ne garantit pas une augmentation de taille.' },
  { slug: 'lubrifiant-comestible', name: 'Lubrifiant comestible', category: 'Bien-être', subcategory: 'Intimité & plaisir', price: 6500, badge: '5 saveurs', available: true, description: 'Un lubrifiant comestible et parfumé, proposé en cinq saveurs pour varier les envies.', details: ['Texture agréable et parfumée', 'Choisir une saveur avant l’ajout au panier', 'Usage externe uniquement · conserver à température ambiante'], images: pics('/lubrifiant.png'), variants: lubricantVariants, note: 'Produit réservé à un public majeur.' },
  { slug: 'the-minceur', name: 'Thé minceur', category: 'Bien-être', subcategory: 'Routine & équilibre', price: 8000, oldPrice: 10000, badge: 'Nouveau', available: true, description: 'Une infusion bien-être à intégrer dans une routine équilibrée et active.', details: ['Mélange de plantes sélectionnées', 'À déguster dans le cadre d’une alimentation variée', 'Suivre la préparation indiquée sur l’emballage'], images: pics('/the-minceur.png'), note: 'Ce produit ne remplace pas une alimentation équilibrée ni un avis médical.' },
  { slug: '5d-white', name: '5D White', category: 'Beauté', subcategory: 'Soin du sourire', price: 12000, oldPrice: 15000, badge: 'Best-seller', available: true, description: 'Un kit de blanchiment dentaire à utiliser simplement à la maison, selon les instructions.', details: ['Kit avec dispositif lumineux et accessoires', 'Lire attentivement la notice avant utilisation', 'Ne pas utiliser en cas de sensibilité sans conseil professionnel'], images: pics('/5d-white.png'), note: 'En cas de doute ou de sensibilité, demandez conseil à un professionnel de santé.' },
  { slug: 'briquet-electrique-rechargeable', name: 'Briquet électrique rechargeable', category: 'Maison & Accessoires', subcategory: 'Objets pratiques', price: 9000, badge: 'Pratique', available: true, description: 'Un briquet électrique rechargeable, pratique au quotidien et sans flamme traditionnelle.', details: ['Recharge USB', 'Résistant au vent', 'Garder hors de portée des enfants'], images: pics('/briquet-electrique.png') },
]
export const formatPrice = (n: number) => new Intl.NumberFormat('fr-FR').format(n) + ' FCFA'
export const whatsappNumber = '2250710504007'
export const whatsappLink = (message = 'Bonjour SHOPICI, je souhaite en savoir plus.') => `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
export const findProduct = (slug: string) => products.find((p) => p.slug === slug)
export const heroImage = '/height-grow.png'
export type CartItem = { product: Product; quantity: number; variant?: Variant }
export const itemName = (item: CartItem) => item.variant ? `${item.product.name} — ${item.variant.name}` : item.product.name
export const itemPrice = (item: CartItem) => item.variant?.price ?? item.product.price
export const cartMessage = (items: CartItem[], customer?: { name: string; phone: string; city: string; note: string }) => { const lines = items.map((i) => `• ${itemName(i)} x${i.quantity} — ${formatPrice(itemPrice(i) * i.quantity)}`).join('\n'); const total = items.reduce((s, i) => s + itemPrice(i) * i.quantity, 0); return `Bonjour SHOPICI, je souhaite commander :\n\n${lines}\n\nTotal produits : ${formatPrice(total)}\nLivraison : à confirmer${customer ? `\n\nNom : ${customer.name}\nTéléphone : ${customer.phone}\nVille : ${customer.city}${customer.note ? `\nNote : ${customer.note}` : ''}` : ''}` }
export const money = formatPrice
