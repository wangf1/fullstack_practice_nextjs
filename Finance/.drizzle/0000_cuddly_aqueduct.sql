CREATE TABLE IF NOT EXISTS "accounts" (
	"id" text PRIMARY KEY NOT NULL,
	"plaid_id" text,
	"name" text NOT NULL,
	"user_id" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "categories" (
	"id" text PRIMARY KEY NOT NULL,
	"plaid_id" text,
	"name" text NOT NULL,
	"user_id" text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "name_idx" ON "accounts" USING btree ("name");