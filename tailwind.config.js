/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    theme: {
      screens: {
          sm: "640px",
          md: "800px",
          lg: "1024px",
          xl: "1280px",
      },
  },
  },
  plugins: [],
}
