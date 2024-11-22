/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGreen: '#8fd14f',
        customBlue:"#17173A"
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'], 
        serif: ['Playfair Display', 'serif'], 
        poppins: ['Poppins', 'sans-serif'], 
        lora: ['Lora', 'serif'],
        montserrat: ['Montserrat', 'sans-serif'], 
        merriweather: ['Merriweather', 'serif'], 
        nunito: ['Nunito', 'sans-serif'], 
        raleway: ['Raleway', 'sans-serif'], 
        alata: ['Alata', 'sans-serif'],
        helvetica: ['Helvetica', 'Arial', 'Lucida', 'sans-serif']
      },
      
      shadow:{
        boxShadow: '0 -4px 6px rgba(0, 0, 0, 0.1)'
      },
        keyframes:{
             'border-spin':{
              '100%':{
                transform:'rotate(-360deg)'
              },
             },
        },
        animation:{
          'border-spin':'border-spin 7s linear infinite'
        },
        
    },
  },
  plugins: [],
}