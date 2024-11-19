/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "poppins-regular": "Poppins-Regular", // Custom font name matching the .ttf file name
        "poppins-bold": "Poppins-Bold",
        "ubuntu-regular": "Ubuntu-Regular",
        "ubuntu-bold": "Ubuntu-Bold",
      },
    },
  },
  plugins: [],
};
