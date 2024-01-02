import { createRequire } from "node:module";
import { PrismaClient } from "prisma/types";
const require = createRequire(import.meta.url);
const Prisma = require("../prisma/generated/client/index.js");

export function initPrisma() {
  const prisma: PrismaClient = new Prisma.PrismaClient({
    datasources: { db: { url: Deno.env.get("DATABASE_URL") } },
  });

  return prisma;
}
