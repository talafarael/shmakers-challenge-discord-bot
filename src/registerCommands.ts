import { REST, Routes } from "discord.js";
import { config } from "./config";
import { listeners } from "./listeners";


const commandsData = Object.values(listeners).map((command) => command.data.toJSON());

const rest = new REST({ version: "10" }).setToken(config.DISCORD_CLIENT_SECRET);

type DeployCommandsProps = {
  guildId: string;
};

export async function deployCommands({ guildId }: DeployCommandsProps) {
  try {
    console.log("Started refreshing application (/) commands.");

    await rest.put(
      Routes.applicationGuildCommands(config.DISCORD_CLIENT_ID, guildId),
      {
        body: commandsData,
      },
    );

    console.log("Successfully reloaded application (/) commands.");
  } catch (error) {
    console.error(error);
  }
}
