import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import { config } from "dotenv";
import formRoutes from "./routes/form.route.js";
import { errorMiddleware } from "./middlewares/errorHandler.js";

// 1. Load environment variables FIRST
config({ path: "./.env" });

// 2. Now debug environment variables
console.log("=== ENV VARIABLES DUMP ===");
console.log({
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT,
  FRONTEND_URL: process.env.FRONTEND_URL,
  // Add other critical variables you use
});

export const app = express();

// 3. Improved CORS configuration
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
    credentials: true, // If using cookies/auth
  })
);

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Routes
app.use("/api/v1/form", formRoutes);

// Error Handler (should be last middleware)
app.use(errorMiddleware);
