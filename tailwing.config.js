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
        primary: '#8B4513',
        secondary: '#D2691E',
        accent: '#FF6347',
        gold: '#FFD700',
      },
      fontFamily: {
        'hindi': ['Devanagari Sangam MN', 'serif'],
      },
    },
  },
  plugins: [],
}