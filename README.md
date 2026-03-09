# Prana Produtos Naturais — Site Institucional

Site institucional moderno para a **Prana Produtos Naturais**, loja física no Barrashopping, Rio de Janeiro.

## Tecnologias

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Lucide React** (ícones)
- **Google Fonts** — Cormorant Garamond + DM Sans

## Instalação

```bash
npm install
npm run dev
```

Acesse: http://localhost:3000

## Páginas

| Rota | Descrição |
|------|-----------|
| `/` | Home: hero, categorias, sobre, WhatsApp CTA, mapa |
| `/sobre` | História da loja, valores, linha do tempo |
| `/produtos` | Listagem de categorias de produtos |
| `/blog` | Artigos de saúde e bem-estar |
| `/contato` | Informações, QR Code WhatsApp, mapa |

## Personalização

### Trocar logo
- Adicione o arquivo de logo em `/public/images/logo.png`
- Atualize o componente `Navbar.tsx`

### Atualizar número de WhatsApp
- Busque `wa.me/5521924319047` e substitua pelo número correto
- O QR Code será gerado automaticamente via API

### Inserir fotos reais
- Adicione imagens em `/public/images/`
- Use o componente `<Image>` do Next.js para otimização automática

### Atualizar horários
- Edite em `components/Footer.tsx` e `app/contato/page.tsx`

### Trocar cores
- Paleta definida em `tailwind.config.ts` sob `colors.prana`
- Variáveis CSS em `app/globals.css`

## Paleta de Cores

| Nome | Hex | Uso |
|------|-----|-----|
| `prana.teal` | `#4ECDC4` | Destaque / CTA |
| `prana.green` | `#2D6A4F` | Principal / Fundo escuro |
| `prana.sage` | `#74C69D` | Secundário |
| `prana.cream` | `#F8F4EC` | Fundo claro |
| `prana.brown` | `#3D2B1F` | Acento quente |
| `prana.gold` | `#C9A84C` | Destaque premium |
| `prana.dark` | `#1A2620` | Texto / Hero fundo |

## Deploy

Recomendado: **Vercel** (grátis no plano hobby)

```bash
npm install -g vercel
vercel
```

---

Desenvolvido com 💚 para a Prana Produtos Naturais
