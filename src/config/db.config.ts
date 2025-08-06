import dotenv from "dotenv";
import { ConfigDatabseError } from "../utils";

dotenv.config();

const { DATABASE_URL } = process.env;

if (!DATABASE_URL) {
  throw ConfigDatabseError()
}

export const dbConfig = {
  DATABASE_URL
};
