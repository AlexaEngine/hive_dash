/** @type {import('tailwindcss').Config} */

const config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        13: 'repeat(13, minmax(0, 1fr))',
      },
      colors: {
        blue: {
          400: '#2589FE',
          500: '#0070F3',
          600: '#2F6FEB',
        },
      },
      animation: {
        shimmer: 'shimmer 1.5s infinite', // Add the custom shimmer animation
      },
      keyframes: {
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },  // Ensure '0%' is defined
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};

export default config;
