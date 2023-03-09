/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.js",
    "./components/**/*.js"
  ],
  theme: {
    colors: {
      'peach': '#E48481',
      'darkbg': '#ECDFDE',
      'lightbg': '#FDF8F8',
      'text': '#555555',
      'white': '#FFFFFF',
      'grey': '#F2F2F2',
    },
    extend: {
      fontFamily: {
        title: ['daniel'],
        text: ['Noto Sans'],
      },
    },
  },
  plugins: [],
}
