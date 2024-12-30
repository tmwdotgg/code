import { type Config } from "drizzle-kit";

export default {
  schema: "./schema.ts",
  dialect: "mysql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
} satisfies Config;
