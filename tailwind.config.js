/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "fortis-orange": "#E95420",
        "fortis-beige": "#F2D9A0",
        "fortis-darkblue": "#0C2340",
        "fortis-lightblue": "#1F4E79",
      },
      fontFamily: {
        sans: ["Inter", "Arial", "sans-serif"],
      },
      keyframes: {
        slide: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        slide: "slide 25s linear infinite",
      },
    },
  },
  plugins: [],
};
