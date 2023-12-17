/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blueSky: "#50B2EA",
        blueMarine: "#19435A"

      }
    },
  },
  plugins: [],
}

