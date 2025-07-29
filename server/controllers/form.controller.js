import { sendContactEmail } from "../utils/sendEmail.js";
import { isValidEmail } from "../utils/validators.js";
import { CatchAsyncErrors } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../middlewares/errorHandler.js";

export const submitContactForm = CatchAsyncErrors(async (req, res, next) => {
  const { name, email, message } = req.body;

  // Validation
  if (!name || !email || !message) {
    return next(new ErrorHandler("All fields are required", 400));
  }

  if (!isValidEmail(email)) {
    return next(new ErrorHandler("Invalid email address", 400));
  }

  await sendContactEmail(name, email, message);

  res.status(200).json({
    success: true,
    message: "Message sent successfully!",
  });
});
