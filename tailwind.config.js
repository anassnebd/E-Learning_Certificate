/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
   
    extend: {
      colors: {
        'primary_purple':'#3D469C',
        'gold': '#F6B14A',
        'primary_blue' : '#365CF0'
      },
    },
    
  },
  plugins: [],
}