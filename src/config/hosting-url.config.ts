import dotenv from "dotenv";
import { ConfigError } from "../utils";

dotenv.config();

const { HOSTING_URL } = process.env;

if (!HOSTING_URL) {
  throw ConfigError("hosting_url")
}

export const hostingConfig = {
  HOSTING_URL
};

