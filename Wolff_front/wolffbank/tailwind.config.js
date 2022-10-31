module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    './src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js',
  ],
  theme: {
    extend: {},
    colors: {
      roxonav: '#bc98ff',
      roxonavaberta: '#dcbfff',
      cinzaFundo: '#f2ebfb',
      footercor: '#161a1d',
      corTexto: '#FFFF',
      preto: '#212529',
      transparente:'#ffffff00',
      loginCor:'#f1f5f9',
    }
  },
  plugins: [
    //require('tw-elements/dist/plugin')
  ],
}