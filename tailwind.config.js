/** @type {import('tailwindcss').Config} */
export default {
      content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}",
      ],
      theme: {
        extend: {
          fontFamily: {
            long: ["Long", "sans-serif"],
            round: ["Round", "sans-serif"],
            "round-bold": ["Round Bold", "sans-serif"],
          },
          colors: {
            yellow: "#fff9cb",
            pink: "#ffb0c4",
          },
        },
      },
      plugins: [],
    };
    