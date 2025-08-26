import { joinParticipantHelper } from "@/services";
import { loadingMessage } from "@/utils";
import { CommandInteraction, MessagePayload, SlashCommandBuilder } from "discord.js";

export const data = new SlashCommandBuilder()
  .setName("helper")
  .setDescription("Helper join participant");

export async function execute(interaction: CommandInteraction) {
  try {
    await interaction.deferReply({ ephemeral: true })

    await interaction.editReply({ content: loadingMessage() });
    const messages = joinParticipantHelper();
    for (const msg of messages) {
      await interaction.user.send(msg as MessagePayload);
    }
    await interaction.editReply({
      content: `Всі повідомлення надіслані у приватні повідомлення ✅\n[Відкрити чат з ботом](https://discord.com/users/${interaction.client.user?.id})`
    });
    return;
  } catch (e) {
    console.log(e)
    if (e instanceof Error) {
    }
  }
}
