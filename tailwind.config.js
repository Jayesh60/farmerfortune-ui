/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "gray": "#D2D2D2",
        "bg-gray" : "#EBEBEB",
        "text-gray":"#626262",
        "green":"#4D9F40"
      },
      backgroundImage:{
        hero: ""
      },
      boxShadow:{
        'card': "0px 4px 10px 0px #00000040;"
      }
    },
  },
  plugins: [],
}

