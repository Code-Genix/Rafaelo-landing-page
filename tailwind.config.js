/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'dm-sans': ['DM Sans', 'sans-serif'],
        'staatliches': ['Staatliches', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'badrock': ['Badrock', 'Impact', 'Arial Black', 'sans-serif'],
        'cook-conthic': ['Cook Conthic', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
