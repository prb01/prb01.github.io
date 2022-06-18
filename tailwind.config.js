module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        top: "0 -2px 5px 2px rgba(0, 0, 0, 0.1)",
      },
      colors: {
        main: "hsl(0, 0%, 12%)",
        // accent: "hsl(17, 100%, 56%)",
        accent: "#f0484b",
        accentAlt: "#0d4361",

        offWhite: "hsl(0, 0%, 95%)",
        lightGrey: "hsl(0, 0%, 40%)",
        lightestGrey: "hsl(0, 0%, 80%)",
      },
      fontFamily: {
        nav: ["RubikMonoOne"],
      },
      fontSize: {
        "7vw": "7vw",
      },
      height: {
        "90vh": "90vh",
        screenWithNav: "calc(100vh - 2.5rem)",
      },
      maxWidth: {
        "9/10": "90%",
      },
      spacing: {
        screenX: "calc(-50vw)",
        screenY: "calc(-33%)",
      },
      lineHeight: {
        zero: "0",
      },
    },
  },
  plugins: [],
}
