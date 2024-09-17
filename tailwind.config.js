/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'img': "url('../public/banner2.png')",
        'img1': "url('../public/home-security.webp')",
      }
    },
  },
  plugins: [],
}