module.exports = {
  theme: {
    extend: {
      transitionProperty: {
        'm': 'margin',
        'bg': 'background-color',
        'transform': 'transform',
        'shadow': 'shadow'
      },
      translate: {
        '0': '0',
        '-full': '-100%',
        'full': '100%'
      },
      inset: {
        '1/3': '33%',
        '1/4': '25%',
        '1/5': '20%'
      },
      scale: {
        '110': ['1.1', '1.1']
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
