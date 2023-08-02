/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/*",
    "./sections/*",
    "./components/*",
  ],
    theme: {
      container: {
    
        padding:{
          DEFAULT: '2rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
    },
  
  plugins: [],
}

