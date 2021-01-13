module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      textColor: {
        'blue-nac': '#3D5975',
        'yellow-nac': '#EDCD1F'
      },
      backgroundColor: {
        'yellow-nac': '#EDCD1F',
        'blue-nac': '#3D5975'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
