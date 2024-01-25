/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "gray": "D2D2D2",
        "text-gray":"#626262",
        "green":"#4D9F40"
      },
      backgroundImage:{
        hero: ""
      }
    },
  },
  plugins: [],
}

