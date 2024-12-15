/** @type {import('tailwindcss').Config} */
/* const defaultTheme = require("tailwindcss/defaultTheme")
let newFontSize = {}
for (let [key, value] of Object.entries(defaultTheme.fontSize)) {
  newFontSize[key] = [
    `${(parseFloat(value[0].replace("rem", "")) * 1.1).toFixed(3)}rem`,
    {
      lineHeight:
        value[1].lineHeight !== "1"
          ? `${(
              parseFloat(value[1].lineHeight.replace("rem", "")) * 1.1
            ).toFixed(3)}rem`
          : value[1].lineHeight,
    },
  ]
} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      /* fontSize: newFontSize, */
      fontFamily: {
        body: [
          "circe",
          "Roboto",
          "BlinkMacSystemFont",
          "-apple-system",
          '"Segoe UI"',
          "Oxygen",
          "Ubuntu",
          "Cantarell",
          '"Fira Sans"',
          '"Droid Sans"',
          '"Helvetica Neue"',
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
}
