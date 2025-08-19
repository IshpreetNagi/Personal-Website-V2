/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,js,jsx,ts,tsx}"],
  theme: {
      screens: {
      sm: { max: "430px" },        // Phones (up to biggest iPhone)
      md: { min: "431px", max: "1439px" }, // Tablets & laptops up to 14"
      lg: { min: "1440px" }        // Laptops & monitors 15" and larger
    },
    extend: {
      fontFamily: {
        sans: ["Outfit", "sans-serif"],
        mono: ["Roboto Mono", "monospace"],
      },
      fontSize: {
        xxs: '0.625rem',
      },
      spacing: {
        '18': '4.5rem',
        '30': '7.5rem',
        '22': '5.5rem',
        '54': '13.5rem',
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
        '164': '41rem',
        '168': '42rem',
        '176': '44rem',
        '184': '46rem',
        '192': '48rem',
        '196': '49rem',
        '200': '50rem',
        '224': '56rem',
        '256': '64rem',
        '320': '80rem',
        '344': '86rem',
        '350': '87.5rem',
        '356': '89rem',
        '360': '90rem',
        '384': '96rem',
        '500': '125rem'
    },
    scale: {
      39: '0.39',
      60: '0.6',
      65: '0.65',
      80: '0.8',
      170: '1.7',
      140: '1.4',
      135: '1.35',
    }
    },
  },
  plugins: [],
}
