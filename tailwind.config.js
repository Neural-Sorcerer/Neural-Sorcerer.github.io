/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Deep space / latent space palette
                'space-black': '#030305',
                'deep-void': '#0a0a12',
                'nebula-purple': '#4c1d95',
                'cyber-blue': '#06b6d4',
                'calib-grid': '#3f3f46',
            },
            fontFamily: {
                mono: ['"Fira Code"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
                sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
            },
            animation: {
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
        },
    },
    plugins: [],
}
