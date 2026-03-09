import Link from 'next/link'
import { ArrowRight, Leaf, Heart, ShieldCheck, Sparkles, MapPin } from 'lucide-react'

const categories = [
  {
    icon: '🌿',
    title: 'Orgânicos',
    desc: 'Frutas, legumes, cereais e processados certificados orgânicos.',
    color: 'from-[#2D6A4F]/10 to-[#74C69D]/20',
    border: 'border-[#2D6A4F]/20',
  },
  {
    icon: '💪',
    title: 'Suplementos',
    desc: 'Vitaminas, minerais, proteínas e funcionais para sua performance.',
    color: 'from-[#4ECDC4]/10 to-[#4ECDC4]/20',
    border: 'border-[#4ECDC4]/20',
  },
  {
    icon: '🌱',
    title: 'Veganos',
    desc: 'Produtos 100% de origem vegetal, sem crueldade animal.',
    color: 'from-[#74C69D]/10 to-[#2D6A4F]/20',
    border: 'border-[#74C69D]/20',
  },
  {
    icon: '🍞',
    title: 'Sem Glúten',
    desc: 'Pães, biscoitos e massas para celíacos e sensíveis ao glúten.',
    color: 'from-[#C9A84C]/10 to-[#C9A84C]/20',
    border: 'border-[#C9A84C]/20',
  },
  {
    icon: '🥛',
    title: 'Sem Lactose',
    desc: 'Leites vegetais, queijos e iogurtes livres de lactose.',
    color: 'from-[#4ECDC4]/10 to-[#2D6A4F]/15',
    border: 'border-[#4ECDC4]/20',
  },
  {
    icon: '❄️',
    title: 'Congelados',
    desc: 'Refeições prontas saudáveis para o seu dia a dia.',
    color: 'from-[#2D6A4F]/10 to-[#4ECDC4]/15',
    border: 'border-[#2D6A4F]/15',
  },
]

const features = [
  {
    icon: <Leaf className="w-5 h-5" />,
    title: '30 anos de história',
    desc: 'Desde 1994 cuidando da saúde dos cariocas no Barrashopping.',
  },
  {
    icon: <ShieldCheck className="w-5 h-5" />,
    title: 'Produtos certificados',
    desc: 'Selecionamos só marcas confiáveis e com procedência garantida.',
  },
  {
    icon: <Heart className="w-5 h-5" />,
    title: 'Atendimento humano',
    desc: 'Uma equipe apaixonada por bem-estar pronta para te orientar.',
  },
  {
    icon: <Sparkles className="w-5 h-5" />,
    title: 'Sempre renovando',
    desc: 'Novidades no mix toda semana — tendências do mercado natural.',
  },
]

export default function HomePage() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#1A2620]">
        {/* Background decorative blobs */}
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] blob bg-[#2D6A4F]/30 blur-3xl opacity-40" />
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] blob bg-[#4ECDC4]/20 blur-3xl opacity-30" />

        {/* Subtle leaf texture */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5 Q45 20 30 35 Q15 20 30 5Z' fill='%234ECDC4' opacity='0.5'/%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px',
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20 grid md:grid-cols-2 gap-16 items-center">
          <div>
            {/* Tag */}
            <div className="inline-flex items-center gap-2 bg-[#2D6A4F]/30 border border-[#4ECDC4]/20 rounded-full px-4 py-1.5 mb-8">
              <MapPin className="w-3 h-3 text-[#4ECDC4]" />
              <span className="text-xs text-[#4ECDC4] font-medium tracking-wider uppercase">
                Barrashopping · Loja 141
              </span>
            </div>

            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-light text-[#F8F4EC] leading-[1.1] mb-6"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              Saúde que
              <br />
              <em className="text-[#4ECDC4] not-italic font-semibold">
                transforma
              </em>
              <br />
              sua vida.
            </h1>

            <p className="text-[#EAF4EE]/60 text-lg leading-relaxed mb-10 max-w-md">
              Orgânicos, integrais, veganos, suplementos e muito mais.
              Há 30 anos levando saúde e bem-estar para o Rio de Janeiro.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/produtos"
                className="inline-flex items-center gap-2 bg-[#4ECDC4] text-[#1A2620] px-7 py-3.5 rounded-full font-semibold hover:bg-[#74C69D] transition-all duration-300 shadow-lg shadow-[#4ECDC4]/20"
              >
                Ver produtos
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/sobre"
                className="inline-flex items-center gap-2 border border-[#EAF4EE]/20 text-[#EAF4EE] px-7 py-3.5 rounded-full font-medium hover:border-[#4ECDC4] hover:text-[#4ECDC4] transition-all duration-300"
              >
                Nossa história
              </Link>
            </div>
          </div>

          {/* Right side — decorative card */}
          <div className="hidden md:flex justify-center">
            <div className="relative">
              {/* Main card */}
              <div className="w-72 h-80 bg-gradient-to-br from-[#2D6A4F] to-[#1A2620] rounded-3xl border border-[#4ECDC4]/20 flex flex-col items-center justify-center gap-4 shadow-2xl">
                <div className="text-7xl">🌿</div>
                <p
                  className="text-2xl text-[#F8F4EC] font-light"
                  style={{ fontFamily: 'Cormorant Garamond, serif' }}
                >
                  Desde 1994
                </p>
                <p className="text-sm text-[#EAF4EE]/50">no Barrashopping</p>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-5 -right-5 bg-[#4ECDC4] text-[#1A2620] rounded-2xl px-4 py-3 shadow-xl">
                <p className="text-xs font-semibold">+ de 1000</p>
                <p className="text-xs">produtos naturais</p>
              </div>
              <div className="absolute -top-5 -left-5 bg-[#C9A84C] text-[#1A2620] rounded-2xl px-4 py-3 shadow-xl">
                <p className="text-xs font-semibold">30 anos</p>
                <p className="text-xs">de tradição</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0 wave-divider">
          <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#F8F4EC" />
          </svg>
        </div>
      </section>

      {/* ─── FEATURES BAR ─────────────────────────────────── */}
      <section className="bg-[#F8F4EC] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f) => (
              <div key={f.title} className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-[#2D6A4F]/10 flex items-center justify-center text-[#2D6A4F] group-hover:bg-[#2D6A4F] group-hover:text-white transition-all duration-300 flex-shrink-0">
                  {f.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-[#1A2620] mb-1">{f.title}</h3>
                  <p className="text-sm text-[#1A2620]/55 leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CATEGORIES ────────────────────────────────────── */}
      <section className="bg-[#EAF4EE] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2D6A4F] mb-3">
              O que você encontra aqui
            </p>
            <h2
              className="text-4xl md:text-5xl text-[#1A2620] font-light"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              Categorias
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {categories.map((cat) => (
              <Link
                key={cat.title}
                href="/produtos"
                className={`bg-gradient-to-br ${cat.color} border ${cat.border} rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group`}
              >
                <span className="text-4xl block mb-4">{cat.icon}</span>
                <h3 className="text-lg font-semibold text-[#1A2620] mb-2 group-hover:text-[#2D6A4F] transition-colors">
                  {cat.title}
                </h3>
                <p className="text-sm text-[#1A2620]/60 leading-relaxed">{cat.desc}</p>
                <div className="mt-4 flex items-center gap-1 text-xs font-medium text-[#2D6A4F] opacity-0 group-hover:opacity-100 transition-opacity">
                  Ver produtos <ArrowRight className="w-3 h-3" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ABOUT SNIPPET ─────────────────────────────────── */}
      <section className="bg-[#F8F4EC] py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2D6A4F] mb-4">
              Nossa história
            </p>
            <h2
              className="text-4xl md:text-5xl text-[#1A2620] font-light mb-6 leading-[1.2]"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              Três décadas
              <br />
              <em className="text-[#2D6A4F]">cuidando de você</em>
            </h2>
            <p className="text-[#1A2620]/60 leading-relaxed mb-6">
              Fundada em 1994, a Prana foi uma das primeiras lojas de produtos naturais do Rio de Janeiro.
              Ao longo de 30 anos, construímos uma curadoria rigorosa de produtos orgânicos, integrais,
              veganos e funcionais — sempre com foco no bem-estar real das pessoas.
            </p>
            <p className="text-[#1A2620]/60 leading-relaxed mb-8">
              Estamos no Barrashopping, Loja 141, prontos para orientar você na escolha dos melhores
              produtos para a sua saúde e estilo de vida.
            </p>
            <Link
              href="/sobre"
              className="inline-flex items-center gap-2 text-[#2D6A4F] font-semibold hover-line"
            >
              Conhecer nossa história <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Visual side */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#2D6A4F] rounded-2xl p-8 flex flex-col items-center justify-center text-center">
              <span
                className="text-5xl font-bold text-[#4ECDC4]"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                30+
              </span>
              <p className="text-sm text-[#EAF4EE]/70 mt-2">anos de tradição</p>
            </div>
            <div className="bg-[#4ECDC4]/10 border border-[#4ECDC4]/20 rounded-2xl p-8 flex flex-col items-center justify-center text-center">
              <span
                className="text-5xl font-bold text-[#2D6A4F]"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                1000+
              </span>
              <p className="text-sm text-[#1A2620]/60 mt-2">produtos selecionados</p>
            </div>
            <div className="bg-[#C9A84C]/10 border border-[#C9A84C]/20 rounded-2xl p-8 flex flex-col items-center justify-center text-center col-span-2">
              <span
                className="text-4xl font-bold text-[#C9A84C]"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                Barrashopping
              </span>
              <p className="text-sm text-[#1A2620]/60 mt-2">Loja 141 · Rio de Janeiro, RJ</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SOCIAL / WHATSAPP CTA ─────────────────────────── */}
      <section className="bg-[#2D6A4F] py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 5 Q60 25 40 45 Q20 25 40 5Z' fill='%23F8F4EC'/%3E%3C/svg%3E")`,
            backgroundSize: '80px 80px',
          }}
        />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <h2
            className="text-4xl md:text-5xl text-[#F8F4EC] font-light mb-6"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Fale com a gente pelo WhatsApp
          </h2>
          <p className="text-[#EAF4EE]/70 text-lg mb-10">
            Tire dúvidas, peça indicações de produtos ou simplesmente diga oi.
            Nossa equipe está aqui pra você.
          </p>
          <a
            href="https://wa.me/5521924319047"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#F8F4EC] text-[#2D6A4F] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#4ECDC4] transition-all duration-300 shadow-xl"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.554 4.118 1.528 5.849L0 24l6.335-1.507A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.796 9.796 0 01-5.126-1.447l-.367-.218-3.761.895.924-3.667-.239-.38A9.775 9.775 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
            </svg>
            Abrir WhatsApp
          </a>
          <div className="flex justify-center gap-6 mt-12">
            <a
              href="https://www.instagram.com/pranaprodutosnaturais"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#EAF4EE]/70 hover:text-[#EAF4EE] transition-colors text-sm"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Instagram
            </a>
            <a
              href="https://www.facebook.com/pranaprodutosnaturais"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#EAF4EE]/70 hover:text-[#EAF4EE] transition-colors text-sm"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              Facebook
            </a>
          </div>
        </div>
      </section>

      {/* ─── MAP ───────────────────────────────────────────── */}
      <section className="bg-[#F8F4EC] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2D6A4F] mb-3">Como chegar</p>
            <h2
              className="text-3xl md:text-4xl text-[#1A2620] font-light"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              Nos encontre no Barrashopping
            </h2>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-xl border border-[#2D6A4F]/10 h-80">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.2!2d-43.3650!3d-22.9990!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bda2f0a51ccdff7%3A0x2c3f3c!2sBarraShopping!5e0!3m2!1spt!2sbr!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Prana Produtos Naturais no Barrashopping"
            />
          </div>
          <p className="text-center text-sm text-[#1A2620]/50 mt-4">
            Av. das Américas, 4666 — Loja 141 · Barrashopping · Rio de Janeiro, RJ · CEP 22640-102
          </p>
        </div>
      </section>
    </>
  )
}
