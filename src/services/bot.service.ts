import { Bot } from "../model";
import { CreateBotDto, InitBotDto } from "../dto/bot.dto";
import { BotCreateError, BotGuildNotFoundError, BotWasInitInThisServerError } from "../utils";
import { Types } from "mongoose";

export const initBot = async ({ interaction }: InitBotDto) => {
  if (!interaction?.guildId) {
    throw BotGuildNotFoundError()
  }

  try {
    const existingBot = await Bot.findOne({ guidId: interaction.guildId });
    if (existingBot) {
      throw BotWasInitInThisServerError()
    }
    await createBot({
      guildId: interaction.guildId
    })
  } catch (e) {
    if (e instanceof Error) {
      throw e
    }
    throw BotCreateError()
  }
}
const createBot = async ({
  guildId
}: CreateBotDto) => {

  const bot = new Bot({
    _id: new Types.ObjectId(),
    guidId: guildId
  })
  console.log(bot)
  return await bot.save()
}
