/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  /*purge: ["./index.html", "./src/**//*.{js,ts,jsx,tsx}"],*/
  content: [
    "./src/**/*.{html,js,jsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],

  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        blue: {
          400: '#60A5FA',
          600: '#2563EB',
          700: '#1D4ED8',
          800: '#1E40AF',
        },
      },
    },
  },
};

