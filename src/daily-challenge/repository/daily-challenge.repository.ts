import { Bot } from "@/bot/schema/bot.schema"
import { DefaultError } from "@/utils"
import { Types } from "mongoose"
import { CreateDailyChallengeDto } from "../dto/create-daily-challenge.dto"
import { DailyChallenge, IDailyChallenge } from "../schema/daily-challenge.schema"
import { BotNotFoundError } from "@/bot"

export const createDailyChallenge = async (body: CreateDailyChallengeDto) => {
  try {
    const { botId, date, ...data } = body
    const bot = await Bot.findOne({
      _id: new Types.ObjectId(botId)
    })

    if (!bot) throw new Error(BotNotFoundError)
    return await DailyChallenge.create({
      _id: new Types.ObjectId(),
      date: new Date(date).toISOString(),
      botId: new Types.ObjectId(botId),
      ...data,
    })
  } catch (e) {
    if (e instanceof Error) {
      throw e
    }
    throw new Error(DefaultError)
  }
}
export const getAllTodaysDailyChallenge = async (): Promise<IDailyChallenge[]> => {
  const start = new Date()
  start.setHours(0, 0, 0, 0)

  const end = new Date(start)
  end.setDate(end.getDate() + 1)

  const dailyChallenge = await DailyChallenge.find({
    date: { $gte: start.toISOString(), $lt: end.toISOString() }
  }).populate('botId')

  return dailyChallenge
}
