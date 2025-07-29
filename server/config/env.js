import { config } from "dotenv";
config(); // This will load variables from `.env`

export const { PORT, EMAIL_USER, EMAIL_PASSWORD, YOUR_PERSONAL_EMAIL } =
  process.env;
