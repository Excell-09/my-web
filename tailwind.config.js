/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mywhite: "#FFFBEB",
        mygrey: "#495579",
        mybluelight: "#263159",
        mybluedark: "#251749",
      },
    },
    plugins: [],
  },
};
