module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxl:'1440px',
      x4k:'2560px',
    },
    extend: {
      colors: {
        blackMate: '#0a0a0a',
        info: {
          100: '#1a1a1a',
          200: '#1b1b1b',
          300: '#1c1c1c',
          400: '#1d1d1d',
          500: '#1e1e1e',
          600: '#1f1f1f',
        }
      },
      backgroundImage: theme => ({
        'main-sm': "url('/images/palpitations-sm.jpg')",
        'main-lg': "url('/images/palpitations-lg.jpg')",
        'cv-sm': "url('/images/cv-sm.jpg')",
        'cv-lg': "url('/images/cv-lg.jpg')",
      }),
    spacing: {
      px: '1px',
      '64': '16rem',
      '72': '18.75rem',
      '78':'19.5rem',
      '82':'20.5rem',
      '96': '24rem',
      '128': '32rem',
      },
    borderRadius: {
      fullop: '50%',
    },
    fontFamily: {
      Quick: ['Quicksand', 'sans-serif'],
      Roboto: ['Roboto', 'sans-serif'],
    },
  variants: {},
  plugins: [],
    }
  }
}
