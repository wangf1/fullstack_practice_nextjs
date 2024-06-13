import { Hono } from "hono";
import { getRouterName, showRoutes } from "hono/dev";
import { handle } from "hono/vercel";

export const runtime = "edge";

const app = new Hono().basePath("/api");

app.get("/hello", (c) => {
  return c.json({
    message: "Hello Next.js!",
  });
});

showRoutes(app, { verbose: true });

export const GET = handle(app);
export const POST = handle(app);
