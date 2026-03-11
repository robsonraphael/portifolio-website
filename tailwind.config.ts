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
        bg: {
          base: 'rgb(var(--bg-base))',
          surface: 'rgb(var(--bg-surface))',
          elevated: 'rgb(var(--bg-elevated))',
          overlay: 'rgb(var(--bg-overlay))',
        },
        gold: {
          DEFAULT: 'rgb(var(--gold))',
          light: 'rgb(var(--gold-light))',
          dim: 'rgb(var(--gold-dim))',
        },
        text: {
          primary: 'rgb(var(--text-primary))',
          secondary: 'rgb(var(--text-secondary))',
          muted: 'rgb(var(--text-muted))',
          disabled: 'rgb(var(--text-disabled))',
        },
        border: {
          default: 'var(--border-default)',
          subtle: 'var(--border-subtle)',
          strong: 'var(--border-strong)',
        },
        status: {
          success: 'rgb(var(--status-success))',
          warning: 'rgb(var(--status-warning))',
          error: 'rgb(var(--status-error))',
          info: 'rgb(var(--status-info))',
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
