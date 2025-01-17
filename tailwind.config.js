/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: '#007BFF', // blue
        primaryActive: '#0062CB', // dark blue

        secondary: '#FF9900', // orange 
        secondaryActive: '#EB8D00', // dark orange 
        secondaryPressable: '#FCA219', // light orange

        tertiary: '#34A853', // green
        quaternary: '#FF5722', // red
        quintuple: '#FFD700', // yellow

        whitish: '#F8F9FA',  // close to white
        white: '#FFFFFF', // white

        greeyish: '#ECECED', // close to gray 0
        greyish: '#E0E0E0', // close to gray 1
        grayish: '#4F4F4F', // close to gray
        
        blackish: '#212529',  // close to black
        black: '#000000' // black
      },
      fontFamily: {
        nunitoRegular: ["Nunito_400Regular", "sans-serif"],
        nunitoMedium: ["Nunito_500Medium", "sans-serif"],
        nunitoMediumItalic: ["Nunito_500Medium_Italic", "sans-serif"],
        nunitoSemiBold: ["Nunito_600SemiBold", "sans-serif"],
        nunitoBold: ["Nunito_700Bold", "sans-serif"],
        nunitoExtraBold: ["Nunito_800ExtraBold", "sans-serif"],
      },
    },
    plugins: [],
  }
}