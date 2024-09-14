/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          500: '#FFA07A',
          700: '#FF9900',
        },
        yellow: {
          500: '#F7DC6F',
          700: '#F2C464',
        },
        red: {
          500: '#FF69B4',
          700: '#FF3737',
        },
      },
    },
  },
  plugins: [],
}