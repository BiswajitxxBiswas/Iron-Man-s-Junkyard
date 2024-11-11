/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./public/IronMan2.webp')",
        'roles-pattern': "url('./public/IronMan1.jpg')",
        'items-pattern': "url('./public/IronMan6.jpg')",
        'inspiration-pattern': "url('./public/IronMan5.jpg')",
      }
    }
  },
  plugins: [],
}