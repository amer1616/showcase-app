const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {},
  },

  plugins: [require("daisyui"), require("prettier-plugin-tailwindcss")],
};

module.exports = config;
