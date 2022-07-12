/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
module.exports = {
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: colors.white,
      black: colors.black,
      blue: colors.blue,
      yellow: colors.yellow,
      gray: colors.blueGray,
      turquoise: colors.cyan,
      green: colors.lime,
      red: colors.rose,
    },
    extend: {
      fontFamily: {
        headline: ['TafelSans'],
        paragraph: ['TafelSans'],
        main: ['TafelSans'],
        brand : ['Honey'],
      },
      colors: {
        mainColor: '#1E293B',
        gray_primary:'#222222',
      },
      spacing: {
        13: '3.5rem',
      },
    },
  },
};

