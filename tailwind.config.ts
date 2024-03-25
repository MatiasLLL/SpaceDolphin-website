/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'space-blue': '#7fdbff',
        'space-deep': '#050c17',
        'space-stars': '#1c1b33',
        'space-light-blue': '#b3e5fc',
        'new': '#5F91C7',
      }, // #0b3d91 // #0f51c1
      animation: {
        "meteor-effect": "meteor 5s linear infinite",
      },
      keyframes: {
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
          "70%": { opacity: "1" },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: "0",
          },
        },
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'satoshi': ['Satoshi', 'sans-serif'],
      },
    },
  },
  plugins: [],
};





// // const defaultTheme = require("tailwindcss/defaultTheme");
 
// // const colors = require("tailwindcss/colors");
// // const {
// //   default: flattenColorPalette,
// // } = require("tailwindcss/lib/util/flattenColorPalette");

// // import defaultTheme from 'tailwindcss/defaultTheme';
// // import colors from 'tailwindcss/colors';
// // import flattenColorPalette from 'tailwindcss/lib/util/flattenColorPalette';

// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   darkMode: "class",
//   theme: {
//     extend: {},
//   },
//   plugins: [addVariablesForColors],
//   // plugins: [],
// };

// function addVariablesForColors({ addBase, theme }: any) {
//   let allColors = flattenColorPalette(theme("colors"));
//   let newVars = Object.fromEntries(
//     Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
//   );
 
//   addBase({
//     ":root": newVars,
//   });
// }
