import { pgTable, text, uniqueIndex } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";

export const accounts = pgTable(
  "accounts",
  {
    id: text("id").primaryKey(),
    plaidId: text("plaid_id"),
    name: text("name").notNull(),
    userId: text("user_id").notNull(),
  },
  (accounts) => {
    return {
      nameIndex: uniqueIndex("name_idx").on(accounts.name),
    };
  }
);

export const insertAccountSchema = createInsertSchema(accounts);
