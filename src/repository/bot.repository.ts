import { CreateBotDto } from "@/dto"
import { Bot } from "@/model";
import { Types } from "mongoose";

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

