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
        carbon: '#10141B',
        ivory: '#F4F2ED',
        cobalt: {
          DEFAULT: '#4568EC',
          hover: '#3656D4',
        },
        ink: '#171C25',
        mutedDark: '#87909F',
        mutedLight: '#657080',
        ruleLight: '#DADDE3',
        ruleDark: '#2D3440',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-manrope)', 'var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      maxWidth: {
        signature: '1320px',
      },
      boxShadow: {
        editorialLight: '0 20px 50px -28px rgba(23, 28, 37, 0.16)',
        editorialDark: '0 24px 60px -28px rgba(0, 0, 0, 0.65)',
      },
    },
  },
  plugins: [],
};

export default config;
