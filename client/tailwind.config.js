/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        "1/2": "50%",
        "3/4": "75%",
      },
      fontSize: {
        "2xs": [
          "0.65rem",
          {
            lineHeight: "0.65rem",
          },
        ],
        "3xs": [
          "0.5rem",
          {
            lineHeight: "0.5rem",
          },
        ],
      },
      dropShadow: {
        cyan: [
          "0 0 35px rgba(52, 211, 153, 0.25)",
          "0 15px 65px rgba(52, 211, 153, 0.15)",
        ],
      },
    },
  },
  plugins: [],
};
