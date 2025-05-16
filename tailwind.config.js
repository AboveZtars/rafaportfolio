import { heroui } from "@heroui/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    heroui({
      layout: {
        dividerWeight: "1px", 
        disabledOpacity: 0.45, 
        fontSize: {
          tiny: "0.75rem",
          small: "0.875rem",
          medium: "0.9375rem",
          large: "1.125rem",
        },
        lineHeight: {
          tiny: "1rem", 
          small: "1.25rem", 
          medium: "1.5rem", 
          large: "1.75rem", 
        },
        radius: {
          small: "6px", 
          medium: "8px", 
          large: "12px", 
        },
        borderWidth: {
          small: "1px", 
          medium: "1px", 
          large: "2px", 
        },
      },
      themes: {
        light: {
          colors: {
            background: {
              DEFAULT: "#121212"
            },
            content1: {
              DEFAULT: "#1e1e1e",
              foreground: "#e5e5e5"
            },
            content2: {
              DEFAULT: "#282828",
              foreground: "#e5e5e5"
            },
            content3: {
              DEFAULT: "#3f3f46",
              foreground: "#e4e4e7"
            },
            content4: {
              DEFAULT: "#52525b",
              foreground: "#d4d4d8"
            },
            divider: {
              DEFAULT: "rgba(255, 255, 255, 0.15)"
            },
            focus: {
              DEFAULT: "#f97316"
            },
            foreground: {
              50: "#18181b",
              100: "#27272a",
              200: "#3f3f46",
              300: "#52525b",
              400: "#71717a",
              500: "#a1a1aa",
              600: "#d4d4d8",
              700: "#e4e4e7",
              800: "#f4f4f5",
              900: "#fafafa",
              DEFAULT: "#ECEDEE"
            },
            primary: {
              50: "#fff7ed",
              100: "#ffedd5",
              200: "#fed7aa",
              300: "#fdba74",
              400: "#fb923c",
              500: "#f97316",
              600: "#ea580c",
              700: "#c2410c",
              800: "#9a3412",
              900: "#7c2d12",
              DEFAULT: "#f97316",
              foreground: "#ffffff"
            }
          }
        },
        dark: {
          colors: {
            background: {
              DEFAULT: "#121212"
            },
            content1: {
              DEFAULT: "#1e1e1e",
              foreground: "#e5e5e5"
            },
            content2: {
              DEFAULT: "#282828",
              foreground: "#e5e5e5"
            },
            content3: {
              DEFAULT: "#3f3f46",
              foreground: "#e4e4e7"
            },
            content4: {
              DEFAULT: "#52525b",
              foreground: "#d4d4d8"
            },
            divider: {
              DEFAULT: "rgba(255, 255, 255, 0.15)"
            },
            focus: {
              DEFAULT: "#f97316"
            },
            foreground: {
              50: "#18181b",
              100: "#27272a",
              200: "#3f3f46",
              300: "#52525b",
              400: "#71717a",
              500: "#a1a1aa",
              600: "#d4d4d8",
              700: "#e4e4e7",
              800: "#f4f4f5",
              900: "#fafafa",
              DEFAULT: "#ECEDEE"
            },
            primary: {
              50: "#fff7ed",
              100: "#ffedd5",
              200: "#fed7aa",
              300: "#fdba74",
              400: "#fb923c",
              500: "#f97316",
              600: "#ea580c",
              700: "#c2410c",
              800: "#9a3412",
              900: "#7c2d12",
              DEFAULT: "#f97316",
              foreground: "#ffffff"
            }
          }
        }
      }
    })
  ]
}
