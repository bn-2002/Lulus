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
        xl: '2rem',
      },
    },
    extend: {},
  },
  variants : {
    backgroundColor: ['focus','hover','focus-within','group-hover','dark'],
    extend : {
      width : ['hover'],
    },
  },
  plugins: [require('tailwindcss-debug-screens')],
};

