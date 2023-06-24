/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: '#2D314D',
        green: '#31D35C',
        cyan: '#2BB7DA',
        neutral: {
          '100': '#9698A6',
          '200': '#F3F4F6',
          '300': '#FAFAFA',
        },
        white: '#FFFFFF',
      }
    },
  },
  plugins: [],
}
