/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            boxShadow: {
                box: "0px 4px 12px rgba(0,0,0,0.12), 0px 0px 2px rgba(0,0,0,0.08)",
            },
        },
        screens: {
            xs: "480px",
            ss: "620px",
            sm: "768px",
            md: "1024px",
            lg: "1200px",
            xl: "1700px",
        },
    },
    plugins: [],
    important: true,
}
