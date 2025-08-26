import { InitBotOptions } from "../types/init-bot-options"

export interface CreateBotDto {
  guildId: string
  channelId: string
}

export interface InitBotDto extends InitBotOptions { }
