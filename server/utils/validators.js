export const isValidEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export const isValidMessage = (message, minLength = 10) => {
  return message.trim().length >= minLength;
};
