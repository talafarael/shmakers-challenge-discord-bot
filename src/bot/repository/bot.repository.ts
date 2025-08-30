import { Types } from "mongoose";
import { CreateBotDto } from "../dto/bot.dto";
import { Bot } from "../schema/bot.schema";

export const createBot = async ({
  guildId,
  channelId
}: CreateBotDto) => {

  const bot = new Bot({
    _id: new Types.ObjectId(),
    guildId: guildId,
    channelId: channelId
  })
  return await bot.save()
}
export const findBotByGuildId = async (guildId: string) => {
  return await Bot.findOne({
    guildId
  })
}

