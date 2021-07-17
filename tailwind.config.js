module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', '/el-.+$/'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        customModal: '60rem',
      },
      width: {
        customModal: '60rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
