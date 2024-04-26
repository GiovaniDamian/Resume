import { url } from "inspector";
import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                mainBlueLight: "#4682B4",
                mainBlue: "#45567d",
                mainBlueDark: "#303841",
                mainGrayBlue: "#a4bccc",
                mainBlueGray: "#909cb4"
            },
            backgroundImage: {
                "welcome": "url('https://plus.unsplash.com/premium_photo-1668473366952-45f06fbf6492?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzI1fHx0ZWNub2xvZ2lhJTIwYXp1bCUyMGNsYXJvfGVufDB8fDB8fHww')",
            },
            fontFamily: {
                "raleway": 'Raleway, sans-serif'
            },
            screens: {
                "300": { 'min': '300px', 'max': '665px'},
                "665": { 'max': '665px'}
            }
        },
    },
    plugins: [],
};
export default config;
