'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Leaf,
  WheatOff,
  Droplet,
  Salad,
  Zap,
  Dumbbell,
  ChevronDown,
  Instagram,
  Facebook
} from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
}

export default function HomePage() {
  return (
    <div className="overflow-hidden selection:bg-[#A88573] selection:text-[#FCF9F2]">
      
      {/* ─── HERO ─────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center pt-24 pb-12">
        <Image
          src="/assets/images/site-images/hero-tree.png"
          alt="Prana Hero Background"
          fill
          className="object-cover z-0"
          priority
        />
        <div className="absolute inset-0 bg-black/35 z-0" />

        <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center w-full z-10">
          
          {/* Left: Text */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 border border-white/40 bg-white/15 backdrop-blur-sm rounded-full px-5 py-2 mb-8">
              <span className="w-2 h-2 rounded-full bg-[#c83a33] animate-pulse" />
              <span className="text-xs text-white font-semibold tracking-widest uppercase">
                Barrashopping · Desde 1994
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-6xl sm:text-7xl lg:text-8xl text-white leading-[1.05] mb-8 font-serif drop-shadow-[0_4px_16px_rgba(0,0,0,0.5)]"
            >
              Saúde que<br />
              <em className="not-italic bg-clip-text text-transparent bg-gradient-to-r from-[#741b18] to-[#9b241f]">
                transforma
              </em><br />
              sua vida.
            </motion.h1>

            <motion.p variants={fadeUp} className="text-white/90 text-lg sm:text-xl font-light leading-relaxed mb-10 max-w-lg drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
              Orgânicos, funcionais e os melhores suplementos. 
              Uma curadoria de excelência para quem exige resultados e qualidade superior.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-5">
              <Link
                href="/produtos"
                className="inline-flex items-center gap-3 bg-[#480e0d] text-[#FCF9F2] px-8 py-4 rounded-full font-semibold hover:bg-[#7a1a17] hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(72,14,13,0.3)]"
              >
                Explorar Coleção
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/sobre"
                className="inline-flex items-center gap-3 border border-white/80 text-white px-8 py-4 rounded-full font-medium hover:bg-white hover:text-[#741b18] transition-all duration-300"
              >
                Nossa Essência
              </Link>
            </motion.div>
          </motion.div>

          {/* Right: Portrait Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="relative hidden lg:flex lg:justify-end lg:items-center w-full ml-auto cursor-default"
          >
            <div className="relative border border-[#FAFAF8]/30 rounded-[2rem] overflow-hidden w-fit shadow-[0_0_60px_rgba(0,0,0,0.4)] bg-black/10 backdrop-blur-sm p-2">
              <Image
                src="/assets/images/site-images/hero-portrait.png"
                alt="Prana Produtos Naturais"
                width={440}
                height={550}
                className="object-cover rounded-[2rem] w-[360px] xl:w-[440px] h-auto"
                priority
              />
            </div>
          </motion.div>

        </div>

        {/* Scroll Indicator */}
        <motion.button
          onClick={() => {
            const el = document.getElementById('filosofia')
            if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' })
          }}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white hover:text-[#c83a33] transition-colors cursor-pointer z-10"
          aria-label="Rolar para baixo"
        >
          <ChevronDown className="w-8 h-8" />
        </motion.button>
      </section>

      {/* ─── STATS BAR ────────────────────────────────────── */}
      <section id="stats" className="border-y border-[#A88573]/20 bg-white/60 backdrop-blur-sm py-10 relative">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 divide-x-0 lg:divide-x divide-[#A88573]/10 text-center lg:text-left">
            {[
              { num: '44+', label: 'anos de história' },
              { num: '1000+', label: 'produtos premium' },
              { num: 'Rio', label: 'de Janeiro' },
              { num: '100%', label: 'Qualidade' }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col px-0 lg:px-12 items-center lg:items-start justify-center">
                <span className="text-4xl sm:text-5xl font-bold text-[#A88573] tracking-tight mb-2 font-serif">
                  {stat.num}
                </span>
                <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#480e0d]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FILOSOFIA BANNER ───────────────────────────────── */}
      <section id="filosofia" className="relative w-full h-[520px] flex items-center justify-center overflow-hidden">
        <Image
          src="/assets/images/site-images/hero-landscape.png"
          alt="Nossa Filosofia"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30 z-0" />
        
        <div className="relative z-10 text-center px-6">
          <p className="text-white text-xs font-bold tracking-[0.4em] uppercase mb-4 bg-[#741b18]/70 backdrop-blur-sm px-4 py-1.5 rounded-full inline-block border border-white/20">Nossa Filosofia</p>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-7xl text-[#F5F0E8] font-serif leading-tight mb-8">
              "Que seu alimento <br className="hidden md:block" />
              seja seu remédio."
            </h2>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-[1px] bg-[#F5F0E8]/50" />
              <p className="text-[#F5F0E8]/80 tracking-[0.3em] uppercase text-sm font-semibold">
                — Hipócrates
              </p>
              <div className="w-12 h-[1px] bg-[#F5F0E8]/50" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── CATEGORIES ─────────────────────────────────────── */}
      <section className="py-32 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl text-[#741b18] font-serif">
              O que você encontra aqui
            </h2>
            <div className="w-24 h-[1px] bg-[#741b18]/40 mx-auto mt-8" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Leaf, title: 'Orgânicos', desc: 'Certificados e limpos para uma nutrição pura em essência.' },
              { icon: Dumbbell, title: 'Suplementos', desc: 'Ativos concentrados de alta absorção e procedência.' },
              { icon: Salad, title: 'Veganos', desc: 'Vida baseada em plantas, sem abrir mão do prazer.' },
              { icon: WheatOff, title: 'Sem Glúten', desc: 'Produção rigorosa para quem precisa de segurança máxima.' },
              { icon: Droplet, title: 'Sem Lactose', desc: 'Alternativas inteligentes e leves para o seu corpo.' },
              { icon: Zap, title: 'Funcionais', desc: 'Superalimentos projetados para otimizar a sua rotina.' },
            ].map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -4, boxShadow: '0 12px 30px rgba(116,27,24,0.12)', transition: { duration: 0.25 } }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group bg-white/80 backdrop-blur-sm border border-[#741b18]/15 p-10 hover:border-[#741b18]/40 hover:shadow-xl transition-all duration-300 rounded-[30px] cursor-default"
              >
                <div className="mb-6 w-14 h-14 rounded-2xl border border-[#741b18]/20 bg-[#741b18]/5 flex items-center justify-center text-[#741b18] group-hover:bg-[#741b18] group-hover:text-white transition-colors duration-500">
                  <c.icon className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl text-[#741b18] mb-4 font-serif">
                  {c.title}
                </h3>
                <p className="text-[#5a5a5a] leading-relaxed font-light">
                  {c.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* ─── ABOUT SNIPPET ──────────────────────────────────── */}
      <section className="py-32 relative">
        <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="w-12 h-1 bg-[#480e0d] mb-8" />
            <h2 className="text-4xl md:text-5xl lg:text-7xl text-[#3E2723] leading-tight mb-8 italic font-serif">
              "Mais de quatro décadas <br />
              <span className="text-[#A88573]">cuidando da sua essência."</span>
            </h2>
            <p className="text-[#3E2723]/70 text-lg leading-relaxed mb-6 font-light">
              Na realidade, a Prana existe desde 1980, com a nossa primeira loja no Leblon (que funcionou até 2015). 
              Nascemos com o propósito de ser mais que uma loja: um ponto de encontro de 
              pessoas que acreditam que a natureza oferece tudo o que precisamos.
            </p>
            <p className="text-[#3E2723]/70 text-lg leading-relaxed mb-10 font-light">
              Nossa curadoria segue o rigor da ciência da nutrição moderna aliado com a sabedoria ancestral, 
              entregando produtos de ponta no Barrashopping (desde 1994).
            </p>
            <Link
              href="/sobre"
              className="inline-flex items-center gap-3 text-[#A88573] uppercase tracking-widest text-sm font-semibold hover:text-[#480e0d] transition-colors"
            >
              Conheça Nossa História <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="flex flex-col gap-6">
            <div className="border border-[#A88573]/30 rounded-2xl overflow-hidden relative">
              <Image
                src={`/assets/images/site-images/about-store.png`}
                alt="Prana Produtos Naturais Loja Física"
                width={600}
                height={400}
                unoptimized
                className="w-full h-auto object-cover rounded-2xl hover:scale-105 transition-transform duration-700"
              />
            </div>
            <p className="text-center text-[#A88573] text-sm uppercase tracking-widest font-medium mb-2">Prana Produtos Naturais · Barrashopping</p>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white rounded-[30px] p-6 flex flex-col items-center justify-center text-center border border-[#A88573]/40 hover:-translate-y-2 transition-transform duration-500 group">
                <span className="text-5xl text-[#C4A18F] mb-2 group-hover:scale-110 transition-transform font-serif">44+</span>
                <span className="text-[#3E2723]/50 text-xs uppercase tracking-widest">anos de história</span>
              </div>
              <div className="bg-white rounded-[30px] p-6 flex flex-col items-center justify-center text-center border border-[#A88573]/40 hover:-translate-y-2 transition-transform duration-500 group">
                <span className="text-5xl text-[#480e0d] mb-2 group-hover:scale-110 transition-transform font-serif">1k+</span>
                <span className="text-[#3E2723]/50 text-xs uppercase tracking-widest">produtos premium</span>
              </div>
              <div className="col-span-2 bg-gradient-to-br from-white to-[#FCF9F2] rounded-[30px] p-6 flex items-center justify-center text-center border border-[#480e0d]/20 hover:border-[#480e0d]/50 transition-colors">
                <div>
                  <span className="text-2xl text-[#3E2723] mb-1 block font-serif">Desde 1980</span>
                  <span className="text-[#3E2723]/50 text-xs uppercase tracking-widest">Saúde & Bem-Estar</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHATSAPP CTA ───────────────────────────────────── */}
      <section className="py-40 bg-[#FCF9F2] relative">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-light mb-10 text-[#480e0d] leading-snug font-serif">
            Atendimento Exclusivo<br />no seu WhatsApp
          </h2>
          <p className="text-[#3E2723]/60 text-xl font-light mb-16">
            Nossos consultores estão disponíveis para criar uma curadoria personalizada e tirar todas as suas dúvidas.
          </p>
          
          <div className="bg-[#FCF9F2] border border-[#A88573]/30 p-10 rounded-[40px] inline-flex flex-col items-center shadow-[0_0_50px_rgba(168,133,115,0.1)]">
            <div className="bg-white p-4 rounded-3xl mb-10 shadow-lg">
              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=https://wa.me/5521967735442&color=480e0d&bgcolor=FFFFFF"
                alt="WhatsApp QR Code"
                className="w-40 h-40"
              />
            </div>
            <a
              href="https://wa.me/5521967735442"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white px-12 py-5 rounded-full text-xl font-bold hover:scale-105 hover:bg-[#128C7E] hover:shadow-[0_0_30px_rgba(37,211,102,0.4)] transition-all duration-300 w-full sm:w-auto text-center flex items-center gap-3"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.554 4.118 1.528 5.849L0 24l6.335-1.507A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.796 9.796 0 01-5.126-1.447l-.367-.218-3.761.895.924-3.667-.239-.38A9.775 9.775 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
              </svg>
              Iniciar Conversa
            </a>
          </div>

          <div className="flex justify-center gap-8 mt-16">
            <a href="https://www.instagram.com/pranabarraprodutosnaturais" className="text-[#3E2723]/40 hover:text-[#A88573] transition-colors">
              <Instagram className="w-8 h-8" strokeWidth={1.5} />
            </a>
            <a href="https://www.facebook.com/pranaprodutosnaturais" className="text-[#3E2723]/40 hover:text-[#A88573] transition-colors">
              <Facebook className="w-8 h-8" strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </section>

      {/* ─── MAP ────────────────────────────────────────────── */}
      <section className="py-32">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-[#A88573] font-serif">
              Nosso Endereço
            </h2>
            <div className="w-16 h-[1px] bg-[#480e0d] mx-auto mt-6" />
          </div>
          <div className="rounded-[40px] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,1)] border border-[#A88573]/40 h-[500px] relative filter grayscale-[20%] sepia-[20%] hue-rotate-180 brightness-[80%] contrast-[120%] hover:filter-none transition-all duration-1000">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.2!2d-43.3650!3d-22.9990!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bda2f0a51ccdff7%3A0x2c3f3c!2sBarraShopping!5e0!3m2!1spt!2sbr!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="BarraShopping"
            />
          </div>
          <p className="text-center text-[#3E2723]/50 mt-10 tracking-widest text-sm">
            Av. das Américas 4666, loja 141, Barra Shopping (Mercado Praça XV), Barra da Tijuca, Rio de Janeiro · 22640-102
          </p>
        </div>
      </section>

    </div>
  )
}
