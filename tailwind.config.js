/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html"],
  theme: {
    extend: {
      animation: {
        'fade-move-in': 'fade-move-in 0.75s ease-out forwards',
      },
      dropShadow: {
        'glow': '0 0 100px rgba(99, 114, 255, 0.13)',
      },
      boxShadow: {
        'button-glow': '0px 6px 11.7px 0px rgba(102, 102, 102, 0.25) inset'
      }
    },
  },
  plugins: [],
}

