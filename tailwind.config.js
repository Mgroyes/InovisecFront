/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {

      colors:{

        primary:"#0B1F2D",

        secondary:"#1EC8C8",

        accent:"#F5A623"

      },

      fontFamily:{
        sans:["Inter","sans-serif"]
      }

    },
  },
  plugins: [],
}