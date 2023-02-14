const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {},
  },

  plugins: [require("prettier-plugin-tailwindcss"), require("daisyui")],
};

module.exports = config;
