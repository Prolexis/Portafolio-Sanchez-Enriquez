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
        carbon: '#101319',
        obsidian: '#0B0D12',
        ivory: '#F5F3EE',
        stone: '#EAE9E5',
        ink: '#1B2029',
        cobalt: {
          DEFAULT: '#3F63E8',
          hover: '#3153D3',
          soft: '#7399FF',
        },
        editorial: {
          muted: '#A8A8A3',
          inkMuted: '#5B6270',
          borderDark: '#232833',
          borderLight: '#DCDAD3',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-manrope)', 'var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      maxWidth: {
        atelier: '1320px',
      },
      boxShadow: {
        atelier: '0 24px 60px -28px rgba(11, 13, 18, 0.28)',
        atelierDark: '0 24px 64px -28px rgba(0, 0, 0, 0.72)',
      },
    },
  },
  plugins: [],
};

export default config;
