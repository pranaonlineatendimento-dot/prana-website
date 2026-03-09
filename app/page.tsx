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
    <div className="bg-[#0A0F0D] overflow-hidden selection:bg-[#C9A84C] selection:text-[#0A0F0D]">
      
      {/* ─── HERO ─────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center pt-24 pb-12">
        {/* Glow Effects */}
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-[#4ECDC4]/10 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#C9A84C]/10 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center w-full z-10">
          
          {/* Left: Text */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 border border-[#C9A84C]/40 bg-[#111815] rounded-full px-4 py-1.5 mb-8">
              <span className="w-2 h-2 rounded-full bg-[#4ECDC4] animate-pulse" />
              <span className="text-xs text-[#E8C96A] font-medium tracking-widest uppercase">
                Barrashopping · Desde 1994
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-6xl sm:text-7xl lg:text-8xl text-[#F5F0E8] leading-[1.05] mb-8 font-serif"
            >
              Saúde que<br />
              <em className="not-italic bg-clip-text text-transparent bg-gradient-to-r from-[#4ECDC4] to-[#2DD4BF]">
                transforma
              </em><br />
              sua vida.
            </motion.h1>

            <motion.p variants={fadeUp} className="text-[#F5F0E8]/70 text-lg sm:text-xl font-light leading-relaxed mb-10 max-w-lg">
              Orgânicos, funcionais e os melhores suplementos. 
              Uma curadoria de excelência para quem exige resultados e qualidade superior.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-5">
              <Link
                href="/produtos"
                className="inline-flex items-center gap-3 bg-[#4ECDC4] text-[#0A0F0D] px-8 py-4 rounded-full font-semibold hover:bg-[#2DD4BF] hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(78,205,196,0.3)]"
              >
                Explorar Coleção
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/sobre"
                className="inline-flex items-center gap-3 border border-[#C9A84C] text-[#C9A84C] px-8 py-4 rounded-full font-medium hover:bg-[#C9A84C] hover:text-[#0A0F0D] transition-all duration-300"
              >
                Nossa Essência
              </Link>
            </motion.div>
          </motion.div>

          {/* Right: Collage */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="relative h-[600px] hidden lg:block"
          >
            {/* Main Center Image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-96 z-20 hover:z-50 transition-all duration-500 hover:scale-105">
              <div className="w-full h-full overflow-visible relative rotate-[-3deg]">
                <Image
                  src="/assets/images/products/fresh-whey-01.png"
                  alt="Fresh Whey"
                  fill
                  className="object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)] scale-125 hover:scale-150 transition-transform duration-700 pointer-events-none"
                />
              </div>
            </div>

            {/* Top Right Image */}
            <div className="absolute top-12 right-0 w-56 h-72 z-10 hover:z-50 transition-all duration-500 hover:scale-105">
              <div className="w-full h-full overflow-visible relative rotate-[4deg]">
                <Image
                  src="/assets/images/products/granola-01.png"
                  alt="Granola Premium"
                  fill
                  className="object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.6)] scale-110 hover:scale-125 transition-transform duration-700 pointer-events-none"
                />
              </div>
            </div>

            {/* Bottom Left Image */}
            <div className="absolute bottom-10 left-10 w-48 h-56 z-30 hover:z-50 transition-all duration-500 hover:scale-105">
              <div className="w-full h-full overflow-visible relative rotate-[-2deg]">
                <Image
                  src="/assets/images/products/01-dha-tg-liquid-e-pote-1.png"
                  alt="DHA Liquid"
                  fill
                  className="object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.6)] scale-110 hover:scale-125 transition-transform duration-700 pointer-events-none"
                />
              </div>
            </div>
          </motion.div>

        </div>

        {/* Scroll Indicator */}
        <motion.button
          onClick={() => document.getElementById('stats')?.scrollIntoView({ behavior: 'smooth' })}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[#C9A84C]/50 hover:text-[#C9A84C] transition-colors cursor-pointer"
          aria-label="Rolar para baixo"
        >
          <ChevronDown className="w-8 h-8" />
        </motion.button>
      </section>

      {/* ─── STATS BAR ────────────────────────────────────── */}
      <section id="stats" className="border-y border-[#C9A84C]/10 bg-[#111815]/50 backdrop-blur-sm backdrop-saturate-150 py-10 relative z-20">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 divide-x-0 lg:divide-x divide-[#C9A84C]/10 text-center lg:text-left">
            {[
              { num: '30', label: 'anos de tradição' },
              { num: '1000+', label: 'produtos premium' },
              { num: 'Rio', label: 'de Janeiro' },
              { num: 'Barra', label: 'Shopping' }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col px-0 lg:px-12 items-center lg:items-start justify-center">
                <span className="text-4xl sm:text-5xl font-bold text-[#C9A84C] tracking-tight mb-2 font-serif">
                  {stat.num}
                </span>
                <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#4ECDC4]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURED PRODUCTS ────────────────────────────── */}
      <section className="py-32 relative z-20">
        <div className="max-w-[1400px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
          >
            <div>
              <p className="text-[#C9A84C] text-sm uppercase tracking-[0.2em] mb-4 font-semibold">Exclusividade</p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#F5F0E8] font-serif">
                Produtos em Destaque
              </h2>
            </div>
            <p className="text-[#F5F0E8]/60 max-w-xs text-sm md:text-md">
              Uma seleção especial contendo a máxima qualidade para o seu bem-estar.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { img: 'cookies-01.png', name: 'Cookies Integrais', cat: 'Integral' },
              { img: 'fresh-whey-01.png', name: 'Fresh Whey', cat: 'Suplemento' },
              { img: 'granola-01.png', name: 'Granola Artesanal', cat: 'Orgânico' },
              { img: 'magnesio-01.png', name: 'Magnésio', cat: 'Suplemento' },
              { img: 'mahta-01.png', name: 'Mahta', cat: 'Funcional' },
              { img: '01-Kombucha-Refrigerada-400ml-6-sabores-20un.png', name: 'Kombucha Artesanal', cat: 'Bebidas' },
              { img: '01-crunch-gold-snack.png', name: 'Crunch Gold', cat: 'Proteico' },
              { img: '01-colageno_hidrolisado_500mg_120caps_qualynutri.png', name: 'Colágeno', cat: 'Nutrição' },
            ].map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="h-full"
              >
                <Link
                  href="/produtos"
                  className="group relative bg-[#111815] rounded-3xl border border-[#C9A84C]/10 overflow-hidden hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(201,168,76,0.15)] flex flex-col pt-8 transition-all duration-500 hover:border-[#C9A84C]/50 h-full"
                >
                  <div className="aspect-square relative overflow-visible w-full px-8 flex items-center justify-center">
                    <Image
                      src={`/assets/images/products/${p.img}`}
                      alt={p.name}
                      width={400}
                      height={400}
                      className="object-contain w-full h-full group-hover:scale-110 group-hover:-translate-y-4 transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] drop-shadow-2xl"
                    />
                  </div>
                  <div className="p-6 relative z-10 flex flex-col items-center justify-end flex-grow mt-4">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#4ECDC4] mb-3 px-3 py-1 bg-[#0A0F0D] rounded-full border border-[#4ECDC4]/20">
                      {p.cat}
                    </span>
                    <h3 className="text-[#F5F0E8] text-lg font-medium text-center">{p.name}</h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/produtos"
              className="inline-flex items-center gap-2 text-[#C9A84C] font-semibold text-lg hover:text-[#E8C96A] transition-colors"
            >
              Ver Galeria Completa <ArrowRight className="w-5 h-5 transition-transform hover:translate-x-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── CATEGORIES ─────────────────────────────────────── */}
      <section className="py-32 bg-[#111815] border-y border-[#C9A84C]/10 relative overflow-hidden">
        {/* Decorative thin lines */}
        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'linear-gradient(#C9A84C 1px, transparent 1px), linear-gradient(90deg, #C9A84C 1px, transparent 1px)', backgroundSize: '120px 120px' }}></div>

        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl text-[#F5F0E8] font-serif">
              O que você encontra aqui
            </h2>
            <div className="w-24 h-[1px] bg-[#C9A84C] mx-auto mt-8" />
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
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group bg-[#0A0F0D] border border-[#C9A84C]/20 p-10 hover:border-[#4ECDC4] transition-colors duration-500 rounded-[30px]"
              >
                <div className="mb-6 w-14 h-14 rounded-2xl border border-[#4ECDC4]/30 bg-[#4ECDC4]/5 flex items-center justify-center text-[#4ECDC4] group-hover:bg-[#4ECDC4] group-hover:text-[#0A0F0D] transition-colors duration-500">
                  <c.icon className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl text-[#C9A84C] mb-4 font-serif">
                  {c.title}
                </h3>
                <p className="text-[#F5F0E8]/60 leading-relaxed font-light">
                  {c.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── QUOTE HIPÓCRATES ───────────────────────────────── */}
      <section className="py-32 bg-[#0A0F0D] relative overflow-hidden border-y border-[#C9A84C]/10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C9A84C]/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-[1000px] mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-7xl text-[#F5F0E8] font-serif leading-[1.2] mb-8">
              "Que seu alimento <br />
              seja seu <span className="text-[#C9A84C] italic">remédio</span>."
            </h2>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-[1px] bg-[#4ECDC4]" />
              <p className="text-[#4ECDC4] tracking-[0.3em] uppercase text-sm font-semibold">
                Hipócrates
              </p>
              <div className="w-12 h-[1px] bg-[#4ECDC4]" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── ABOUT SNIPPET ──────────────────────────────────── */}
      <section className="py-32 relative">
        <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="w-12 h-1 bg-[#4ECDC4] mb-8" />
            <h2 className="text-4xl md:text-5xl lg:text-7xl text-[#F5F0E8] leading-tight mb-8 italic font-serif">
              "Três décadas <br />
              <span className="text-[#C9A84C]">cuidando da sua essência."</span>
            </h2>
            <p className="text-[#F5F0E8]/70 text-lg leading-relaxed mb-6 font-light">
              Nascemos em 1994, com o propósito de ser mais que uma loja: um ponto de encontro de 
              pessoas que acreditam que a natureza oferece tudo o que precisamos.
            </p>
            <p className="text-[#F5F0E8]/70 text-lg leading-relaxed mb-10 font-light">
              Nossa curadoria segue o rigor da ciência da nutrição moderna aliado com a sabedoria ancestral, 
              entregando produtos de ponta no Barrashopping.
            </p>
            <Link
              href="/sobre"
              className="inline-flex items-center gap-3 text-[#C9A84C] uppercase tracking-widest text-sm font-semibold hover:text-[#4ECDC4] transition-colors"
            >
              Conheça Nossa História <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-[#111815] rounded-[40px] p-10 flex flex-col items-center justify-center text-center border border-[#C9A84C]/20 hover:-translate-y-2 transition-transform duration-500 group">
              <span className="text-6xl text-[#E8C96A] mb-4 group-hover:scale-110 transition-transform font-serif">30+</span>
              <span className="text-[#F5F0E8]/50 text-sm uppercase tracking-widest">anos de experiência</span>
            </div>
            <div className="bg-[#111815] rounded-[40px] p-10 flex flex-col items-center justify-center text-center border border-[#C9A84C]/20 hover:-translate-y-2 transition-transform duration-500 group">
              <span className="text-6xl text-[#4ECDC4] mb-4 group-hover:scale-110 transition-transform font-serif">1k+</span>
              <span className="text-[#F5F0E8]/50 text-sm uppercase tracking-widest">produtos premium</span>
            </div>
            <div className="col-span-2 bg-gradient-to-br from-[#111815] to-[#0A0F0D] rounded-[40px] p-10 flex items-center justify-center text-center border border-[#4ECDC4]/20 hover:border-[#4ECDC4]/50 transition-colors">
              <div>
                <span className="text-3xl text-[#F5F0E8] mb-2 block font-serif">Barrashopping Rio</span>
                <span className="text-[#F5F0E8]/50 text-sm uppercase tracking-widest">Desde 1994</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHATSAPP CTA ───────────────────────────────────── */}
      <section className="py-40 bg-[#111815] relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F0D] via-transparent to-[#0A0F0D] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-light mb-10 text-transparent bg-clip-text bg-gradient-to-r from-[#4ECDC4] via-[#F5F0E8] to-[#C9A84C] leading-snug font-serif">
            Atendimento Exclusivo<br />no seu WhatsApp
          </h2>
          <p className="text-[#F5F0E8]/60 text-xl font-light mb-16">
            Nossos consultores estão disponíveis para criar uma curadoria personalizada e tirar todas as suas dúvidas.
          </p>
          
          <div className="bg-[#0A0F0D] border border-[#C9A84C]/30 p-10 rounded-[40px] inline-flex flex-col items-center shadow-[0_0_50px_rgba(201,168,76,0.1)]">
            <div className="bg-white p-4 rounded-3xl mb-10 shadow-lg">
              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=https://wa.me/5521924319047&color=0A0F0D&bgcolor=FFFFFF"
                alt="WhatsApp QR Code"
                className="w-40 h-40"
              />
            </div>
            <a
              href="https://wa.me/5521924319047"
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
            <a href="https://www.instagram.com/pranaprodutosnaturais" className="text-[#F5F0E8]/40 hover:text-[#C9A84C] transition-colors">
              <Instagram className="w-8 h-8" strokeWidth={1.5} />
            </a>
            <a href="https://www.facebook.com/pranaprodutosnaturais" className="text-[#F5F0E8]/40 hover:text-[#C9A84C] transition-colors">
              <Facebook className="w-8 h-8" strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </section>

      {/* ─── MAP ────────────────────────────────────────────── */}
      <section className="py-32">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-[#C9A84C] font-serif">
              Nosso Endereço
            </h2>
            <div className="w-16 h-[1px] bg-[#4ECDC4] mx-auto mt-6" />
          </div>
          <div className="rounded-[40px] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,1)] border border-[#C9A84C]/20 h-[500px] relative filter grayscale-[20%] sepia-[20%] hue-rotate-180 brightness-[80%] contrast-[120%] hover:filter-none transition-all duration-1000">
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
          <p className="text-center text-[#F5F0E8]/50 mt-10 tracking-widest text-sm">
            AV. DAS AMÉRICAS, 4666 — LOJA 141 · BARRASHOPPING · RIO DE JANEIRO, RJ · 22640-102
          </p>
        </div>
      </section>

    </div>
  )
}
