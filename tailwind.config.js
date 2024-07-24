/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#475569',
        'primary-light': '#cbd5e1',
        'primary-dark': '#0f172a',
      },
    },
  },
  plugins: [],
};
