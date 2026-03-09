import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Prana Produtos Naturais | Barrashopping — Rio de Janeiro',
  description:
    'Desde 1994 no Barrashopping. Orgânicos, integrais, suplementos, veganos, sem glúten e muito mais. Saúde de verdade para o seu dia a dia.',
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
      <body className="grain-overlay">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
