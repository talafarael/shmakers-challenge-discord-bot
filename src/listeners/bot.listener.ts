import { CommandInteraction, InteractionReplyOptions, MessagePayload, SlashCommandBuilder } from "discord.js";
import { DefaultError, initBotMessage } from "../utils";
import { initBot, joinParticipantHelper } from "../services";
import { initErrorBotMessage } from "@/utils/message-bot/bot";

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
    const error = DefaultError
    return await interaction.reply(initErrorBotMessage(error.message));
  }
}
