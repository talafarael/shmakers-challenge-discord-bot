import { Bot } from "../model";
import { CreateBotDto, InitBotDto } from "../dto/bot.dto";
import { BotCreateError, BotGuildNotFoundError, BotWasInitInThisServerError } from "../utils";
import { Types } from "mongoose";
import { initChanel } from "./channel.service";

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
      guildId: interaction.guildId,
      channelId: interaction.channelId
    })
  } catch (e) {
    if (e instanceof Error) {
      throw e
    }
    throw BotCreateError()
  }
}
const createBot = async ({
  guildId,
  channelId
}: CreateBotDto) => {

  const bot = new Bot({
    _id: new Types.ObjectId(),
    guildId: guildId,
    channelId: channelId
  })
  console.log(bot)
  return await bot.save()
}
