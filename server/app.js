import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import { config } from "dotenv";
import formRoutes from "./routes/form.route.js";
import { errorMiddleware } from "./middlewares/errorHandler.js";

// Load environment variables
config();

export const app = express();

// CORS: allow both local and deployed frontend
const allowedOrigins = [
  process.env.FRONTEND_URL,
  "http://localhost:5173",
].filter(Boolean);

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Routes
app.use("/api/v1/form", formRoutes);

// Error Handler
app.use(errorMiddleware);
