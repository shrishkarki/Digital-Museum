module.exports = {
  // content: ["./src/**/*.{js,jsx,ts,tsx}",],
  content: ['./src/**/*.{html,js,jsx,ts,tsx}', './node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    screens: {
      sm: '320px',
      tm:'481px',
      tmd:'640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxl:'1360px',
    },
    extend: {
      fontFamily:{
        "custom":'Water Brush',
        "custom":"PT Serif"
      }
     
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
