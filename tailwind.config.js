/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#3E7A6F",
        accent: "#7DFFE7",
        dark: "#3F3D56",
        light: "#F5F1F1",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['"Space Grotesk"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
