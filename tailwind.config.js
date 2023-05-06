
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["**/*.{html, js}", "**/**/*.{html, js}"],
  theme: {
    fontFamily: {
      'sans': ['Josefin Sans', 'sans-serif'],
    },
    screens: {
      'xs': '361px',
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        'primary-color-one': '#371d0f',
        'primary-color-two': '#fff4de',
        'secondary-color-one': '#2c1503',
        'secondary-color-two': '#89471a'
      }
    },
  },
  plugins: [],
}

