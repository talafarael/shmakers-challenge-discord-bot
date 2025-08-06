import { REST } from "discord.js";
import { Routes } from "discord-api-types/v10";
import { disocrdConfig } from "../config";
import { listeners } from "../listeners";

const commandsData = Object.values(listeners).map((command) => command.data.toJSON());

const rest = new REST({ version: "10" }).setToken(disocrdConfig.DISCORD_CLIENT_SECRET);

export async function deployCommands() {
  try {
    console.log("Started refreshing global application (/) commands.");

    await rest.put(
      Routes.applicationCommands(disocrdConfig.DISCORD_CLIENT_ID),
      {
        body: commandsData,
      },
    );

    console.log("Successfully reloaded global application (/) commands.");
  } catch (error) {
    console.error(error);
  }
}
