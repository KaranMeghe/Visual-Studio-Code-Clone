/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens:{
      sm : '480px',
      md : '768px',
      lg : '1020px',
      xl : '1440px',
    },
    extend: {
      colors:{
        darkGray : '#2c2c32',
        midGray : '#9d9d9d',
        textGray : '#444',
        bgGray : '#333',
        midBlack : '#25252b',
        visualBlue : '#0066b8',
        visualBlueHover : '#005396',
        visualTextBlue : ' #0098ff',
        bgWhite : ' #f5f5f5',
      },

      fontFamily : {
        sans: ['Rubik', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
