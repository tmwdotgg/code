import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

// We want each package to be responsible for its own content.
const config: Omit<Config, "content"> = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["Manrope Variable", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
export default config;
