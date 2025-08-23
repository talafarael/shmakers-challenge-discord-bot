export interface UpdateParticipantDiscordDto {
  username: string,
  id: string,
  guildId: string
  usernameCodeWars: string
}
export interface CreateParticipantDto {
  codeWars?: {
    username: string
    id: string
  },
  discord?: {
    id: string
    username: string
  },
  guildId?: string
  rank?: number
}
