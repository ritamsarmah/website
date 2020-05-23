import Typography from "typography"

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.666,
  bodyColor: "black",
  googleFonts: [
    {
      name: "Raleway",
      styles: ["700"],
    },
    {
      name: "Nunito Sans",
      styles: ["400", "400i", "700", "700i"],
    },
  ],
  headerFontFamily: [
    "Raleway",
    "Avenir Next",
    "Helvetica Neue",
    "Segoe UI",
    "Helvetica",
    "Arial",
    "sans-serif",
  ],
  bodyFontFamily: ["Nunito Sans", "sans-serif"],
})

export default typography
