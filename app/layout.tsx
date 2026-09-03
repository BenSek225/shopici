import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { SmoothScroll } from '@/components/layout/SmoothScroll'
import { CartProvider } from '@/lib/contexts/CartContext'
import './globals.css'

export const metadata: Metadata = {
  title: 'SHOPICI — Votre sélection, simplement.',
  description: 'Découvrez les essentiels soins, beauté, bien-être et performance livrés en Côte d’Ivoire.',
  icons: {
    icon: '/shopici-favicon.png',
    apple: '/shopici-favicon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className="bg-background">
      <body className="antialiased">
        <SmoothScroll />
        <CartProvider>
          {children}
        </CartProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
