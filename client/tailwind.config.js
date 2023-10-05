/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'texto-violeta': '#2B0C5A',
      },
      screens:{
        'sm': '0px',
        'md': '480px',
        'lg': '1024px',
        'xl': '1280px',
      }
    },
  },
  plugins: [],
}
