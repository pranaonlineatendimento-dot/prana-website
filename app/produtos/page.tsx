'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Leaf, Dumbbell, Salad, WheatOff, Droplet, Zap, Snowflake, Cookie, ArrowRight } from 'lucide-react'

const categories = [
  { icon: Leaf, title: 'Orgânicos', desc: 'Produtos certificados livres de agrotóxicos.' },
  { icon: Dumbbell, title: 'Suplementos', desc: 'Performance e saúde para o seu treino.' },
  { icon: Salad, title: 'Veganos', desc: '100% origem vegetal, sem crueldade animal.' },
  { icon: WheatOff, title: 'Sem Glúten', desc: 'Segurança absoluta para celíacos e sensíveis.' },
  { icon: Droplet, title: 'Sem Lactose', desc: 'Alternativas e substitutos perfeitos aos lácteos.' },
  { icon: Zap, title: 'Funcionais', desc: 'Superfoods e bioativos essenciais.' },
  { icon: Snowflake, title: 'Congelados', desc: 'Praticidade para a sua rotina diária.' },
  { icon: Cookie, title: 'Dietéticos', desc: 'Zero açúcar ou açúcares inteligentes.' }
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
}

export default function ProdutosPage() {
  return (
    <div className="bg-[#FAFAF8] overflow-hidden selection:bg-[#A88573] selection:text-[#FAFAF8]">
      
      {/* ─── HERO ─────────────────────────────────────────── */}
      <section className="relative pt-48 pb-32 flex flex-col items-center justify-center text-center">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#A88573]/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="max-w-4xl mx-auto px-6 relative z-10"
        >
          <p className="text-[#741b18] tracking-widest uppercase text-xs font-bold mb-6">Nossa Seleção Premium</p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl text-[#3E2723] leading-[1.1] mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>
            Nossos <br />
            <em className="text-[#A88573] not-italic">Produtos.</em>
          </h1>
          <p className="text-[#3E2723]/70 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
            Uma curadoria minuciosa focada em excelência absoluta. Navegue por um 
            universo de marcas consagradas para a sua evolução humana.
          </p>
        </motion.div>
      </section>

      {/* ─── CATEGORIAS GRID ──────────────────────────────── */}
      <section className="py-32 bg-white border-t border-[#A88573]/30 relative">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl text-[#A88573]" style={{ fontFamily: 'Playfair Display, serif' }}>
              Descubra por Segmento
            </h2>
            <div className="w-16 h-[1px] bg-[#741b18] mx-auto mt-8" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-[#FAFAF8] border border-[#A88573]/20 p-8 rounded-[30px] flex flex-col items-start hover:border-[#A88573]/40 hover:-translate-y-2 transition-all duration-500 group"
              >
                <div className="mb-6">
                  <c.icon className="w-8 h-8 text-[#741b18] group-hover:text-[#A88573] transition-colors" strokeWidth={1} />
                </div>
                <h3 className="text-xl text-[#3E2723] mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {c.title}
                </h3>
                <p className="text-[#3E2723]/40 font-light text-sm leading-relaxed">
                  {c.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
