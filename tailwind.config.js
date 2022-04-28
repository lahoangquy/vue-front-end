module.exports = {
    content: [
        "./node_modules/@themesberg/flowbite/**/*.js",
    ],
    theme: {
        extend: {},
    },
    plugins: [
        require("@tailwindcss/aspect-ratio"),
        require("@themesberg/flowbite/plugin"),
    ],
};
