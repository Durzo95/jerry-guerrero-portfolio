/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  safelist: [
    {
      pattern: /text-*/,
    }
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          750: '#374151',
        }
      }
    },
  },
  plugins: [],
}
