import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#090C12',
          elevated: '#111722',
          card: '#151C29',
          subtle: '#1A2333',
        },
        text: {
          primary: '#F4F7FB',
          secondary: '#A6B0BF',
          muted: '#7B879B',
        },
        accent: {
          DEFAULT: '#6D9DFF',
          hover: '#86B0FF',
          violet: '#9786FF',
        },
        border: {
          subtle: 'rgba(244, 247, 251, 0.08)',
          strong: 'rgba(244, 247, 251, 0.16)',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-space-grotesk)', 'var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      boxShadow: {
        panel: '0 20px 50px -20px rgba(0, 0, 0, 0.65)',
        glow: '0 0 0 1px rgba(109, 157, 255, 0.25), 0 18px 40px -18px rgba(109, 157, 255, 0.22)',
      },
    },
  },
  plugins: [],
};

export default config;
