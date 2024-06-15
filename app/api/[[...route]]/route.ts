import { Hono } from "hono";
import { getRouterName, showRoutes } from "hono/dev";
import { handle } from "hono/vercel";
import { z } from "zod";
import { zValidator } from "@hono/zod-validator";
import { clerkMiddleware, getAuth } from "@hono/clerk-auth";
import authors from "./authors";
import books from "./books";
import accounts from "./accounts";

export const runtime = "edge";

const app = new Hono().basePath("/api");

app.route("/authors", authors);
app.route("/books", books);

const routes = app.route("/accounts", accounts);

showRoutes(app, { verbose: true });

export const GET = handle(app);
export const POST = handle(app);

export type AppType = typeof routes;