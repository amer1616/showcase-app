const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");
// const tailwindcssprettier = require("prettier-plugin-tailwindcss");

const config = {
  plugins: [
    //Some plugins, like tailwindcss/nesting, need to run before Tailwind,
    tailwindcss(),
    //But others, like autoprefixer, need to run after,
    autoprefixer,
    // tailwindcssprettier,
  ],
};

module.exports = config;
