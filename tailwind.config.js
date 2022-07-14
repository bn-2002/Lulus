/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('./compony_styles')],
  corePlugins : {
    float:false,
  },
  purge: {
    enabled: false,
    content: ['./dist/**/*.html'],
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    debugScreens: {
      position: ['top', 'left'],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '0.5rem',
        sm: '1rem',
        lg: '1.5rem',
        xl: '5rem',
      },
    },
    extend: {
      boxShadow: {
        '3xl': 'rgba(0, 0, 0, 0.15) 0px 5px 15px 0px',
        '4xl' : 'rgba(0, 0, 0, 0.35) 0px 5px 15px'
      }
    },
  },
  variants : {
    backgroundColor: ['focus','hover','focus-within','group-hover','dark'],
    extend : {
      width : ['hover'],
    },
  },
  plugins: [require('tailwindcss-debug-screens')],
};

