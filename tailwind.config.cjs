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
        '18': '4.5rem',
        '22': '5.5rem',
        '68': '17rem',
        '72': '18rem',
        '74': '18.5rem',
        '76': '19rem',
        '80': '20rem',
        '84': '21rem',
        '88': '22rem',
        '92': '23rem',
        '94': '23.5rem',
        '96': '24rem',
        '100': '25rem',
        '104': '26rem',
        '128': '32rem',
        '136': '34rem',
        '144': '36rem',
        '148': '37rem',
        '152': '38rem',
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
    scale: {
      80: '0.8',
    }
    },
  },
  plugins: [],
}
