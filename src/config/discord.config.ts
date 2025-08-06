import dotenv from "dotenv";
import { ConfigDiscordError } from "../utils";

dotenv.config();

const { DISCORD_CLIENT_SECRET, DISCORD_CLIENT_ID } = process.env;

if (!DISCORD_CLIENT_SECRET || !DISCORD_CLIENT_ID) {
  throw ConfigDiscordError()
}

export const disocrdConfig = {
  DISCORD_CLIENT_SECRET,
  DISCORD_CLIENT_ID,
};


