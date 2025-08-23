import { JoinParticipantDto } from "@/dto"
import { getUserbyCodeWars } from "./code-wars-api.service";
import { ChannelNotInitError, CodeWarsUserNotFoundError, DefaultError, DoesntChannelError, ParticipantWasCreatedError } from "@/utils";
import { createParticipantDiscord, findBotByGuildId, findParticipantByUsernameCodewars } from "@/repository";

export const joinParticipant = async ({
  interaction,
  usernameCodeWars
}: JoinParticipantDto) => {
  try {
    if (!interaction.guildId) {
      throw DoesntChannelError()
    }
    const codeWarsUser = await getUserbyCodeWars(usernameCodeWars)
    if ("reason" in codeWarsUser) {
      throw CodeWarsUserNotFoundError()
    }
    const participant = await findParticipantByUsernameCodewars(usernameCodeWars)
    if (participant) {
      throw ParticipantWasCreatedError()
    }
    const channel = await findBotByGuildId(interaction.guildId)
    if (!channel) {
      throw ChannelNotInitError()
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
    throw DefaultError

  }
}
