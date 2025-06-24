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
        '96': '24rem',
        '128': '32rem',
        '144': '36rem',
        '160': '40rem',
        '192': '48rem',
        '256': '64rem',
    },
    },
  },
  plugins: [],
}
