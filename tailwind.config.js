/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '375px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1440px',
      // => @media (min-width: 1440px) { ... }

      '3xl': '1800px',
      // => @media (min-width: 1800px) { ... }
    },
    colors: {
      primary: 'hsl(230, 35%, 7%)',
      white: {
        'trans-4-percents': 'rgba(255, 255, 255, 4%)',
        'trans-14-percents': 'rgba(255, 255, 255, 14%)',
      },
      text: {
        'very-white': 'hsl(0, 0%, 100%)',
        blue: 'hsl(231, 77%, 90%)',
      },
      devide: '#979797',
    },
    extend: {
      backgroundImage: {
        'bg-desktop': "url('../assets/home/background-home-desktop.jpg')",
        'bg-tablet': "url('../assets/home/background-home-tablet.jpg')",
        'bg-mobile': "url('../assets/home/background-home-mobile.jpg')",
      },
      gridTemplateColumns: {
        'global-nav': 'max-content 1fr max-content',
        'global-nav-tablet': 'max-content 1fr',
        'mincontent-1fr': 'min-content, 1fr',
        '1fr-max-content': '1fr max-content',
        'max-content-1fr': 'max-content 1fr',
        '4-max-content': 'repeat(4, max-content)',
        '4-min-content': 'repeat(4, min-content)',
      },
      gridTemplateRows: {
        'max-content-1fr': 'max-content 1fr',
        '3-max-content': 'repeat(3, max-content)',
      },
      width: {
        '112%': '112%',
        122: '122%',
      },
    },
  },
  plugins: [],
};
