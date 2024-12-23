/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        nunitoRegular: ["Nunito_400Regular", "sans-serif"],
        nunitoMedium: ["Nunito_500Medium", "sans-serif"],
        nunitoMediumItalic: ["Nunito_500Medium_Italic", "sans-serif"],
        nunitoSemiBold: ["Nunito_600SemiBold", "sans-serif"],
        nunitoBold: ["Nunito_700Bold", "sans-serif"],
      },
    },
    plugins: [],
  }
}