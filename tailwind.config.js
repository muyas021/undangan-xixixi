module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    extend: {
      maxWidth: {
        480: "30rem",
      },
      maxHeight: {
        864: "54rem",
      },
      colors: {
        sage: {
          200: "#D5D9C7",
          500: "#848B6C",
          700: "#565E39",
        },
      },
      screens: {
        andro: "420px",
      },
      rotate: {
        min180: "-180deg",
      },
    },
  },
  variants: {},
  plugins: [],
};
