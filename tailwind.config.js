module.exports = {
  purge: {
    mode: "all",
    content: ["./**/*.html"],
    options: {
      whitelist: [],
    },
  },
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {},
    },
    fontFamily: {
      sans: ['"Proxima Nova"', 'ui-sans-serif']
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
