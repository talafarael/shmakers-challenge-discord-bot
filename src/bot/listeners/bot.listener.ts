import { CommandInteraction, SlashCommandBuilder } from "discord.js";
import { initBotMessage, initErrorBotMessage } from "@/bot/bot-messages/bot";
import { initBot } from "../bot.service";
import { joinParticipantHelper } from "@/participant/participant.serivce";
import { DefaultError } from "@/utils";

export const data = new SlashCommandBuilder()
  .setName("init")
  .setDescription("Start bot into server");

export async function execute(interaction: CommandInteraction) {
  try {
    await initBot({ interaction })
    const initMessage = await interaction.reply({ content: initBotMessage(), fetchReply: true })
    await initMessage.pin();

    const messages = joinParticipantHelper();
    for (const msg of messages) {
      await interaction.followUp(msg);
    }
  } catch (e) {
    if (e instanceof Error) {
      return await interaction.reply(initErrorBotMessage(e.message))
    }
    return await interaction.reply(initErrorBotMessage(DefaultError));
  }
}
