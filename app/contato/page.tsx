'use client'

import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
}

export default function ContatoPage() {
  return (
    <div className="bg-[#0A0F0D] overflow-hidden selection:bg-[#C9A84C] selection:text-[#0A0F0D]">
      
      <section className="relative pt-48 pb-32">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C9A84C]/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#4ECDC4]/10 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-center mb-24"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl text-[#F5F0E8] leading-[1.1] mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Fale com <br />
              <em className="text-[#C9A84C] not-italic">a Prana.</em>
            </h1>
            <div className="w-16 h-[1px] bg-[#4ECDC4] mx-auto mt-10" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Left: Info Cards */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
              }}
              className="grid sm:grid-cols-2 gap-6"
            >
              {[
                {
                  icon: Phone,
                  title: 'Telefone',
                  content: '(21) 2431-9047',
                  link: 'tel:+552124319047'
                },
                {
                  icon: Mail,
                  title: 'Email',
                  content: 'pranaprodutosnaturais@hotmail.com',
                  link: 'mailto:pranaprodutosnaturais@hotmail.com'
                },
                {
                  icon: Clock,
                  title: 'Horários',
                  content: 'Seg a Sáb: 10h–22h\nDom/Fer: 13h–21h',
                  link: null
                },
                {
                  icon: MapPin,
                  title: 'Endereço',
                  content: 'Avenida das Américas, 4666\nLoja 141 - BarraShopping',
                  link: 'https://goo.gl/maps/123'
                }
              ].map((c, i) => (
                <motion.div
                  key={c.title}
                  variants={fadeUp}
                  className="bg-[#111815] border border-[#C9A84C]/10 p-6 xl:p-8 rounded-[30px] xl:rounded-[40px] flex flex-col justify-between hover:border-[#4ECDC4]/50 hover:bg-[#0A0F0D] transition-all duration-500 group overflow-hidden"
                >
                  <div className="mb-6 xl:mb-8">
                    <c.icon className="w-8 h-8 text-[#C9A84C] group-hover:text-[#4ECDC4] transition-colors" strokeWidth={1} />
                  </div>
                  <div className="w-full">
                    <h3 className="text-lg font-medium text-[#F5F0E8] mb-1 xl:mb-2">{c.title}</h3>
                    {c.link ? (
                      <a 
                        href={c.link} 
                        title={c.content}
                        className={`block w-full text-[#F5F0E8]/50 hover:text-[#C9A84C] font-light whitespace-nowrap overflow-hidden text-ellipsis transition-colors ${c.title === 'Email' ? 'text-[11.5px] sm:text-[12px] lg:text-[11px] xl:text-[13px] tracking-tight' : 'text-[13px] xl:text-sm'}`}
                      >
                        {c.content}
                      </a>
                    ) : (
                      <p className="text-[#F5F0E8]/50 font-light whitespace-pre-line text-[13px] xl:text-sm">
                        {c.content}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}

              <motion.div variants={fadeUp} className="sm:col-span-2 bg-gradient-to-r from-[#111815] to-[#0A0F0D] border border-[#C9A84C]/10 p-8 rounded-[40px] flex items-center justify-between group">
                <div>
                  <h3 className="text-lg font-medium text-[#F5F0E8] mb-2">Redes Sociais</h3>
                  <p className="text-[#F5F0E8]/50 font-light text-[13px] xl:text-sm">Acompanhe nossas novidades.</p>
                </div>
                <div className="flex gap-4">
                  <a href="https://www.instagram.com/pranaprodutosnaturais" className="w-12 h-12 rounded-full border border-[#C9A84C]/30 flex items-center justify-center hover:bg-[#C9A84C] hover:text-[#0A0F0D] transition-all text-[#4ECDC4]">
                    <Instagram className="w-5 h-5" strokeWidth={1.5} />
                  </a>
                  <a href="https://www.facebook.com/pranaprodutosnaturais" className="w-12 h-12 rounded-full border border-[#C9A84C]/30 flex items-center justify-center hover:bg-[#C9A84C] hover:text-[#0A0F0D] transition-all text-[#4ECDC4]">
                    <Facebook className="w-5 h-5" strokeWidth={1.5} />
                  </a>
                </div>
              </motion.div>
            </motion.div>

            {/* Right: WhatsApp + Map */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="flex flex-col gap-6 h-full"
            >
              {/* WhatsApp Large Card */}
              <div className="bg-[#111815] border border-[#4ECDC4]/20 rounded-[40px] p-12 flex flex-col sm:flex-row items-center gap-10 hover:border-[#4ECDC4]/60 transition-colors duration-500">
                <div className="bg-white p-3 rounded-3xl shadow-[0_0_40px_rgba(78,205,196,0.15)] flex-shrink-0">
                  <img
                    src="https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=https://wa.me/5521924319047&color=0A0F0D&bgcolor=FFFFFF"
                    alt="WhatsApp QR Code"
                    className="w-32 h-32"
                  />
                </div>
                <div className="text-center sm:text-left flex-grow">
                  <h3 className="text-3xl text-[#4ECDC4] mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>Atendimento VIP</h3>
                  <p className="text-[#F5F0E8]/60 font-light text-sm mb-6">
                    Aponte sua câmera para solicitar produtos ou tirar suas dúvidas diretamente pelo WhatsApp.
                  </p>
                  <a
                    href="https://wa.me/5521924319047"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#4ECDC4] text-[#0A0F0D] px-8 py-3 rounded-full text-sm font-bold hover:bg-[#2DD4BF] hover:scale-105 transition-all w-full sm:w-auto text-center"
                  >
                    Chamar no WhatsApp
                  </a>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-[40px] overflow-hidden border border-[#C9A84C]/20 flex-grow min-h-[300px] relative filter grayscale-[20%] sepia-[20%] hue-rotate-180 brightness-[80%] contrast-[120%] hover:filter-none transition-all duration-1000">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.2!2d-43.3650!3d-22.9990!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bda2f0a51ccdff7%3A0x2c3f3c!2sBarraShopping!5e0!3m2!1spt!2sbr!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="BarraShopping Rio"
                />
              </div>
            </motion.div>
            
          </div>
        </div>
      </section>

    </div>
  )
}
