/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'orangee': '#E76C45'
      }
    },
  },
  plugins: [require('@material-tailwind/react'),],
}

