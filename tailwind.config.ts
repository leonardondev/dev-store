import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-inter)',
      },
      gridTemplateColumns: {
        '1-lg': 'minmax(0, 1fr) 32rem',
      },
      aspectRatio: {
        rectangle: '4 / 3',
      },
      inset: {
        '1/10': '10%',
      },
    },
  },
  plugins: [],
} satisfies Config
