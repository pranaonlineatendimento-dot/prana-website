'use client'

import { motion } from 'framer-motion'
import { Award, Leaf, Heart, Users } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
}

const timelineItems = [
  {
    year: '1980',
    title: 'O Início',
    desc: 'Abertura da primeira loja Prana, no Leblon, Rio de Janeiro.',
  },
  {
    year: '1994',
    title: 'Expansão',
    desc: 'Expansão com nova loja no Barrashopping.',
  },
  {
    year: '2015',
    title: 'Veganos & Sem Glúten',
    desc: 'Respondendo às novas demandas e alergias alimentares, criamos seções exclusivas com pureza garantida.',
  },
  {
    year: 'Hoje',
    title: 'Excelência Premium',
    desc: 'Referência em bem-estar no Rio de Janeiro, com curadoria rigorosa de mais de 1000 produtos essenciais.',
  },
]

const values = [
  { icon: Award, title: 'Excelência', desc: 'Apenas as melhores marcas e ingredientes do mercado atual.' },
  { icon: Leaf, title: 'Pureza', desc: 'Foco em compostos limpos, sem aditivos químicos ou crueldade.' },
  { icon: Heart, title: 'Atendimento', desc: 'Consultores especializados, construindo relações reais de confiança.' },
  { icon: Users, title: 'Comunidade', desc: 'Educar e promover a evolução para um estilo de vida consciente.' },
]

export default function SobrePage() {
  return (
    <div className="bg-[#FAFAF8] overflow-hidden selection:bg-[#A88573] selection:text-[#FAFAF8]">
      
      {/* ─── HERO ─────────────────────────────────────────── */}
      <section className="relative pt-48 pb-32 flex flex-col items-center justify-center text-center">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#741b18]/10 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="max-w-4xl mx-auto px-6 relative z-10"
        >
          <p className="text-[#A88573] tracking-widest uppercase text-xs font-bold mb-6">Nossa História</p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl text-[#3E2723] leading-[1.1] mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>
            A Arte do <br />
            <em className="text-[#741b18] not-italic">Bem-Viver.</em>
          </h1>
          <p className="text-[#3E2723]/70 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
            Começamos nossa loja em 1980, no Leblon, com a missão de oferecer produtos naturais de qualidade para quem acredita que bem-estar começa pela alimentação. Em 1994, expandimos nossa presença com uma loja no Barrashopping, levando nossa curadoria de orgânicos, suplementos e funcionais para ainda mais famílias cariocas.
          </p>
        </motion.div>
      </section>

      {/* ─── TIMELINE ─────────────────────────────────────── */}
      <section className="py-32 bg-white border-y border-[#A88573]/30">
        <div className="max-w-[1000px] mx-auto px-6 relative">
          
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[1px] bg-[#A88573]/20 -translate-x-1/2" />

          {timelineItems.map((item, i) => (
            <motion.div
              key={item.year}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              className={`relative flex flex-col md:flex-row items-center mb-24 last:mb-0 ${
                i % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-white border-2 border-[#A88573] -translate-x-1/2 shadow-[0_0_15px_rgba(168,133,115,0.6)]" />
              
              <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${i % 2 === 0 ? 'md:pl-16 text-left' : 'md:pr-16 md:text-right'}`}>
                <h2 className="text-5xl lg:text-7xl text-[#A88573] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {item.year}
                </h2>
                <h3 className="text-2xl text-[#3E2723] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {item.title}
                </h3>
                <p className="text-[#3E2723]/50 font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── VALUES GRID ──────────────────────────────────── */}
      <section className="py-32 relative">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl text-[#3E2723]" style={{ fontFamily: 'Playfair Display, serif' }}>
              Nossos Pilares
            </h2>
            <div className="w-16 h-[1px] bg-[#741b18] mx-auto mt-8" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-white border border-[#A88573]/40 rounded-[30px] p-10 flex flex-col items-center justify-center text-center hover:bg-[#FAFAF8] hover:border-[#741b18]/50 transition-all duration-500 group"
              >
                <div className="w-20 h-20 rounded-2xl bg-[#A88573]/10 flex items-center justify-center mb-8 border border-[#A88573]/40 group-hover:scale-110 transition-transform duration-500">
                  <v.icon className="w-8 h-8 text-[#A88573] group-hover:text-[#741b18] transition-colors" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl text-[#3E2723] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {v.title}
                </h3>
                <p className="text-[#3E2723]/50 font-light text-sm">
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
