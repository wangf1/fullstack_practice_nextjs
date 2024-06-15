import { pgTable, text, uniqueIndex } from "drizzle-orm/pg-core";

export const accounts = pgTable(
  "accounts",
  {
    id: text("id").primaryKey(),
    name: text("name").notNull(),
    userId: text("user_id").notNull(),
  },
  (accounts) => {
    return {
      nameIndex: uniqueIndex("name_idx").on(accounts.name),
    };
  }
);
