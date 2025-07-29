class ErrorHandler extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";
    Error.captureStackTrace(this, this.constructor);
  }
}

export const errorMiddleware = (err, req, res, next) => {
  // Defaults for unspecified errors
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";

  // MongoDB CastError (invalid ID format)
  if (err.name === "CastError") {
    const message = `Resource not found. Invalid ${err.path}`;
    err = new ErrorHandler(message, 400);
  }

  // MongoDB Duplicate Key Error
  if (err.code === 11000) {
    const message = `Duplicate ${Object.keys(err.keyValue)} entered`;
    err = new ErrorHandler(message, 400);
  }

  // JWT Errors
  if (err.name === "JsonWebTokenError") {
    const message = "Invalid token. Please log in again!";
    err = new ErrorHandler(message, 401);
  }
  if (err.name === "TokenExpiredError") {
    const message = "Token expired. Please log in again!";
    err = new ErrorHandler(message, 401);
  }

  // Mongoose Validation Errors (e.g., required fields)
  if (err.name === "ValidationError") {
    const messages = Object.values(err.errors).map((val) => val.message);
    const message = `Validation error: ${messages.join(". ")}`;
    err = new ErrorHandler(message, 400);
  }

  // Send response
  res.status(err.statusCode).json({
    success: false,
    status: err.status,
    message: err.message,
    stack: process.env.NODE_ENV === "development" ? err.stack : undefined,
  });
};

export default ErrorHandler;
