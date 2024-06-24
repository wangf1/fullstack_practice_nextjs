import { config } from "dotenv";
import { defineConfig } from "drizzle-kit";

config({ path: ".env.local" });

export default defineConfig({
  dialect: "postgresql",
  schema: "./db/schema.ts",
  out: "./.drizzle",
  migrations: {
    table: "migrations_custom",
    schema: "public",
  },
  dbCredentials: {
    url: process.env.POSTGRES_URL!,
  },
});
