/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      // Preserve the existing v3 palette instead of adopting v4's OKLCH colors.
      colors: {
        gray: {
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          750: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
        blue: {
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
        },
        green: { 400: '#4ade80', 500: '#22c55e', 600: '#16a34a' },
        cyan: { 400: '#22d3ee' },
        purple: { 400: '#c084fc', 500: '#a855f7' },
        yellow: { 300: '#fde047', 400: '#facc15', 500: '#eab308' },
        red: { 500: '#ef4444' },
        orange: { 500: '#f97316' },
        teal: { 400: '#2dd4bf' },
      },
      // These names changed scale in v4; retain their v3 appearance.
      borderRadius: { DEFAULT: '0.25rem' },
      dropShadow: { sm: '0 1px 1px rgb(0 0 0 / 0.05)' },
      backdropBlur: { sm: '4px' },
    },
  },
  plugins: [],
}
