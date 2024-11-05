/** @type {import('tailwindcss').Config} */
import type {Config} from 'tailwindcss';

import plugin from 'tailwindcss/plugin';

const config: Config = {
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        container: {
            padding: '1rem 1.5rem 0',
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
        },
        colors: {
            white: {
                DEFAULT: 'var(--color-white)',
                650: 'var(--color-white-650)',
            },
            black: {
                DEFAULT: 'var(--color-black)',
            },
            gray: {
                DEFAULT: 'var(--color-gray)',
            },
            blue: {
                DEFAULT: 'var(--color-blue)',
            },
            light: 'var(--color-light)',
        },
        extend: {
            colors: {
                primary: 'var(--color-primary)',
                secondary: 'var(--color-secondary)',

                'menu-item-hover': 'var(--color-menu-item-hover)',

                processing: 'var(--color-processing)',
                success: 'var(--color-success)',
                warning: 'var(--color-warning)',
                error: 'var(--color-error)',
                closed: 'var(--color-closed)',
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
