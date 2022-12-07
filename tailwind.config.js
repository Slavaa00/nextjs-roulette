/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./pages/**/*.{html,js,ts,jsx,tsx}", "./components/**/*.{html,js,ts,jsx,tsx}"],
    // important: '#__next',
    theme: {
        extend: {},
    },
    corePlugins: {
        preflight: true,
    },
    plugins: [],
}
    