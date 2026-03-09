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
          teal:    '#4ECDC4',
          green:   '#2D6A4F',
          sage:    '#74C69D',
          cream:   '#F8F4EC',
          brown:   '#3D2B1F',
          gold:    '#C9A84C',
          dark:    '#1A2620',
          light:   '#EAF4EE',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        body:    ['var(--font-body)', 'sans-serif'],
      },
      backgroundImage: {
        'leaf-pattern': "url('/images/leaf-pattern.svg')",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
export default config
