/** @type {import('tailwindcss').Config} */
import keepPreset from "keep-react/preset";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/keep-react/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [keepPreset],

  theme: {
    extend: {
      boxShadow: {
        "3xl": "20px 70px 120px 20px rgba(9, 242, 255, 0.41)",
      },
    },
  },
  plugins: [],
};
