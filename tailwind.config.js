/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
    ],
  },
  content: ["./src/**/*.{html,njk,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}

