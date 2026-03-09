import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Produtos | Prana Produtos Naturais',
  description: 'Orgânicos, suplementos, veganos, sem glúten, sem lactose, funcionais e muito mais. Venha nos visitar no Barrashopping.',
}

const categories = [
  {
    emoji: '🌿',
    title: 'Orgânicos',
    items: ['Cereais e grãos', 'Farinhas e amidos', 'Óleos e azeites', 'Conservas e molhos', 'Bebidas'],
    bg: 'bg-[#2D6A4F]',
    accent: 'text-[#4ECDC4]',
  },
  {
    emoji: '💪',
    title: 'Suplementos',
    items: ['Proteínas vegetais e whey', 'Vitaminas e minerais', 'Creatina e aminoácidos', 'Ômega 3 e óleos', 'Probióticos'],
    bg: 'bg-[#1A2620]',
    accent: 'text-[#4ECDC4]',
  },
  {
    emoji: '🌱',
    title: 'Veganos',
    items: ['Leites vegetais', 'Queijos veganos', 'Carnes vegetais', 'Chocolates veganos', 'Cosméticos veganos'],
    bg: 'bg-[#74C69D]',
    accent: 'text-[#1A2620]',
  },
  {
    emoji: '🍞',
    title: 'Sem Glúten',
    items: ['Pães e torradas', 'Biscoitos e snacks', 'Massas e farinhas', 'Bolos e mix', 'Cereais matinais'],
    bg: 'bg-[#C9A84C]',
    accent: 'text-[#1A2620]',
  },
  {
    emoji: '🥛',
    title: 'Sem Lactose',
    items: ['Leites sem lactose', 'Iogurtes alternativos', 'Creme de leite vegetal', 'Sobremesas', 'Queijos especiais'],
    bg: 'bg-[#4ECDC4]',
    accent: 'text-[#1A2620]',
  },
  {
    emoji: '🧪',
    title: 'Funcionais',
    items: ['Superfoods amazônicos', 'Chás e infusões', 'Cogumelos medicinais', 'Adaptógenos', 'Colágeno e antioxidantes'],
    bg: 'bg-[#2D6A4F]/70',
    accent: 'text-[#F8F4EC]',
  },
  {
    emoji: '❄️',
    title: 'Congelados',
    items: ['Refeições prontas', 'Hambúrgueres veganos', 'Sorvetes naturais', 'Legumes congelados', 'Pré-preparo'],
    bg: 'bg-[#1A2620]/80',
    accent: 'text-[#74C69D]',
  },
  {
    emoji: '🍫',
    title: 'Dietéticos',
    items: ['Chocolates diet', 'Adoçantes naturais', 'Geleias sem açúcar', 'Biscoitos diet', 'Barras de cereais'],
    bg: 'bg-[#3D2B1F]',
    accent: 'text-[#C9A84C]',
  },
]

export default function ProdutosPage() {
  return (
    <>
      <section className="bg-[#1A2620] pt-40 pb-24 relative overflow-hidden">
        <div className="absolute -top-10 -left-10 w-80 h-80 blob bg-[#2D6A4F]/30 blur-3xl opacity-40" />
        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#4ECDC4] mb-4">O que temos para você</p>
          <h1
            className="text-5xl md:text-6xl text-[#F8F4EC] font-light leading-tight mb-6"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Nossos <em className="text-[#4ECDC4]">Produtos</em>
          </h1>
          <p className="text-[#EAF4EE]/60 text-lg max-w-2xl mx-auto">
            Uma curadoria com mais de 1000 produtos — de orgânicos certificados a suplementos
            de alta performance. Tudo selecionado com rigor para o seu bem-estar.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#F8F4EC" />
          </svg>
        </div>
      </section>

      <section className="bg-[#F8F4EC] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {categories.map((cat) => (
              <div
                key={cat.title}
                className={`${cat.bg} rounded-2xl p-6 flex flex-col`}
              >
                <span className="text-4xl mb-4 block">{cat.emoji}</span>
                <h3 className={`text-xl font-semibold mb-3 ${cat.accent}`}
                  style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  {cat.title}
                </h3>
                <ul className="space-y-1.5 flex-grow">
                  {cat.items.map((item) => (
                    <li key={item} className="text-xs text-white/70 flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-current opacity-50" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-20 bg-[#EAF4EE] border border-[#2D6A4F]/15 rounded-3xl p-10 md:p-14 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2D6A4F] mb-4">Visite-nos</p>
            <h2
              className="text-3xl md:text-4xl text-[#1A2620] font-light mb-4"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              Não encontrou o que procura?
            </h2>
            <p className="text-[#1A2620]/60 mb-8 max-w-xl mx-auto">
              Venha nos visitar ou fale pelo WhatsApp. Nossa equipe vai adorar te ajudar a encontrar
              o produto ideal para você.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/5521924319047"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#2D6A4F] text-[#F8F4EC] px-7 py-3.5 rounded-full font-semibold hover:bg-[#4ECDC4] hover:text-[#1A2620] transition-all duration-300"
              >
                Perguntar no WhatsApp
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                href="/contato"
                className="inline-flex items-center gap-2 border border-[#2D6A4F]/30 text-[#2D6A4F] px-7 py-3.5 rounded-full font-medium hover:border-[#2D6A4F] transition-all"
              >
                Ver todos os contatos
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
