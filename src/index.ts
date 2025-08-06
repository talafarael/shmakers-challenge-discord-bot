import { Client } from "discord.js";
import { connectDb } from "./db";
import { listeners } from "./listeners";
import { dbConfig, disocrdConfig } from "./config";
import { deployCommands } from "./utils/deployCommands";

export const client = new Client({
  intents: ["Guilds", "GuildMessages", "DirectMessages", "MessageContent"],
});
client.once("ready", async () => {
  console.log("Discord bot is ready! 🤖");
  await deployCommands();
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) {
    return;
  }
  const { commandName } = interaction;
  if (listeners[commandName as keyof typeof listeners]) {
    listeners[commandName as keyof typeof listeners].execute(interaction);
  }
});
connectDb({ url: dbConfig.DATABASE_URL })
  .then(() => console.log("Database successfully connected"))
  .catch((e) => {
    console.log(e)
    throw e
  })
client.login(disocrdConfig.DISCORD_CLIENT_SECRET);
