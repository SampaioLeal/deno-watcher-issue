import { Application } from "oak/mod.ts";
import { getApplicationRoutes } from "./router.ts";
import { listeningHandler } from "./listening_log.ts";
import { gracefulShutdown } from "./graceful_shutdown.ts";
import { initPrisma } from "./database/prisma.ts";

const prisma = initPrisma();

const httpPort = Number(Deno.env.get("PORT")) || 3001;
const httpServer = new Application();

const controller = new AbortController();
const { signal } = controller;

// httpServer.use(errorHandler);
httpServer.use(getApplicationRoutes());
httpServer.addEventListener("listen", listeningHandler);

const serverPromise = httpServer.listen({ port: httpPort, signal });

/**
 * Graceful Shutdown
 */

addEventListener("unload", () => {
  controller.abort();
});
Deno.addSignalListener("SIGINT", () => {
  controller.abort();
});

await serverPromise;

await gracefulShutdown();
