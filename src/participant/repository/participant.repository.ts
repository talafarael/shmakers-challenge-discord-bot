import { CreateParticipantDto, UpdateParticipantDiscordDto } from "../dto";
import { IParticipant, Participant } from "../schema/participant.schema";

export const createParticipantDiscord = async (data: CreateParticipantDto) => {
  return await Participant.create(data);
}
export const findParticipantByUsernameCodewars = async (usernameCodeWars: string): Promise<IParticipant | null> => {
  return await Participant.findOne({
    codeWars: { username: usernameCodeWars }
  })
}
const updateParticipantDiscord = async ({ username, id, guildId, usernameCodeWars }: UpdateParticipantDiscordDto) => {
  return await Participant.updateOne(
    { usernameCodeWars },
    {
      $set: {
        discord: {
          username,
          id
        },
        guildId
      }
    }
  );
};
