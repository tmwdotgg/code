import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

// We want each package to be responsible for its own content.
const config: Omit<Config, "content"> = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["Manrope Variable", ...fontFamily.sans],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        bgFadeIn: {
          '0%': { backgroundColor: 'rgba(243,244,246,0)' }, // Adjust to match your desired background color
          '100%': { backgroundColor: 'rgba(243,244,246,1)' },
        },
      },
      animation: {
        'fadeIn': 'fadeIn 500ms',
        'bgFadeIn': 'bgFadeIn 500ms ease-in-out',
      },
    },
  },
  plugins: [],
};
export default config;
