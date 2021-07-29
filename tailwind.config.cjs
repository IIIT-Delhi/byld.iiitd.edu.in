const colors = require("tailwindcss/colors");

const config = {
  mode: "jit",
  purge: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        ...colors,
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
        secondary: {
          100: "#2A5776",
          200: "#224660",
          300: "#1A364A",
          400: "#152D3E",
          500: "#112533",
          600: "#0D1D28",
          700: "#09141D",
          800: "#050C12",
          850: "#06111A",
          900: "#020203",
        },
        tertiary: {
          100: "#EEF3F7",
          200: "#CDDAE6",
          300: "#ABC2D5",
          400: "#9AB6CC",
          500: "#8AA9C4",
          600: "#799DBB",
          700: "#6891B3",
          800: "#5982A4",
          900: "#497394",
        },
      },
    },
  },
  plugins: [],
};

module.exports = config;
