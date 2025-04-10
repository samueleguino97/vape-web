import "dotenv/config";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./drizzle",
  schema: ["./schema.ts", "./auth.schema.ts"],
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DB_URL!,
  },
});
