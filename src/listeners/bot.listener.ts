import { CommandInteraction, SlashCommandBuilder } from "discord.js";
import { initBotMessage } from "../utils";
import { initBot } from "../services";
import { initErrorBotMessage } from "@/utils/message-bot/bot";

export const data = new SlashCommandBuilder()
  .setName("init")
  .setDescription("Start bot into server");

export async function execute(interaction: CommandInteraction) {
  try {
    await initBot({ interaction })
    await interaction.reply(initBotMessage())
  } catch (e) {
    if (e instanceof Error) {
      return await interaction.reply(initErrorBotMessage(e.message))
    }
    return await interaction.reply(initErrorBotMessage("Упс щось трапилося"));
  }
}
