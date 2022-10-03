/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: '472px',
        md: '900px',
        lg: '1024px',
        xl: '1280px',
        xsm: '1536px',
      },
      fontFamily: {
        Proxima: "ProximaNova-Regular"
      }
    },
  },
  plugins: [],
}
