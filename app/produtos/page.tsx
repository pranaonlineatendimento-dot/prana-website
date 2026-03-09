'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Leaf, Dumbbell, Salad, WheatOff, Droplet, Zap, Snowflake, Cookie, ArrowRight } from 'lucide-react'

const allProducts = [
  { file: '01-colageno_hidrolisado_500mg_120caps_qualynutri.png', name: 'Colágeno Qualynutri 500mg', category: 'Suplemento' },
  { file: '02-colageno-1g-60-tabletes.png', name: 'Colágeno 1g Tabletes', category: 'Suplemento' },
  { file: '03-colageno-verisol-hidrolisado-180-capsulas.png', name: 'Colágeno Verisol', category: 'Suplemento' },
  { file: '01-Kombucha-Refrigerada-400ml-6-sabores-20un.png', name: 'Kombucha Refrigerada', category: 'Funcional' },
  { file: '02-Kombucha-310_latas-min.png', name: 'Kombucha Lata', category: 'Funcional' },
  { file: '03-Kombucha-latas.png', name: 'Kombucha Lata Sabores', category: 'Funcional' },
  { file: '01-crunch-gold-snack.png', name: 'Crunch Gold Snack', category: 'Funcional' },
  { file: '02-crunch-gold-snack.png', name: 'Crunch Gold Barra', category: 'Funcional' },
  { file: '03-crunch-gold-snack.png', name: 'Crunch Gold Whey', category: 'Funcional' },
  { file: '01-dha-tg-liquid-e-pote-1.png', name: 'DHA TG Líquido', category: 'Suplemento' },
  { file: '02-dha-oleo-peixe-60caps-growth-supplements-v2.png', name: 'Óleo de Peixe 60caps', category: 'Suplemento' },
  { file: '03-DHA1500_TG_2.png', name: 'DHA 1500 TG', category: 'Suplemento' },
  { file: '01-taurine-powder-250g-growth-supplements-v2.png', name: 'Taurine Powder 250g', category: 'Suplemento' },
  { file: '02-taurina-1000mg-120comp-growth-supplements-v3.png', name: 'Taurina 1000mg', category: 'Suplemento' },
  { file: '03-taurina-120g_890.png', name: 'Taurina 120g', category: 'Suplemento' },
  { file: 'cookies-01.png', name: 'Cookies Integrais Baunilha', category: 'Integral' },
  { file: 'cookies-02.png', name: 'Cookies Cacau', category: 'Integral' },
  { file: 'cookies-03.png', name: 'Cookies Fit', category: 'Integral' },
  { file: 'fresh-whey-01.png', name: 'Fresh Whey Original', category: 'Suplemento' },
  { file: 'fresh-whey-02.png', name: 'Fresh Whey Baunilha', category: 'Suplemento' },
  { file: 'fresh-whey-03.png', name: 'Fresh Whey Chocolate', category: 'Suplemento' },
  { file: 'granola-01.png', name: 'Granola Artesanal', category: 'Orgânico' },
  { file: 'granola-02.png', name: 'Granola Premium', category: 'Orgânico' },
  { file: 'granola-03.png', name: 'Granola sem Glúten', category: 'Fibras' },
  { file: 'granola-04.png', name: 'Granola Tradicional', category: 'Orgânico' },
  { file: 'magnesio-01.png', name: 'Magnésio Dimalato', category: 'Suplemento' },
  { file: 'magnesio-02.png', name: 'Magnésio Quelato', category: 'Suplemento' },
  { file: 'mahta-01.png', name: 'Mahta Superfood', category: 'Funcional' },
  { file: 'mahta-02.png', name: 'Mahta Protein', category: 'Proteico' },
  { file: 'mahta-03.png', name: 'Mahta Energy', category: 'Energético' }
]

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
    <div className="bg-[#0A0F0D] overflow-hidden selection:bg-[#C9A84C] selection:text-[#0A0F0D]">
      
      {/* ─── HERO ─────────────────────────────────────────── */}
      <section className="relative pt-48 pb-32 flex flex-col items-center justify-center text-center">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#C9A84C]/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="max-w-4xl mx-auto px-6 relative z-10"
        >
          <p className="text-[#4ECDC4] tracking-widest uppercase text-xs font-bold mb-6">Nossa Seleção Premium</p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl text-[#F5F0E8] leading-[1.1] mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>
            Nossos <br />
            <em className="text-[#C9A84C] not-italic">Produtos.</em>
          </h1>
          <p className="text-[#F5F0E8]/70 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
            Uma curadoria minuciosa focada em excelência absoluta. Navegue por um 
            universo de marcas consagradas para a sua evolução humana.
          </p>
        </motion.div>
      </section>

      {/* ─── PRODUTOS EM DESTAQUE (TODOS) ─────────────────── */}
      <section className="py-20 relative z-20">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-[#F5F0E8]" style={{ fontFamily: 'Playfair Display, serif' }}>
              Catálogo Ilustre
            </h2>
            <div className="w-[1px] h-16 bg-[#C9A84C]/50 mx-auto mt-8" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
            {allProducts.map((p, i) => (
              <motion.div
                key={p.file}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (i % 6) * 0.1 }}
                className="group relative bg-[#111815] rounded-3xl border border-transparent hover:border-[#4ECDC4]/30 transition-all duration-500 overflow-hidden flex flex-col"
              >
                <div className="aspect-square relative overflow-visible bg-transparent flex items-center justify-center p-6">
                  <Image
                    src={`/assets/images/products/${p.file}`}
                    alt={p.name}
                    width={300}
                    height={300}
                    className="object-contain w-full h-full group-hover:scale-110 group-hover:-translate-y-4 transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] drop-shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </div>
                <div className="p-5 flex flex-col items-center justify-center flex-grow text-center bg-[#0A0F0D] border-t border-[#C9A84C]/10">
                  <span className="text-[9px] uppercase tracking-widest text-[#C9A84C] mb-2">{p.category}</span>
                  <h3 className="text-[#F5F0E8] text-sm font-medium">{p.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CATEGORIAS GRID ──────────────────────────────── */}
      <section className="py-32 bg-[#111815] border-t border-[#C9A84C]/10 relative">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl text-[#C9A84C]" style={{ fontFamily: 'Playfair Display, serif' }}>
              Descubra por Segmento
            </h2>
            <div className="w-16 h-[1px] bg-[#4ECDC4] mx-auto mt-8" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-[#0A0F0D] border border-[#111815] p-8 rounded-[30px] flex flex-col items-start hover:border-[#C9A84C]/40 hover:-translate-y-2 transition-all duration-500 group"
              >
                <div className="mb-6">
                  <c.icon className="w-8 h-8 text-[#4ECDC4] group-hover:text-[#C9A84C] transition-colors" strokeWidth={1} />
                </div>
                <h3 className="text-xl text-[#F5F0E8] mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {c.title}
                </h3>
                <p className="text-[#F5F0E8]/40 font-light text-sm leading-relaxed">
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
