import { Bot } from "../model";
import { CreateBotDto, InitBotDto } from "../dto/bot.dto";
import { BotCreateError, BotGuildNotFoundError } from "../utils";

export const initBot = async ({ interaction }: InitBotDto) => {
  if (!interaction?.guildId) {
    throw BotGuildNotFoundError()
  }
  try {
    await createBot({
      guildId: interaction.guildId
    })
  } catch (e) {
    console.log(e)
    throw BotCreateError()
  }
}
const createBot = async ({
  guildId
}: CreateBotDto) => {
  const bot = new Bot({
    guildId
  })
  return await bot.save()
}
