/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "cust-Pale-blue": "hsl(225, 100%, 94%)",
        "cust-Bright-blue": "hsl(245, 75%, 52%)",
        "cust-Very-pale-blue": "hsl(225, 100%, 98%)",
        "cust-Desaturated-blue": "hsl(224, 23%, 55%)",
        "cust-Dark-blue": "hsl(223, 47%, 23%)",
      },
      screens: {
        mobile: "320px",
      },
    },
  },
  plugins: [],
};
