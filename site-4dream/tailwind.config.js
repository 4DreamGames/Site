/** @type {import('tailwindcss').Config} */
export default {
  content: ["src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'cinza-claro': '#CCCCCC',
        'cinza-escuro': '#555555',
        'azul-1': '#334455',
        'azul-2': '#223344',
        'azul-3': '#1A2530',
        'laranja': '#FF7733',
        'marrom-1': '#663322',
        'marrom-2': '#442211',
        'marrom-3': '#553322',
        'marrom-4': '#331111',
        'preto': '#111111'
      },
      fontFamily: {
        title: ['Reem Kufi Fun'],
        paragraph: ['Nunito Sans']
      }
    },
  },
  plugins: [],

};
