/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: [
        '"Livvic, serif"',
        '"Judson, sans-serif"',
        '"Nanum Gothic, serif"',
        {
          fontFeatureSettings: '"tnum", "lnum"',
        },
      ],
    },

    extend: {
      // backgroundImage: {

      // },

      colors: {
        lightGreen: "#6d8c54",
        mainGreen: "#334b35",
        darkGreen: "#263c28",
        golden: "#F7C35F",
        black: "#0C0C0C",
        gray: "#545454",
        crimson: " #F5EFDB",
        lightGrey: "#AAAAAA",
        white: "#ffffff",
        imageColor: "#2d442f",
        lightBack: "#d9d9d9",
        variantGreen: "#344C31"
      },

      height: {
        screen: "100dvh",
      },

      // a: {
      //   "color": "unset",
      //   "text-decoration": "none"
      // }

    },
    screens: {
      
      "sm": "650px",
      "tablet": "800px",
      "md": "1024px",
      "lg": "1200px",
      // "tablet": "650px",
      // => @media (min-width: 640px) { ... }
      // "laptop": "1024px",
      // // => @media (min-width: 1024px) { ... }

      // "desktop": "1280px",
      // // => @media (min-width: 1280px) { ... }
    }
  },
  plugins: [],
}

// //