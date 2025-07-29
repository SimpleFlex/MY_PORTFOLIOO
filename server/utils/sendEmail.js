import nodemailer from "nodemailer";
import { contactEmailTemplate } from "./email.template.js";
import {
  EMAIL_PASSWORD,
  EMAIL_USER,
  YOUR_PERSONAL_EMAIL,
} from "../config/env.js";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASSWORD,
  },
});

// Optional: Keep this in development only
transporter.verify((error, success) => {
  if (error) {
    console.error("Email transport failed:", error.message);
  }
});

export const sendContactEmail = async (name, email, message) => {
  const html = contactEmailTemplate(name, email, message);

  const mailOptions = {
    from: `"Contact Form" <${EMAIL_USER}>`,
    to: YOUR_PERSONAL_EMAIL,
    subject: `New message from ${name}`,
    replyTo: email,
    html,
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (err) {
    console.error("Email send error:", err.message);
    throw err;
  }
};
