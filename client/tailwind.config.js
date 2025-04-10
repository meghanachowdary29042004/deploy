/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2C3E50',    // Deep blue-gray
        secondary: '#E74C3C',  // Coral red
        accent: '#3498DB',     // Bright blue
        neutral: '#ECF0F1',    // Light gray
        'custom-dark': '#2C3E50',
        'custom-light': '#F5F6FA',
      }
    },
  },
  plugins: [],
}
