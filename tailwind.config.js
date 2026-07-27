/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation:{
        'spin-slow': 'spin 6s linear infinite',
      },
      colors: {
        clay: {
          50: '#FBF3EE',
          100: '#F6E4D9',
          200: '#EFC8B0',
          300: '#E8A87F',
          400: '#E08D5C',
          500: '#D97757',
          600: '#C15F3C',
          700: '#9C4A2F',
          800: '#78392A',
        },
        cream: {
          50: '#FAF9F5',
          100: '#F5F4ED',
          200: '#EDEAE0',
        },
        ink: {
          900: '#141310',
          800: '#1C1A16',
          700: '#26231D',
        },
      },
    },
  },
  plugins: [],
}

