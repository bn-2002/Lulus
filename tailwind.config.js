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
        '4xl' : 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
        '5xl' : 'rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px',
        '6xl' :'rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px',
      }
    },
  },
  variants : {
    backgroundColor: ['focus','hover','focus-within','group-hover','dark'],
    padding: ['responsive', 'children', 'children-hover', 'children-first', ],     
    extend : {
      width : ['hover'],
    },
  },
  plugins: [
    require('tailwindcss-debug-screens'),
    require('tailwind-children')
  ],
};

