/** @type {import('tailwindcss').Config} */
import type {Config} from 'tailwindcss';

import plugin from 'tailwindcss/plugin';

const config: Config = {
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
                md: '1.25rem',
                lg: '2rem',
            },
            screens: {
                DEFAULT: '100%',
                md: '808px', // calc(768px + 1.25rem * 2)
                lg: '1264px', // calc(992px + 2rem * 2)
            },
        },
        screens: {
            xs: '360px',
            sm: '576px',
            md: '768px',
            lg: '1200px',
        },
        fontFamily: {
            primary: ['var(--font-primary)', 'sans-serif'],
            secondary: ['var(--font-secondary)', 'Helvetica Neue', 'Helvetica', 'sans-serif'],
            text: ['var(--font-text, "Manrope")', 'sans-serif'],
        },
        fontSize: {
            '2xs': [
                '8px',
                {
                    lineHeight: '100%',
                },
            ],
            xs: [
                '12px',
                {
                    lineHeight: '100%',
                },
            ],
            sm: [
                '14px',
                {
                    lineHeight: '100%',
                },
            ],
            base: [
                '16px',
                {
                    lineHeight: '100%',
                },
            ],
            md: [
                '18px',
                {
                    lineHeight: '100%',
                },
            ],
            button: [
                '20px',
                {
                    lineHeight: '120%',
                },
            ],
            lg: [
                '20px',
                {
                    lineHeight: '100%',
                },
            ],
            xl: [
                '24px',
                {
                    lineHeight: '100%',
                },
            ],
            '2xl': [
                '28px',
                {
                    lineHeight: '100%',
                },
            ],
            '3xl': [
                '32px',
                {
                    lineHeight: '100%',
                },
            ],
            '4xl': [
                '40px',
                {
                    lineHeight: '100%',
                },
            ],
            '5xl': [
                '48px',
                {
                    lineHeight: '100%',
                },
            ],
            '6xl': [
                '64px',
                {
                    lineHeight: '100%',
                },
            ],
            '7xl': [
                '88px',
                {
                    lineHeight: '100%',
                },
            ],
            '8xl': [
                '96px',
                {
                    lineHeight: '100%',
                },
            ],
            '12xl': [
                '136px',
                {
                    lineHeight: '100%',
                },
            ],
        },
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            // NB: const colors
            black: {
                DEFAULT: 'var(--color-black)',
                100: 'var(--color-black-100)',
            },
            dark: 'var(--color-dark)',
            white: {
                DEFAULT: 'var(--color-white)',
                750: 'var(--color-white-750)',
            },
            cream: 'var(--color-cream)',
            green: 'var(--color-green)',
            yellow: 'var(--color-yellow)',
            red: 'var(--color-red)',
            orange: {
                DEFAULT: 'var(--color-primary)',
                900: 'var(--color-primary-dark)',
                200: 'var(--color-primary-200)',
            },
            gray: {
                DEFAULT: 'var(--color-gray)',
                700: 'var(--color-secondary)',
            },
            salad: 'var(--color-salad)',
            mustard: 'var(--color-mustard)',
            blue: 'var(--color-blue)',
        },
        extend: {
            spacing: {
                header: 'var(--header-height-md)',
            },
            colors: {
                primary: 'var(--color-primary)',
                secondary: 'var(--color-secondary)',
                'primary-dark': 'var(--color-primary-dark)',
            },
            keyframes: {
                'hamburger-top': {
                    '0%': {transform: 'rotate(0deg)'},
                    '100%': {transform: 'rotate(45deg)'},
                },
                'hamburger-bottom': {
                    '0%': {transform: 'rotate(0deg)'},
                    '100%': {transform: 'rotate(-45deg)'},
                },
                'hamburger-center': {
                    '0%': {opacity: '1'},
                    '100%': {opacity: '0'},
                },
                line: {
                    '0%': {transform: 'translate3d(-50%, 0, 0)'},
                    '100%': {transform: 'translate3d(-25%, 0, 0)'},
                },
            },
            animation: {
                'hamburger-top': 'hamburger-top 0.5s linear',
                'hamburger-bottom': 'hamburger-bottom 0.5s linear',
                'hamburger-center': 'hamburger-center 0.5s linear',
            },
            borderRadius: {
                '4xl': 'var(--border-radius-4xl)',
            },
            backgroundImage: {
                advantages: 'url("/images/bg-advantages.png")',
            },
        },
    },
    plugins: [
        // require('@tailwindcss/aspect-ratio'),
        plugin(({addUtilities}) => {
            addUtilities({
                '.fill-transparent': {
                    '& svg': {
                        fill: 'transparent !important',
                        stroke: 'currentColor !important',
                    },
                },
                '.stroke-transparent': {
                    '& svg': {
                        fill: 'currentColor !important',
                        stroke: 'transparent !important',
                    },
                },
                '.color-inherit': {
                    color: 'inherit',
                },
                '.container-free': {
                    width: '0px',
                    '@media (min-width: 576px)': {
                        width: 'calc((100vw - 576px) / 2)',
                    },
                    '@media (min-width: 768px)': {
                        width: 'calc((100vw - 768px) / 2)',
                    },
                    '@media (min-width: 992px)': {
                        width: 'calc((100vw - 992px) / 2)',
                    },
                    '@media (min-width: 1200px)': {
                        width: 'calc((100vw - 1200px) / 2)',
                    },
                    // '@media (min-width: 1400px)': {
                    //     width: 'calc((100vw - 1400px) / 2)',
                    // },
                },
                '.hidden-scrollbar': {
                    '&::-webkit-scrollbar': {
                        display: 'none',
                    },
                    '-ms-overflow-style': 'none' /* IE and Edge */,
                    'scrollbar-width': 'none' /* Firefox */,
                },
                '.text-stroke': {
                    '&-primary': {
                        '-webkit-text-fill-color': 'transparent',
                        '-webkit-text-stroke-width': '1px',
                        '-webkit-text-stroke-color': 'var(--color-primary)',
                    },
                },
            });
        }),
    ],
};

export default config;
