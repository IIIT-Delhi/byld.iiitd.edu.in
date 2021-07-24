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
        primary: "#3fada8",
      },
    },
  },
  plugins: [],
};

module.exports = config;
