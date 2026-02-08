/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
  'crimson-depth': '#641d2bff',  // Stays Red
  'warm-sand': '#B38F6F',      // Stays Gold
  'soft-pearl': '#111010ff',     // Was Light, now DARK (The background)
  'obsidian-black': '#F2F1ED', // Was Dark, now LIGHT (The text)
},
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}