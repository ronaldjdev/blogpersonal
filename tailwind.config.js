/** @type {import('tailwindcss').Config} */
// import typography from '@tailwindcss/typography'
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx }',
  ],
  theme: {
    extend: {
    },
    colors:{
      "rich-black":"#030014",
      "tropical-indigo":"#BA9CFF79",
      "tropical-indigo-fade":"#BA9CFF0E",
      white:"#ffff",
      
    }
  },
  plugins: [require('@tailwindcss/typography')],
}

