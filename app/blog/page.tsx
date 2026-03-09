import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog & Dicas | Prana Produtos Naturais',
  description: 'Dicas de saúde, bem-estar, receitas naturais e novidades da Prana Produtos Naturais.',
}

const posts = [
  {
    tag: 'Nutrição',
    title: 'Os benefícios dos superfoods amazônicos para a sua saúde',
    excerpt: 'Açaí, camu-camu, maca, guaraná — conheça os superalimentos da Amazônia e como incluí-los no seu dia a dia.',
    date: 'Mar 2025',
    emoji: '🌳',
    color: 'bg-[#2D6A4F]',
  },
  {
    tag: 'Receitas',
    title: 'Panqueca proteica com banana e aveia sem glúten',
    excerpt: 'Receita fácil, nutritiva e deliciosa para começar o dia com energia. Rende 4 porções em menos de 15 minutos.',
    date: 'Fev 2025',
    emoji: '🥞',
    color: 'bg-[#C9A84C]',
  },
  {
    tag: 'Bem-estar',
    title: 'Guia completo para uma alimentação vegana equilibrada',
    excerpt: 'Como garantir todos os nutrientes necessários seguindo uma dieta plant-based. Dicas práticas para o cotidiano.',
    date: 'Jan 2025',
    emoji: '🌱',
    color: 'bg-[#4ECDC4]',
  },
  {
    tag: 'Suplementos',
    title: 'Creatina: mitos e verdades sobre o suplemento mais pesquisado do mundo',
    excerpt: 'A ciência explica o que a creatina faz (e o que não faz) pelo seu organismo. Entenda antes de suplementar.',
    date: 'Dez 2024',
    emoji: '💊',
    color: 'bg-[#1A2620]',
  },
  {
    tag: 'Saúde',
    title: 'Intolerância ao glúten vs. doença celíaca: quais as diferenças?',
    excerpt: 'Muita confusão existe entre os dois diagnósticos. Entenda os sintomas, as diferenças e o que comer em cada caso.',
    date: 'Nov 2024',
    emoji: '🔬',
    color: 'bg-[#74C69D]',
  },
  {
    tag: 'Lifestyle',
    title: '5 hábitos simples para tornar sua rotina mais saudável em 2025',
    excerpt: 'Pequenas mudanças que fazem grande diferença na sua saúde física e mental ao longo do tempo.',
    date: 'Out 2024',
    emoji: '✨',
    color: 'bg-[#3D2B1F]',
  },
]

export default function BlogPage() {
  return (
    <>
      <section className="bg-[#1A2620] pt-40 pb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 blob bg-[#74C69D]/20 blur-3xl opacity-30" />
        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#4ECDC4] mb-4">Conteúdo & Inspiração</p>
          <h1
            className="text-5xl md:text-6xl text-[#F8F4EC] font-light leading-tight mb-6"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Blog & <em className="text-[#4ECDC4]">Dicas</em>
          </h1>
          <p className="text-[#EAF4EE]/60 text-lg max-w-2xl mx-auto">
            Receitas, informações nutricionais, guias de bem-estar e as últimas novidades
            do universo da alimentação saudável.
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <article
                key={post.title}
                className="group bg-white rounded-2xl overflow-hidden border border-[#2D6A4F]/08 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                <div className={`${post.color} h-40 flex items-center justify-center`}>
                  <span className="text-6xl">{post.emoji}</span>
                </div>
                <div className="p-6">
                  <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#2D6A4F] bg-[#EAF4EE] rounded-full px-3 py-1 mb-3">
                    {post.tag}
                  </span>
                  <h2 className="font-semibold text-[#1A2620] mb-2 leading-snug group-hover:text-[#2D6A4F] transition-colors"
                    style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.15rem' }}>
                    {post.title}
                  </h2>
                  <p className="text-sm text-[#1A2620]/55 leading-relaxed mb-4">{post.excerpt}</p>
                  <p className="text-xs text-[#1A2620]/35">{post.date}</p>
                </div>
              </article>
            ))}
          </div>

          <p className="text-center text-sm text-[#1A2620]/40 mt-16">
            Mais artigos em breve · Siga a Prana no Instagram para novidades diárias
          </p>
        </div>
      </section>
    </>
  )
}
