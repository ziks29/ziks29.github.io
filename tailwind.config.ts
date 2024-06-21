import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        nile: {
          50: "#f0f2fd",
          100: "#e4e7fb",
          200: "#ced2f7",
          300: "#afb5f2",
          400: "#8f90ea",
          500: "#7b74e0",
          600: "#6b59d2",
          700: "#5c4ab8",
          800: "#4b3e95",
          900: "#403877",
          950: "#151226",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-radial-at-t":
          "radial-gradient(at top, var(--tw-gradient-stops))",
        "gradient-radial-at-tr":
          "radial-gradient(at top right, var(--tw-gradient-stops))",
        "gradient-radial-at-r":
          "radial-gradient(at right, var(--tw-gradient-stops))",
        "gradient-radial-at-br":
          "radial-gradient(at bottom right, var(--tw-gradient-stops))",
        "gradient-radial-at-b":
          "radial-gradient(at bottom, var(--tw-gradient-stops))",
        "gradient-radial-at-bl":
          "radial-gradient(at bottom left, var(--tw-gradient-stops))",
        "gradient-radial-at-l":
          "radial-gradient(at left, var(--tw-gradient-stops))",
        "gradient-radial-at-tl":
          "radial-gradient(at top left, var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        //Radial with 20% corner top right
        "gradient-radial-corner-tr":
          "radial-gradient(at calc(40% + 10px) top right, var(--tw-gradient-stops))",
      },
      container: {
        center: true,
        padding: "1rem",
      },
    },
  },
  plugins: [],
};
export default config;
