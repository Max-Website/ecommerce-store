/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}",
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
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
