module.exports = {
  theme: {
    extend: {
      transitionProperty: {
        'm': 'margin'
      }
    }
  },
  variants: {
    margin: ['responsive', 'hover', 'focus'],
    scale: ['responsive', 'hover'],
  },
  plugins: [
    require('tailwindcss-transitions')(),
    require('tailwindcss-transforms')()
  ]
}
