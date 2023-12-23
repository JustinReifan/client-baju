/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  darkMode : 'class',
  theme: {
    container:{
      center: true,
      padding: '16px',
    },
    extend: {
      colors:{
        primary : '#14b8a6',
        secondary: '#64748b',
        dark: '#191A1C'
      },
      screens: {
        '2xl' : '1320px',
      }
    },
  },
  plugins: [],
}