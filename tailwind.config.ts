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
        red: { retro: '#C41E3A' },
        ink: '#111111',
        newsprint: '#F7F2E4',
      },
      fontFamily: {
        playfair: ['var(--font-playfair)', 'Georgia', 'serif'],
        oswald: ['var(--font-oswald)', 'Arial Narrow', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
