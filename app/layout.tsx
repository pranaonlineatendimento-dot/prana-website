import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Prana Produtos Naturais | Desde 1994',
  description:
    'Desde 1994 no Barrashopping. Orgânicos, integrais, suplementos, veganos, sem glúten e muito mais. Saúde de verdade para o seu dia a dia.',
  icons: {
    icon: '/assets/images/logo/logo-square.ico',
  },
  keywords: [
    'produtos naturais rio de janeiro',
    'orgânicos barrashopping',
    'suplementos naturais',
    'vegano rio de janeiro',
    'sem glúten sem lactose',
    'prana produtos naturais',
  ],
  openGraph: {
    title: 'Prana Produtos Naturais',
    description: 'Desde 1994 no Barrashopping — saúde e bem-estar com produtos naturais, orgânicos e funcionais.',
    locale: 'pt_BR',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="grain-overlay" style={{ backgroundColor: '#FAFAF8' }}>
        {/* Wood texture overlay - fixed behind all content */}
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundImage: "url('/assets/images/site-images/wood-texture.png')",
            backgroundRepeat: 'repeat',
            backgroundSize: '300px 300px',
            opacity: 0.45,
            mixBlendMode: 'multiply',
            pointerEvents: 'none',
            zIndex: 0,
          }}
          aria-hidden="true"
        />
        <Navbar />
        <main style={{ position: 'relative', zIndex: 1 }}>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
