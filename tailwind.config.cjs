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
          900: "#000",
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
      },
    },
  },
  plugins: [],
};

module.exports = config;
