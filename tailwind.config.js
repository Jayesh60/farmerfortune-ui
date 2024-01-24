/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "gray": "D2D2D2",
        "text-gray":"#626262"
      },
      backgroundImage:{
        hero: ""
      }
    },
  },
  plugins: [],
}

