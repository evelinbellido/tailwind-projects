module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx,html}', './public/index.html'],
    darkMode: true, // o 'media' o 'class'
    theme: {
      extend: {
        colors: {
          'custom-color': '#1c1c1e',
        },
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }