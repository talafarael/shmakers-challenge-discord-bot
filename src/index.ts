import { Client } from "discord.js";
import { config } from "./config";
import { connectDb } from "./db";
import { listeners } from "./listeners";
import { deployCommands } from "./registerCommands";

export const client = new Client({
  intents: ["Guilds", "GuildMessages", "DirectMessages", "MessageContent"],
});
client.once("ready", () => {
  console.log("Discord bot is ready! 🤖");
});

client.on("guild", async (guild) => {
  console.log('wotrk')
  await deployCommands({ guildId: guild.id });
});
client.on("interactionCreate", async (interaction) => {
  console.log("hey")
  if (!interaction.isCommand()) {
    return;
  }
  const { commandName } = interaction;
  if (listeners[commandName as keyof typeof listeners]) {
    listeners[commandName as keyof typeof listeners].execute(interaction);
  }
});
//connectDb({ url: config.MONGODB_URI })
client.login(config.DISCORD_CLIENT_SECRET);
