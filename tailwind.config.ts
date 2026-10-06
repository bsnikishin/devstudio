import type { Config } from 'tailwindcss'

// Catalogue style: warm paper, ink, one vermilion accent. Per-app colours for the app pages
// live in src/data/apps.ts and are applied with inline CSS variables, not Tailwind classes.
const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        paper: '#F2EEE5',
        'paper-deep': '#E9E3D6',
        ink: '#171614',
        'ink-soft': '#3B3833',
        muted: '#6E695F',
        rule: '#D8D1C2',
        accent: '#C8462B',
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'var(--serif-fallback)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'var(--sans-fallback)', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
        unbounded: ['var(--font-unbounded)', 'var(--sans-fallback)', 'sans-serif'],
      },
      maxWidth: {
        page: '1180px',
        prose: '42rem',
      },
    },
  },
  plugins: [],
}
export default config
