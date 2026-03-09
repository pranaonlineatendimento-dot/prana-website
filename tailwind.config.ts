import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        prana: {
          dark: '#0A0F0D',
          darker: '#111815',
          gold: '#C9A84C',
          'gold-light': '#E8C96A',
          teal: '#4ECDC4',
          'teal-light': '#2DD4BF',
          cream: '#F5F0E8',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
export default config
