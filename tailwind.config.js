/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
            colors: {
                default: '#0B2447',
                dark: '#19376D',
                light: '#576CBC',
                lighter: '#A5D7E8',
                primary: {
                  DEFAULT: '#3b71ca',
                  50: '#e7f0fe',
                  100: '#c2d4fa',
                  200: '#95b7f5',
                  300: '#669aef',
                  400: '#417be8',
                  500: '#3b71ca',
                  600: '#335da9',
                  700: '#2a4b89',
                  800: '#213969',
                  900: '#19284a',
                },
                secondary:'#abc2e8'
            },
        },
        variants: {},
        plugins: [],
  },
  plugins: [],
}