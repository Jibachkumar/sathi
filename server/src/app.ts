import "dotenv/config";
import express from "express";
import type { Request, Response, NextFunction } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import { ApiError } from "./utils/ApiError.js";
import logger from "./utils/logger.js";

const app = express();

// Disable Express signature header
app.disable("x-powered-by");

// Consolidated Helmet Security Config
app.use(
  helmet({
    contentSecurityPolicy: false,
    crossOriginEmbedderPolicy: false,
    frameguard: { action: "deny" },
    referrerPolicy: { policy: "no-referrer" },
    hsts: {
      maxAge: 63072000, // 2 years in seconds
      includeSubDomains: true,
      preload: true,
    },
  }),
);

// CORS Config
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  }),
);

// Body Parsers & Middlewares
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(cookieParser());
app.use(express.static("public"));

// import routes

// routes declaration

// Global Error Handler
app.use((err: unknown, req: Request, res: Response, _next: NextFunction) => {
  if (err instanceof ApiError) {
    logger.error(
      `[${req.method} ${req.url}] ${err.statusCode} - ${err.message}`,
    );
    return res.status(err.statusCode).json({
      message: err.message,
    });
  }

  // Handle unexpected standard/runtime errors
  const errorObj = err instanceof Error ? err : new Error(String(err));
  logger.error(`[${req.method} ${req.url}] Unhandled Error: ${errorObj.stack}`);

  return res.status(500).json({
    message:
      process.env.NODE_ENV === "production"
        ? "Internal Server Error"
        : errorObj.message,
  });
});

export { app };
