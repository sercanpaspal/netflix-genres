module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        main: {
          DEFAULT: "var(--color-main)",
        },
        base: {
          DEFAULT: "var(--color-base)",
        },
        "base-reverse": {
          DEFAULT: "var(--color-base-reverse)",
        },
      },
    },
  },
  variants: {
    opacity: ({ after }) => after(["disabled"]),
  },
  plugins: [],
};
