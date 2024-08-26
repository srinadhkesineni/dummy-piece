/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        one: "var(--primary-color)",
        two: "var(--secondary-color)",
        three: "var(--tertiary-color)",
        four: "var(--quaternary-color)",
      },
    },
  },
  plugins: [],
};
