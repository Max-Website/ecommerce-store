/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}",
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        brown: '#a1785c',
        transparent: 'transparent',
      },
      minWidth: {
        720: '720px'
      },
      minHeight: {
        5: '5rem'
      }
    },
  },
  plugins: [],
}
