import dotenv from "dotenv";
import { ConfigError } from "../utils";

dotenv.config();

const { DATABASE_URL } = process.env;

if (!DATABASE_URL) {
  throw ConfigError("databse url")
}

export const dbConfig = {
  DATABASE_URL
};
