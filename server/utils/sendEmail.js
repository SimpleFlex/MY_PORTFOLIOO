import nodemailer from "nodemailer";
import { contactEmailTemplate } from "./email.template.js";

// Create transporter function instead of creating it immediately
const createTransporter = () => {
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });
};

export const sendContactEmail = async (name, email, message) => {
  const html = contactEmailTemplate(name, email, message);

  const mailOptions = {
    from: `"Contact Form" <${process.env.EMAIL_USER}>`,
    to: process.env.YOUR_PERSONAL_EMAIL,
    subject: `New message from ${name}`,
    replyTo: email,
    html,
  };

  try {
    // Create transporter inside the function when needed
    const transporter = createTransporter();
    await transporter.sendMail(mailOptions);
  } catch (err) {
    console.error("Email send error:", err.message);
    throw err;
  }
};
