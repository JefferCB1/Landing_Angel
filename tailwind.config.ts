import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#000000", // Negro Azabache
                surface: "#050110", // Un toque muy sutil de violeta oscuro para superficie casi negra
                primary: "#8A00FF", // Púrpura Vibrante
                foreground: "#FFFFFF", // Blanco Nieve
                secondary: "#D1D1D1", // Gris Suave
                border: "#4B0082", // Violeta Oscuro para bordes sutiles
            },
            fontFamily: {
                sans: ["var(--font-inter)", "sans-serif"],
            },
            backgroundImage: {
                'cosmic-gradient': 'radial-gradient(circle at center, rgba(138, 0, 255, 0.15) 0%, rgba(0, 0, 0, 0) 70%)',
                'card-gradient': 'linear-gradient(180deg, rgba(20, 5, 30, 0.5) 0%, rgba(0, 0, 0, 0.9) 100%)',
            },
            animation: {
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'float': 'float 6s ease-in-out infinite',
                'shimmer': 'shimmer 2.5s linear infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                shimmer: {
                    '0%': { transform: 'translateX(-100%)' },
                    '100%': { transform: 'translateX(100%)' },
                }
            }
        },
    },
    plugins: [],
};
export default config;
