import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './content/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#f3f6f7',
        foreground: '#102b3b',
        muted: '#617681',
        border: '#c7d4d9',
        navy: '#102b3b',
        graphite: '#0a1e29',
        blue: '#126ba4',
        ice: '#bfe4ef',
        orange: '#e2a04b',
      },
      fontFamily: {
        sans: ['var(--font-manrope)', 'Arial', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.055em',
      },
    },
  },
  plugins: [],
}

export default config
