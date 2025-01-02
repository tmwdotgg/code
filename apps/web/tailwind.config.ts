import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import sharedConfig from "@repo/tailwind-config";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
  presets: [sharedConfig],
} as Config;
