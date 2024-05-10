import { Hono } from "hono"
import { handle } from "hono/cloudflare-pages";

export const runtime = "edge";

const app = new Hono().basePath('/api');

app.get('/search', (c) => {
  return c.json({});
})

export const GET = handle(app);
