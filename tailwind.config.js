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

      shadow: {
        boxShadow: "0 -4px 6px rgba(0, 0, 0, 0.1)",
      },
      keyframes: {
        bounceVertical: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-100px)" }, // Adjust height
        },
      },
      animation: {
        "bounce-custom": "bounceVertical 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
