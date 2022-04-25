import dotenv from "dotenv";
import pkg from "@prisma/client";
dotenv.config();


const { PrismaClient } = pkg;

export const db = new PrismaClient();