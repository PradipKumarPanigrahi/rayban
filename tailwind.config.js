/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'rb-black':   '#000000',
        'rb-dark':    '#0A0A0A',
        'rb-gray':    '#111111',
        'rb-border':  '#222222',
        'rb-muted':   '#555555',
        'rb-text':    '#F0F0F0',
        'rb-green':   '#00FF41',
        'rb-red':     '#FF003C',
        'rb-amber':   '#FFB800',
      },
      fontFamily: {
        mono:   ['var(--font-mono)', 'monospace'],
        sans:   ['var(--font-sans)', 'sans-serif'],
        korean: ['var(--font-korean)', 'sans-serif'],
      },
      animation: {
        'glitch-1':  'glitch1 0.3s infinite',
        'glitch-2':  'glitch2 0.3s infinite',
        'ticker':    'ticker 18s linear infinite',
        'scanline':  'scanline 8s linear infinite',
        'flicker':   'flicker 4s ease-in-out infinite',
        'blink':     'blink 1s step-end infinite',
        'pulse-red': 'pulseRed 2s ease-in-out infinite',
      },
      keyframes: {
        glitch1: {
          '0%, 100%': { clipPath: 'inset(0 0 90% 0)', transform: 'translate(-4px, 0)' },
          '25%':      { clipPath: 'inset(30% 0 50% 0)', transform: 'translate(4px, 0)' },
          '50%':      { clipPath: 'inset(60% 0 20% 0)', transform: 'translate(-2px, 0)' },
          '75%':      { clipPath: 'inset(10% 0 70% 0)', transform: 'translate(2px, 0)' },
        },
        glitch2: {
          '0%, 100%': { clipPath: 'inset(80% 0 0 0)',  transform: 'translate(4px, 0)' },
          '25%':      { clipPath: 'inset(0 0 60% 0)',   transform: 'translate(-4px, 0)' },
          '50%':      { clipPath: 'inset(40% 0 30% 0)', transform: 'translate(2px, 0)' },
          '75%':      { clipPath: 'inset(70% 0 10% 0)', transform: 'translate(-2px, 0)' },
        },
        ticker: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        scanline: {
          '0%':   { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(200%)' },
        },
        flicker: {
          '0%, 100%': { opacity: '1' },
          '92%':      { opacity: '1' },
          '93%':      { opacity: '0.4' },
          '94%':      { opacity: '1' },
          '96%':      { opacity: '0.6' },
          '97%':      { opacity: '1' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0' },
        },
        pulseRed: {
          '0%, 100%': { boxShadow: '0 0 8px #FF003C' },
          '50%':      { boxShadow: '0 0 24px #FF003C, 0 0 48px #FF003C44' },
        },
      },
    },
  },
  plugins: [],
};
