import { initBot } from "../services/bot.service"
import { InitBotOptions } from "../types/init-bot-options"

export interface CreateBotDto {
  guildId: string
}
export interface InitBotDto extends InitBotOptions { }
