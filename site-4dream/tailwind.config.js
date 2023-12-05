/** @type {import('tailwindcss').Config} */
export default {
  content: ["src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        "Azul-escuro": "#011B35",
        "Azul-claro": "#B5E6F6",
        "Azul-alternativo": "#5092BD",
        Vermelho: "#EE5C51",
      },
      fontFamily: {
        title: ["Reem Kufi Fun"],
        paragraph: ["Poppins"],
      },
    },
  },
  plugins: [],
};
