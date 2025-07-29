import express from "express";
import { submitContactForm } from "../controllers/form.controller.js";

const router = express.Router();

// POST /api/contact - Submit contact form
router.route("/contact").post(submitContactForm);

export default router;
