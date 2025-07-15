const { withTV } = require("tailwind-variants/transformer");

module.exports = withTV({
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.{css}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#FF5733",
          secondary: "#3366FF",
          nav: "#9A9A9A",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["SuisseIntl", "sans-serif"],
      },
      spacing: {
        col: "4.5vw",
        gutter: "2vw",
        card: "200px",
        section: "5rem",
      },
      transitionDuration: {
        300: "300ms",
      },
      transitionDelay: {
        200: "200ms",
      },
      transitionTimingFunction: {
        "in-out-custom": "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [],
});
