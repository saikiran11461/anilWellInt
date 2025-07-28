/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  // ✅ THIS LINE IS MANDATORY — add this!
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
};
