import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './content/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#f5f9fd',
        foreground: '#125096',
        muted: '#3a6198',
        border: '#d5e3f5',
        navy: '#125096',
        graphite: '#0b3a70',
        blue: '#1363b7',
        ice: '#ffffff',
        orange: '#1363b7',
      },
      fontFamily: {
        sans: ['var(--font-manrope)', 'Arial', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.02em',
      },
    },
  },
  plugins: [],
}

export default config
