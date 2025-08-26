import { ChatInputCommandInteraction } from "discord.js";

export interface JoinParticipantDto {
  interaction: ChatInputCommandInteraction
  usernameCodeWars: string
}
