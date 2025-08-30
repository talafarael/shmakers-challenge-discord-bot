import { DefaultError } from "@/utils";
import { initErrorBotMessage } from "@/bot/bot-messages/bot";
import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";
import { joinParticipant } from "../participant.serivce";
import { joinParticipant as joinParticipantMessage } from "../bot-messages/participant"
import { EmptyNameError } from "../errors/participant.error";

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
      throw new Error(EmptyNameError)
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
    return await interaction.reply(initErrorBotMessage(DefaultError));

  }
}
