import { Hono } from "hono";
import { getRouterName, showRoutes } from "hono/dev";
import { handle } from "hono/vercel";
import { z } from "zod";
import { zValidator } from "@hono/zod-validator";
import { clerkMiddleware, getAuth } from "@hono/clerk-auth";
import authors from "./authors";
import books from "./books";

export const runtime = "edge";

const app = new Hono().basePath("/api");

app
  .get(
    "/hello", //
    clerkMiddleware(),
    (c) => {
      const auth = getAuth(c);
      if (!auth?.userId) {
        c.status(401);
        return c.json({
          error: "Unauthorized",
        });
      }
      return c.json({
        message: "Hello Next.js!",
        userId: auth.userId,
      });
    }
  )
  .get(
    "/hello/:name", //
    (c) => {
      const { name } = c.req.param();
      return c.json({
        message: `Hello ${name}!`,
      });
    }
  )
  .post(
    "/create/:postId",
    zValidator(
      "json",
      z.object({
        name: z.string().min(1),
        userId: z.string().min(1),
      })
    ),
    zValidator("param", z.object({ postId: z.number() })),
    (c) => {
      const { name, userId } = c.req.valid("json");
      const { postId } = c.req.valid("param");
      return c.json({
        message: `Hello ${name}!`,
      });
    }
  );

app.route("/authors", authors);
app.route("/books", books);

showRoutes(app, { verbose: true });

export const GET = handle(app);
export const POST = handle(app);
