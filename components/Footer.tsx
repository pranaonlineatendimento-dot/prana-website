'use client'

import Link from 'next/link'
import { MapPin, Phone, Mail, Instagram, Facebook, Clock } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#FAFAF8] text-[#3E2723] border-t border-[#A88573]/30 pt-20">
      <div className="max-w-[1400px] mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3
              className="text-4xl font-bold text-[#A88573] mb-6"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Prana
            </h3>
            <p className="text-sm text-[#3E2723]/60 leading-relaxed mb-6">
              Produtos naturais, orgânicos e funcionais para uma vida mais saudável.
              Desde 1994 no coração do Barrashopping.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/pranabarraprodutosnaturais" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-[#A88573]/30 flex items-center justify-center hover:border-[#741b18] hover:text-[#FAFAF8] hover:bg-[#741b18] transition-colors bg-white">
                <Instagram className="w-5 h-5 flex-shrink-0" />
              </a>
              <a href="https://www.facebook.com/pranaprodutosnaturais" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-[#A88573]/30 flex items-center justify-center hover:border-[#741b18] hover:text-[#FAFAF8] hover:bg-[#741b18] transition-colors bg-white">
                <Facebook className="w-5 h-5 flex-shrink-0" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#741b18] mb-6">
              Navegação
            </h4>
            <ul className="space-y-4">
              {[
                ['/', 'Início'],
                ['/sobre', 'Nossa História'],
                ['/produtos', 'Produtos'],
                ['/contato', 'Contato'],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-[#3E2723]/60 hover:text-[#A88573] transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#741b18] mb-6">
              Contato
            </h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <MapPin className="w-4 h-4 text-[#A88573] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-[#3E2723]/60 leading-relaxed">
                  Av. das Américas, 4666 — Loja 141<br />
                  Barra Shopping (Mercado Praça XV)<br />
                  Barra da Tijuca, Rio de Janeiro - RJ
                </span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="w-4 h-4 text-[#A88573] flex-shrink-0" />
                <a href="tel:+552124319047" className="text-sm text-[#3E2723]/60 hover:text-[#741b18] transition-colors">
                  (21) 2431-9047
                </a>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="w-4 h-4 text-[#A88573] flex-shrink-0" />
                <a href="mailto:pranaprodutosnaturais@hotmail.com" className="text-sm text-[#3E2723]/60 hover:text-[#741b18] transition-colors">
                  pranaprodutosnaturais@hotmail.com
                </a>
              </li>
              <li className="flex items-start gap-4">
                <Clock className="w-4 h-4 text-[#A88573] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-[#3E2723]/60 leading-relaxed">
                  Seg a Sáb: 10h – 22h<br />
                  Dom e Feriados: 13h – 21h
                </span>
              </li>
            </ul>
          </div>

          {/* QR Code */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#741b18] mb-6">
              Fale Conosco
            </h4>
            <div className="bg-white border border-[#A88573]/40 rounded-2xl p-6 flex flex-col items-center gap-4">
              <div className="w-32 h-32 bg-white rounded-xl flex items-center justify-center p-2">
                <img
                  src="https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=https://wa.me/5521967735442&color=480e0d&bgcolor=FFFFFF"
                  alt="QR Code WhatsApp Prana"
                  width={120}
                  height={120}
                  className="rounded-lg"
                />
              </div>
              <p className="text-xs text-[#3E2723]/50 text-center">
                Aponte a câmera para<br />chamar no WhatsApp
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-[#A88573]/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#3E2723]/30 mt-0">
            © {new Date().getFullYear()} Prana Produtos Naturais. Todos os direitos reservados.
          </p>
          <p className="text-xs text-[#3E2723]/30 mt-0">
            Barrashopping — Rio de Janeiro, RJ — Desde 1994
          </p>
        </div>
      </div>
    </footer>
  )
}
