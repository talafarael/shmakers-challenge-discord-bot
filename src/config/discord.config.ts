import { ConfigError } from "@/utils";
import dotenv from "dotenv";

dotenv.config();

const { DISCORD_CLIENT_SECRET, DISCORD_CLIENT_ID } = process.env;

if (!DISCORD_CLIENT_SECRET || !DISCORD_CLIENT_ID) {
  throw ConfigError("discord")
}

export const disocrdConfig = {
  DISCORD_CLIENT_SECRET,
  DISCORD_CLIENT_ID,
};


