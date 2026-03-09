import Link from 'next/link'
import { MapPin, Phone, Mail, Instagram, Facebook, Clock } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#1A2620] text-[#EAF4EE]">
      {/* Wave top */}
      <div className="wave-divider bg-[#F8F4EC]">
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path
            d="M0,30 C360,60 1080,0 1440,30 L1440,0 L0,0 Z"
            fill="#1A2620"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <h3
              className="text-3xl font-bold text-[#4ECDC4] mb-4"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              Prana
            </h3>
            <p className="text-sm text-[#EAF4EE]/60 leading-relaxed mb-4">
              Produtos naturais, orgânicos e funcionais para uma vida mais saudável.
              Desde 1994 no coração do Barrashopping.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/pranaprodutosnaturais"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-[#EAF4EE]/20 flex items-center justify-center hover:border-[#4ECDC4] hover:text-[#4ECDC4] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/pranaprodutosnaturais"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-[#EAF4EE]/20 flex items-center justify-center hover:border-[#4ECDC4] hover:text-[#4ECDC4] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/5521924319047"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-[#EAF4EE]/20 flex items-center justify-center hover:border-[#4ECDC4] hover:text-[#4ECDC4] transition-colors"
                aria-label="WhatsApp"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.554 4.118 1.528 5.849L0 24l6.335-1.507A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.796 9.796 0 01-5.126-1.447l-.367-.218-3.761.895.924-3.667-.239-.38A9.775 9.775 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-[#4ECDC4] mb-5">
              Navegação
            </h4>
            <ul className="space-y-3">
              {[
                ['/', 'Início'],
                ['/sobre', 'Nossa História'],
                ['/produtos', 'Produtos'],
                ['/blog', 'Blog & Dicas'],
                ['/contato', 'Contato'],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-[#EAF4EE]/60 hover:text-[#4ECDC4] transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-[#4ECDC4] mb-5">
              Contato
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#4ECDC4] mt-0.5 flex-shrink-0" />
                <span className="text-sm text-[#EAF4EE]/60 leading-relaxed">
                  Av. das Américas, 4666 — Loja 141<br />
                  Barrashopping, Rio de Janeiro/RJ<br />
                  CEP 22640-102
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#4ECDC4] flex-shrink-0" />
                <a href="tel:+5521243190047" className="text-sm text-[#EAF4EE]/60 hover:text-[#4ECDC4] transition-colors">
                  (21) 2431-9047
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#4ECDC4] flex-shrink-0" />
                <a href="mailto:pranaprodutosnaturais@hotmail.com" className="text-sm text-[#EAF4EE]/60 hover:text-[#4ECDC4] transition-colors">
                  pranaprodutosnaturais<br />@hotmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#4ECDC4] mt-0.5 flex-shrink-0" />
                <span className="text-sm text-[#EAF4EE]/60 leading-relaxed">
                  Seg a Sáb: 10h – 22h<br />
                  Dom e Feriados: 13h – 21h
                </span>
              </li>
            </ul>
          </div>

          {/* QR Code WhatsApp */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-[#4ECDC4] mb-5">
              Fale Conosco
            </h4>
            <div className="bg-[#EAF4EE]/5 border border-[#EAF4EE]/10 rounded-2xl p-4 flex flex-col items-center gap-3">
              {/* QR Code placeholder — substitua pelo QR Code real do WhatsApp */}
              <div className="w-32 h-32 bg-white rounded-xl flex items-center justify-center">
                <img
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=https://wa.me/5521924319047&color=1A2620&bgcolor=FFFFFF`}
                  alt="QR Code WhatsApp Prana"
                  width={120}
                  height={120}
                  className="rounded-lg"
                />
              </div>
              <p className="text-xs text-[#EAF4EE]/50 text-center">
                Aponte a câmera para<br />chamar no WhatsApp
              </p>
              <a
                href="https://wa.me/5521924319047"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium text-[#4ECDC4] hover:underline"
              >
                ou clique aqui →
              </a>
            </div>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-[#EAF4EE]/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#EAF4EE]/30">
            © {new Date().getFullYear()} Prana Produtos Naturais. Todos os direitos reservados.
          </p>
          <p className="text-xs text-[#EAF4EE]/30">
            Barrashopping — Rio de Janeiro, RJ — Desde 1994
          </p>
        </div>
      </div>
    </footer>
  )
}
