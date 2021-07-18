module.exports = {
  purge: [
    './index.html', 
    './src/**/*.{vue,js,ts,jsx,tsx}', 
    '/el-.+$/', 
    '@kangc/v-md-editor/lib/style/base-editor.css',
    '@kangc/v-md-editor/lib/theme/style/github.css',

  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        anyDevice:'100px',
      },
      height: {
        customModal: '60rem',
        customContent: '99%',
      },
      width: {
        customModal: '60rem',
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#333',
            a: {
              color: '#3182ce',
              '&:hover': {
                color: '#2c5282',
              },
            },
          },
        },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
