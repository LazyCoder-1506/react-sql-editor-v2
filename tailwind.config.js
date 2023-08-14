/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light': '#E8EAF5',
        'primary': '#2026D2',
        'primary-fade': '#DDDEFF'
      },
      boxShadow: {
        'r-md': '4px 0 6px -1px rgba(0, 0, 0, 0.1), -2px 0 4px -1px rgba(0, 0, 0, 0.06)'
      }
    },
  },
  plugins: [],
}