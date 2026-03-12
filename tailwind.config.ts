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
        navy: {
          DEFAULT: '#0a0f1e',
          mid: '#111827',
          light: '#1a2540',
        },
        gold: {
          DEFAULT: '#c9a84c',
          light: '#e8c97a',
          dim: '#9a7a38',
        },
        cream: {
          DEFAULT: '#f5f0e8',
          dim: '#d4cbb8',
        },
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'serif'],
        sans: ['DM Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
