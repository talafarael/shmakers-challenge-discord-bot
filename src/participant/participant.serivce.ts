import { DefaultError, joinParticipantPartOneAboutDiscord, joinParticipantPartOneAboutWebhook } from "@/utils";
import { JoinParticipantDto } from "./dto";
import { CodeWarsUserNotFoundError, getUserbyCodeWars } from "@/code-wars";
import { createParticipantDiscord, findParticipantByUsernameCodewars } from "./repository/participant.repository";
import { findBotByGuildId } from "@/bot/repository/bot.repository";
import { AttachmentBuilder, EmbedBuilder, InteractionReplyOptions, MessagePayload } from "discord.js";
import { ChannelNotInitError, DoesntChannelError } from "@/channel";
import { ParticipantWasCreatedError } from "./errors/participant.error";

export const joinParticipant = async ({
  interaction,
  usernameCodeWars
}: JoinParticipantDto) => {
  try {
    if (!interaction.guildId) {
      throw new Error(DoesntChannelError)
    }
    const codeWarsUser = await getUserbyCodeWars(usernameCodeWars)
    if ("reason" in codeWarsUser) {
      throw new Error(CodeWarsUserNotFoundError)
    }
    const participant = await findParticipantByUsernameCodewars(usernameCodeWars)
    if (participant) {
      throw new Error(ParticipantWasCreatedError)
    }
    const channel = await findBotByGuildId(interaction.guildId)
    if (!channel) {
      throw new Error(ChannelNotInitError)
    }
    const userData = {
      codeWars: {
        username: codeWarsUser.username,
        id: codeWarsUser.id
      },
      discord: {
        id: interaction.user.id,
        username: interaction.user.username,
      },
      guildId: interaction.guildId,
      rank: 0,
    }
    createParticipantDiscord(userData)

  } catch (e) {
    console.error(e)
    if (e instanceof Error) {
      throw e
    }
    throw new Error(DefaultError)

  }
}


export const joinParticipantHelper = (): (MessagePayload | InteractionReplyOptions)[] => {
  const file = new AttachmentBuilder('uploads/webhook-codewars.png');
  const exampleEmbed = new EmbedBuilder()
    .setTitle('Some title')
    .setImage('attachment://webhook-codewars.png');
  return [
    { content: joinParticipantPartOneAboutWebhook("http://example"), embeds: [exampleEmbed], files: [file] },
    { content: joinParticipantPartOneAboutDiscord() }
    //here must be img 
  ]
}
