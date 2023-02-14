// @ts-nocheck
import { PrismaClient } from "@prisma/client";

// declare global prisma variable to prevent multiple instances of Prisma client during developement
global.prisma;
const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV === "development") {
  global.prisma = prisma;
}

export { prisma };
