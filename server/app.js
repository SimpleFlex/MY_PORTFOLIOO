import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import { config } from "dotenv";
import formRoutes from "./routes/form.route.js";
import { errorMiddleware } from "./middlewares/errorHandler.js";

export const app = express();

//connecting to the frontend
app.use(cors({ origin: "http://localhost:5173" }));

config();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Routes
app.use("/api/v1/form", formRoutes);

app.use(errorMiddleware);
