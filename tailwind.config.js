/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      rotate:{
        calc:'calc(30deg * var(--i))',
        calc2:'calc(-30deg * var(--i))'
        
      }
    },
  },
  plugins: [],
}

