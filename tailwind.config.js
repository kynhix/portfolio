/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
export default {
  content: ["./index.html"],
  theme: {
    extend: {
      animation: {
        'fade-move-in': 'fade-move-in 0.75s ease-out forwards',
        'move-across': 'move-across 60s ease infinite',
      },
      backgroundImage: {
        'glow': "url('/BG.png')",
      },
      dropShadow: {
        'glow': '0 0 100px rgba(99, 114, 255, 0.13)',
      },
      boxShadow: {
        'button-glow': '0px 6px 11.7px 0px rgba(102, 102, 102, 0.25) inset'
      }
    },
  },
  plugins: [
    plugin(function({ addUtilities }) {
      addUtilities({
        '.drag-none': {
          '-webkit-user-drag': 'none',
          '-khtml-user-drag': 'none',
          '-moz-user-drag': 'none',
          '-o-user-drag': 'none',
          'user-drag': 'none'
        },
      });
    })
  ],
}

