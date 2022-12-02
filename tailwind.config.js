/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  daisyui: {
    themes: [
      {
        doctortheme: {
          primary: "#0FCFEC",

          secondary: "#19D3AE",

          accent: "#3A4256",

          neutral: "#191D24",

          "base-100": "#f3f4f6",
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui", "tw-elements/dist/plugin")],
};
