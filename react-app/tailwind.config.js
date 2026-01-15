/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Space Grotesk"', '"Rubik"', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          dark: '#0f172a',
          primary: '#ea728c',
          accent: '#f6b2c0',
          muted: '#4d4d4d',
          slate: '#0b132b',
          ink: '#0a0f1f',
          alabaster: '#e7e7ec',
        },
      },
      backgroundImage: {
        'hero-sheen':
          'linear-gradient(135deg, rgba(13,17,23,0.8), rgba(12,74,110,0.5))',
        'grid-dark':
          'linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(0deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
        'radial-spot':
          'radial-gradient(circle at 20% 20%, rgba(234,114,140,0.12), transparent 35%), radial-gradient(circle at 80% 0%, rgba(246,178,192,0.18), transparent 30%)',
      },
      boxShadow: {
        glow: '0 10px 40px rgba(234,114,140,0.3)',
        soft: '0 20px 70px rgba(0,0,0,0.35)',
      },
    },
  },
  plugins: [],
}
