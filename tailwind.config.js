/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#14bdce',
        white: '#fff',
        secondary: '#15a9c1',
        green: '#2ae12a',
        red: '#ea2626',
        yellow: '#f9c854',
        gray: '#cec3c3'
      }
    },
  },
  plugins: [],
}

