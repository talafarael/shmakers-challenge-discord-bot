import { CommandInteraction, SlashCommandBuilder } from "discord.js";

export const data = new SlashCommandBuilder()
  .setName("start")
  .setDescription("");

export async function execute(interaction: CommandInteraction) {
  return interaction.reply("Pong!");
}
