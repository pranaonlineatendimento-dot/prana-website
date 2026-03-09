import type { Metadata } from 'next'
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contato | Prana Produtos Naturais',
  description: 'Entre em contato com a Prana Produtos Naturais. Estamos no Barrashopping, Loja 141, Rio de Janeiro.',
}

export default function ContatoPage() {
  return (
    <>
      <section className="bg-[#1A2620] pt-40 pb-24 relative overflow-hidden">
        <div className="absolute -top-10 right-10 w-80 h-80 blob bg-[#4ECDC4]/20 blur-3xl opacity-30" />
        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#4ECDC4] mb-4">Fale conosco</p>
          <h1
            className="text-5xl md:text-6xl text-[#F8F4EC] font-light leading-tight mb-6"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Estamos aqui <em className="text-[#4ECDC4]">para você</em>
          </h1>
          <p className="text-[#EAF4EE]/60 text-lg max-w-xl mx-auto">
            Tire dúvidas, peça indicações ou venha nos visitar. Será um prazer te atender.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#F8F4EC" />
          </svg>
        </div>
      </section>

      <section className="bg-[#F8F4EC] py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          {/* Info */}
          <div className="space-y-8">
            <div>
              <h2
                className="text-3xl text-[#1A2620] font-light mb-2"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                Informações de contato
              </h2>
              <p className="text-[#1A2620]/55 text-sm">
                Atendemos presencialmente, por telefone, e-mail e WhatsApp.
              </p>
            </div>

            <div className="space-y-5">
              <div className="flex items-start gap-4 p-5 bg-[#EAF4EE] rounded-2xl border border-[#2D6A4F]/10">
                <div className="w-10 h-10 rounded-xl bg-[#2D6A4F]/10 flex items-center justify-center text-[#2D6A4F] flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-[#1A2620] mb-0.5">Endereço</p>
                  <p className="text-sm text-[#1A2620]/60 leading-relaxed">
                    Av. das Américas, 4666 — Loja 141<br />
                    Barrashopping · Rio de Janeiro, RJ<br />
                    CEP 22640-102
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-[#EAF4EE] rounded-2xl border border-[#2D6A4F]/10">
                <div className="w-10 h-10 rounded-xl bg-[#2D6A4F]/10 flex items-center justify-center text-[#2D6A4F] flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-[#1A2620] mb-0.5">Telefone</p>
                  <a href="tel:+552124319047" className="text-sm text-[#2D6A4F] hover:text-[#4ECDC4] transition-colors">
                    (21) 2431-9047
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-[#EAF4EE] rounded-2xl border border-[#2D6A4F]/10">
                <div className="w-10 h-10 rounded-xl bg-[#2D6A4F]/10 flex items-center justify-center text-[#2D6A4F] flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-[#1A2620] mb-0.5">E-mail</p>
                  <a href="mailto:pranaprodutosnaturais@hotmail.com" className="text-sm text-[#2D6A4F] hover:text-[#4ECDC4] transition-colors break-all">
                    pranaprodutosnaturais@hotmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-[#EAF4EE] rounded-2xl border border-[#2D6A4F]/10">
                <div className="w-10 h-10 rounded-xl bg-[#2D6A4F]/10 flex items-center justify-center text-[#2D6A4F] flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-[#1A2620] mb-1">Horário de funcionamento</p>
                  <p className="text-sm text-[#1A2620]/60">Segunda a Sábado: 10h – 22h</p>
                  <p className="text-sm text-[#1A2620]/60">Domingos e Feriados: 13h – 21h</p>
                </div>
              </div>
            </div>

            {/* Social */}
            <div>
              <p className="text-sm font-semibold text-[#1A2620] mb-4">Redes sociais</p>
              <div className="flex gap-3">
                <a
                  href="https://www.instagram.com/pranaprodutosnaturais"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#EAF4EE] border border-[#2D6A4F]/15 rounded-xl px-4 py-2.5 text-sm font-medium text-[#1A2620] hover:border-[#2D6A4F]/40 hover:text-[#2D6A4F] transition-all"
                >
                  <Instagram className="w-4 h-4" />
                  Instagram
                </a>
                <a
                  href="https://www.facebook.com/pranaprodutosnaturais"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#EAF4EE] border border-[#2D6A4F]/15 rounded-xl px-4 py-2.5 text-sm font-medium text-[#1A2620] hover:border-[#2D6A4F]/40 hover:text-[#2D6A4F] transition-all"
                >
                  <Facebook className="w-4 h-4" />
                  Facebook
                </a>
              </div>
            </div>
          </div>

          {/* WhatsApp CTA + QR */}
          <div className="flex flex-col gap-6">
            <div className="bg-[#2D6A4F] rounded-3xl p-8 text-center flex flex-col items-center gap-5">
              <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.554 4.118 1.528 5.849L0 24l6.335-1.507A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.796 9.796 0 01-5.126-1.447l-.367-.218-3.761.895.924-3.667-.239-.38A9.775 9.775 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
                </svg>
              </div>
              <div>
                <h3
                  className="text-2xl text-[#F8F4EC] font-light mb-2"
                  style={{ fontFamily: 'Cormorant Garamond, serif' }}
                >
                  WhatsApp
                </h3>
                <p className="text-sm text-[#EAF4EE]/60 mb-4">
                  A forma mais rápida de falar com a gente. Tire dúvidas, peça produtos, marque visita.
                </p>
              </div>
              {/* QR Code */}
              <div className="bg-white rounded-2xl p-3">
                <img
                  src="https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=https://wa.me/5521924319047&color=1A2620&bgcolor=FFFFFF"
                  alt="QR Code WhatsApp"
                  width={160}
                  height={160}
                  className="rounded-lg"
                />
              </div>
              <p className="text-xs text-[#EAF4EE]/40">Escaneie com a câmera do celular</p>
              <a
                href="https://wa.me/5521924319047"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#F8F4EC] text-[#2D6A4F] rounded-xl py-3.5 font-semibold text-sm hover:bg-[#4ECDC4] transition-colors text-center block"
              >
                Abrir WhatsApp agora →
              </a>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden border border-[#2D6A4F]/10 h-56">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.2!2d-43.3650!3d-22.9990!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bda2f0a51ccdff7%3A0x2c3f3c!2sBarraShopping!5e0!3m2!1spt!2sbr!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa Prana Produtos Naturais"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
