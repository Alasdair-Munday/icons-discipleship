module.exports = {
  purge: {
    mode: "all",
    content: [
      "./src/**/*.{html,njk,md}",
      "./src/_includes/**/*.html",
      "./src/_includes/**/*.njk",
    ],
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
