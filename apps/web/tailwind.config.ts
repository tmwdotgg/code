import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import sharedConfig from "@repo/tailwind-config";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
  presets: [sharedConfig],
} satisfies Config;
