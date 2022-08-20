/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'mainLogo': ['Black Ops One', 'Montserrat', sans-serif],
      'mainTxt': ['Montserrat', sans-serif]
    },
    extend: {
      zIndex: {
        '100': '100',
      }
    },
  },
  plugins: [],
}
