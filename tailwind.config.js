module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
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
    extend: {
      backgroundColor: ['dark'],
      textColor: ['dark'],
      borderColor: ['dark']
    }
  },
  plugins: [],
};
