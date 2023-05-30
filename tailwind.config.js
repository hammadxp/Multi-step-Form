/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html", "./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Ubuntu: ["Ubuntu", "sans-serif"],
      },
      colors: {
        "is-marine-blue": "hsl(213, 96%, 18%)",
        "is-purplish-blue": "hsl(243, 100%, 62%)",
        "is-pastel-blue": "hsl(228, 100%, 84%)",
        "is-light-blue": "hsl(206, 94%, 87%)",
        "is-strawberry-red": "hsl(354, 84%, 57%)",
        "is-cool-gray": "hsl(231, 11%, 63%)",
        "is-light-gray": "hsl(229, 24%, 87%)",
        "is-magnolia": "hsl(217, 100%, 97%)",
        "is-alabaster": "hsl(231, 100%, 99%)",
        "is-white": "hsl(0, 0%, 100%)",
      },
      screens: {
        "1440px": { max: "1440px" },
        "375px": { max: "375px" },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
