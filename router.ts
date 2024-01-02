import { Router } from "oak/mod.ts";

export function getApplicationRoutes() {
  const router = new Router();

  router.get("/", (ctx) => {
    ctx.response.body = "hello world";
  });

  return router.routes();
}
