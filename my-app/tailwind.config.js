/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        black: "#161616",
        red: "#f77069",
      },
      spacing: {
        'p-80': '80%', // p-80% - should work
        'p-30': '30%', // p-80% - should work
      }
    },
  },
  plugins: [],
}
