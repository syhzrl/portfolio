/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                // bgPrimary: '#050505',
                bgPrimary: '#0B0C10',
                bgSecondary: '#1F2833',
                greyHover: '#303234',
                primary: '#FE007E',
                turquiose: '#66FCF1',
            },
        },
        fontFamily: {
            primary: ['SF-Pro'],
        },
    },
    plugins: [],
};
