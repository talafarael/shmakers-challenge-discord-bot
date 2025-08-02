import dotenv from "dotenv";
import { ConfigError } from "../utils/variableErrror";

dotenv.config();

const { DISCORD_CLIENT_SECRET, DISCORD_CLIENT_ID } = process.env;

if (!DISCORD_CLIENT_SECRET || !DISCORD_CLIENT_ID) {
  throw ConfigError()
}

export const disocrdConfig = {
  DISCORD_CLIENT_SECRET,
  DISCORD_CLIENT_ID,
};


