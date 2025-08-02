import dotenv from "dotenv";

dotenv.config();

const { MONGODB_URI } = process.env;

if (!MONGODB_URI) {
  throw new Error("Missing environment db variables");
}

export const dbConfig = {
  MONGODB_URI
};
