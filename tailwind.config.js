module.exports = {
  theme: {
    extend: {
      transitionProperty: {
        'm': 'margin'
      },
      translate: {
        '0': '0',
        '-full': '-100%',
        'full': '100%'
      },
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
