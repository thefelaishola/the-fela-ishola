/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0A0A0A",
        paper: "#FFFFFF",
        ember: "#D9611A",
        "ember-dark": "#B84E12",
        stone: {
          50: "#FAFAF9",
          100: "#F2F1EF",
          200: "#E4E2DE",
          300: "#CBC8C2",
          400: "#9C978D",
          500: "#736E63",
          600: "#524E46",
          700: "#3A372F",
          800: "#242220",
          900: "#141311",
        },
      },
      fontFamily: {
        display: ["'Fraunces'", "Georgia", "serif"],
        sans: ["'Inter'", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1320px",
      },
      letterSpacing: {
        widest2: "0.28em",
      },
      transitionDuration: {
        1200: "1200ms",
        1500: "1500ms",
      },
    },
  },
  plugins: [],
};
