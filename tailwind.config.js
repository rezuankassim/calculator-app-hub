const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Spartan", ...defaultTheme.fontFamily.sans],
      },
      textColor: {
        primary: "var(--color-text-primary)",
        secondary: "var(--color-text-secondary)",
        "button-secondary": "var(--color-text-button-secondary)",
        "button-tertiary": "var(--color-text-button-tertiary)",
      },
      backgroundColor: {
        primary: "var(--color-bg-primary)",
        secondary: "var(--color-bg-secondary)",
        darker: "var(--color-bg-darker)",
        "button-primary": "var(--color-button-primary)",
        "button-primary-hover": "var(--color-button-primary-hover)",
        "button-secondary": "var(--color-button-secondary)",
        "button-secondary-hover": "var(--color-button-secondary-hover)",
        "button-tertiary": "var(--color-button-tertiary)",
        "button-tertiary-hover": "var(--color-button-tertiary-hover)",
      },
      boxShadow: {
        "button-primary":
          "inset 0px -4px 0px var(--color-button-primary-shadow)",
        "button-secondary":
          "inset 0px -4px 0px var(--color-button-secondary-shadow)",
        "button-tertiary":
          "inset 0px -4px 0px var(--color-button-tertiary-shadow)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
