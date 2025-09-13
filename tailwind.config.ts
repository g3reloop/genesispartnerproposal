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
        'earth-green': '#4a7c5e',
        'recursion-blue': '#5ba3d0',
        'pragmatic-gray': '#9ca3af',
        'alert-orange': '#f97316',
        'deep-void': '#0a0a0a',
        'quantum-white': '#ffffff',
        'light-gray': '#e5e7eb',
        'medium-gray': '#d1d5db',
      },
      fontFamily: {
        'mono': ['JetBrains Mono', 'monospace'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'fractal-gradient': 'radial-gradient(ellipse at center, rgba(44, 125, 160, 0.1) 0%, transparent 70%)',
        'recursion-pattern': 'linear-gradient(45deg, rgba(30, 63, 42, 0.05) 25%, transparent 25%, transparent 75%, rgba(30, 63, 42, 0.05) 75%, rgba(30, 63, 42, 0.05))',
      },
      animation: {
        'glitch': 'glitch 0.3s ease-in-out',
        'shimmer': 'shimmer 2s linear infinite',
        'pulse-subtle': 'pulse-subtle 4s ease-in-out infinite',
      },
      keyframes: {
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'pulse-subtle': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
      },
    },
  },
  plugins: [],
}
export default config
