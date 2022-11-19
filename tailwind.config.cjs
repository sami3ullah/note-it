/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      "background": "#F8F9FB",
      "foreground": "#FFFFFF",
      "primary": "#13678A",
      "secondary": "#45C4B0",
      "tertiary": "#9AEBA3",
      "hover": "#e8e9ea"
    },
    fontFamily: {
      sans: ['Jost', 'sans-serif'],
    },
  },
  plugins: [],
}

// 'background': '#F8F9FB',
//         'foreground': '#FFFFFF'
//         'primary': '#7d51bc',
//         'secondary': '#D5C0B5'