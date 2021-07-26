const colors = require("tailwindcss/colors");

const config = {
  mode: "jit",
  purge: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        ...colors,
        black: {
          500: "#1c1d1f",
          700: "#0c0c0c",
          750: "#0D2030",
          800: "#050C12",
          850: "#06111A",
          900: "#020203",
        },
        primary: {
          base: "#3fada8",
          100: "#f4fbfb",
          200: "#c3e9e7",
          300: "#96d9d6",
          400: "#66c7c2",
          500: "#3faca6",
          600: "#328a86",
          700: "#266965",
          800: "#1a4745",
          900: "#0e2524",
        },
        charcoal: {
          base: "#274156",
          300: "#6891B3",
          400: "#497394",
          500: "#2A5776",
          600: "#102333",
        },
        indigo: {
          600: "#245F8F",
          700: "#00457D",
          800: "#164369",
          900: "#07253D",
          950: "#00192E",
        },
      },
    },
  },
  plugins: [],
};

module.exports = config;
