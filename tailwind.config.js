/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customGreen: "#8fd14f",
        customBlue: "#17173A",
        customBg: "#A4A4A4",
        customGray: "#B5BDBC",
        oracleGray: "#abb8c3",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        serif: ["Playfair Display", "serif"],
        poppins: ["Poppins", "sans-serif"],
        lora: ["Lora", "serif"],
        montserrat: ["Montserrat", "sans-serif"],
        merriweather: ["Merriweather", "serif"],
        nunito: ["Nunito", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
        alata: ["Alata", "sans-serif"],
        helvetica: ["Helvetica", "Arial", "Lucida", "sans-serif"],
      },
      keyframes: {
        spinSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'spin-slow': 'spinSlow 5s linear infinite',
        wave: 'waveAnimation 4s ease-in-out infinite'  
      },
    },
  },
  plugins: [],
};
