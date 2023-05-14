/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      primary: 'hsl(230, 35%, 7%)',
      text: {
        very_white: 'hsl(0, 0%, 100%)',
        blue: 'hsl(231, 77%, 90%)',
      },
    },
    extend: {},
  },
  plugins: [],
};
