/** @type {import('tailwindcss').Config} */
module.exports = {
    prefix: 'tw-',
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
    theme: {
        extend: {
            spacing: {
                128: '32rem',
                144: '36rem',
            },
        },
        opacity: {
            97: '.97',
        },
    },
    plugins: [],
}
