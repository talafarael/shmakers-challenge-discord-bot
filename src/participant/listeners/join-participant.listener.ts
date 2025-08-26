import { DefaultError, EmptyNameError, joinParticipant as joinParticipantMessage } from "@/utils";
import { initErrorBotMessage } from "@/bot/bot-messages/bot";
import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";
import { joinParticipant } from "@/services"
export const data = new SlashCommandBuilder()
  .setName("join")
  .setDescription("Join participant")
  .addStringOption(option =>
    option.setName('code_wars_username')
      .setDescription('The text you want to provide.')
      .setRequired(true)
  )

export async function execute(interaction: ChatInputCommandInteraction) {
  try {
    const usernameCodeWars = interaction?.options.getString('code_wars_username');
    if (!usernameCodeWars) {
      throw EmptyNameError
    }
    await joinParticipant({
      interaction,
      usernameCodeWars
    })
    const message = joinParticipantMessage(usernameCodeWars as string)
    await interaction.reply(message)
  } catch (e) {
    console.log(e)
    if (e instanceof Error) {
      return await interaction.reply(initErrorBotMessage(e.message))
    }
    const error = DefaultError
    return await interaction.reply(initErrorBotMessage(error.message));

  }
}
