import type { Metadata } from 'next'
import { Leaf, Heart, Award, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Nossa História | Prana Produtos Naturais',
  description: 'Desde 1994 no Barrashopping, a Prana é pioneira em produtos naturais, orgânicos e funcionais no Rio de Janeiro.',
}

const milestones = [
  { year: '1994', event: 'Abertura da Prana no Barrashopping, como uma das primeiras lojas de produtos naturais do Rio de Janeiro.' },
  { year: '2000', event: 'Expansão do mix com a chegada de suplementos alimentares e vitaminas.' },
  { year: '2010', event: 'Início da linha de produtos sem glúten e sem lactose, atendendo ao crescimento desse público.' },
  { year: '2015', event: 'Curadoria de marcas veganas e orgânicos certificados em resposta à tendência de consumo consciente.' },
  { year: '2020', event: 'Adaptação para atendimento por WhatsApp e delivery no contexto da pandemia.' },
  { year: '2024', event: '30 anos de história — renovados, firmes e mais comprometidos do que nunca com seu bem-estar.' },
]

const values = [
  { icon: <Leaf className="w-6 h-6" />, title: 'Naturalidade', desc: 'Acreditamos que o melhor para o corpo vem da natureza — sem artifícios desnecessários.' },
  { icon: <Heart className="w-6 h-6" />, title: 'Cuidado', desc: 'Cada produto é escolhido com atenção e carinho para o bem-estar de quem consome.' },
  { icon: <Award className="w-6 h-6" />, title: 'Qualidade', desc: 'Trabalhamos apenas com marcas e fornecedores com rigorosos padrões de qualidade.' },
  { icon: <Users className="w-6 h-6" />, title: 'Comunidade', desc: 'Fazemos parte da vida de famílias cariocas há 30 anos — isso nos move todos os dias.' },
]

export default function SobrePage() {
  return (
    <>
      {/* Header */}
      <section className="bg-[#1A2620] pt-40 pb-24 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 blob bg-[#2D6A4F]/30 blur-3xl opacity-40" />
        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#4ECDC4] mb-4">Sobre nós</p>
          <h1
            className="text-5xl md:text-6xl text-[#F8F4EC] font-light leading-tight mb-6"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Três décadas dedicadas<br />à sua <em className="text-[#4ECDC4]">saúde</em>
          </h1>
          <p className="text-[#EAF4EE]/60 text-lg max-w-2xl mx-auto">
            A Prana nasceu em 1994 com uma missão simples: tornar mais fácil e acessível o acesso a
            produtos naturais de qualidade no Rio de Janeiro.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#F8F4EC" />
          </svg>
        </div>
      </section>

      {/* Story */}
      <section className="bg-[#F8F4EC] py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2
              className="text-4xl text-[#1A2620] font-light mb-6"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              Uma história construída<br />com propósito
            </h2>
            <div className="space-y-4 text-[#1A2620]/65 leading-relaxed">
              <p>
                Quando a Prana abriu suas portas no Barrashopping em 1994, o mercado de produtos
                naturais no Brasil ainda engatinhava. Nossos fundadores acreditavam — antes que
                virasse tendência — que a alimentação consciente seria um pilar fundamental da
                qualidade de vida.
              </p>
              <p>
                Três décadas depois, essa visão se consolidou. A Prana tornou-se referência no Rio
                de Janeiro para quem busca orgânicos, funcionais, suplementos, veganos, sem glúten
                e sem lactose — tudo com a curadoria de quem entende do assunto.
              </p>
              <p>
                O que nos diferencia não é apenas o mix de produtos, mas o atendimento humano e
                personalizado. Nossa equipe conhece cada produto nas prateleiras e está pronta para
                orientar você na melhor escolha para o seu estilo de vida.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="grid grid-cols-2 gap-4">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-[#EAF4EE] border border-[#2D6A4F]/10 rounded-2xl p-6 hover:border-[#2D6A4F]/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-[#2D6A4F]/10 flex items-center justify-center text-[#2D6A4F] mb-3">
                  {v.icon}
                </div>
                <h3 className="font-semibold text-[#1A2620] mb-1">{v.title}</h3>
                <p className="text-xs text-[#1A2620]/55 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-[#EAF4EE] py-24">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2D6A4F] mb-3">Linha do tempo</p>
            <h2
              className="text-4xl text-[#1A2620] font-light"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              Nossa trajetória
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-16 top-0 bottom-0 w-px bg-[#2D6A4F]/20" />
            <div className="space-y-8">
              {milestones.map((m) => (
                <div key={m.year} className="flex gap-8 items-start">
                  <div className="w-16 flex-shrink-0 text-right">
                    <span
                      className="text-lg font-bold text-[#2D6A4F]"
                      style={{ fontFamily: 'Cormorant Garamond, serif' }}
                    >
                      {m.year}
                    </span>
                  </div>
                  <div className="relative pt-1">
                    <div className="absolute -left-[26px] top-2 w-3 h-3 rounded-full bg-[#4ECDC4] border-2 border-[#F8F4EC]" />
                    <p className="text-sm text-[#1A2620]/65 leading-relaxed">{m.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
