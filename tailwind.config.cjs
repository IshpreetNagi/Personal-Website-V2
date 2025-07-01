/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Outfit", "sans-serif"],
        mono: ["Roboto Mono", "monospace"],
      },
      spacing: {
        '72': '18rem',
        '80': '20rem',
        '84': '21rem',
        '88': '22rem',
        '92': '23rem',
        '94': '23.5rem',
        '96': '24rem',
        '100': '25rem',
        '128': '32rem',
        '144': '36rem',
        '160': '40rem',
        '168': '42rem',
        '176': '44rem',
        '184': '46rem',
        '192': '48rem',
        '200': '50rem',
        '224': '56rem',
        '256': '64rem',
        '320': '80rem',
        '360': '90rem',
        '384': '96rem',
    },
    },
  },
  plugins: [],
}
