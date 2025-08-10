import { Types } from "mongoose";
import { BotNotFoundError, DefaultError, sendTodayKataMessage } from "@/utils";
import { Bot, DailyChallenge, DailyChallengeDocument } from "@/model";
import { CreateDailyChallengeDto } from "@/dto";

export const createDailyChallenge = async (body: CreateDailyChallengeDto) => {
  try {
    const { botId, date, ...data } = body
    const bot = await Bot.findOne({
      _id: new Types.ObjectId(botId)
    })

    if (!bot) throw BotNotFoundError()
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
    throw DefaultError()
  }
}
export const sendTodaysKata = async () => {
  const todaysChallenge = await getAllTodaysDailyChallenge()
  const promisesSendTodaysChallenge = todaysChallenge.map(async (elem) => {
    sendTodayKataMessage({ url: elem.urlKata })

  })
  const results = await Promise.all(promisesSendTodaysChallenge);
}
export const getAllTodaysDailyChallenge = async (): Promise<DailyChallengeDocument[]> => {
  const start = new Date()
  start.setHours(0, 0, 0, 0)

  const end = new Date(start)
  end.setDate(end.getDate() + 1)

  const dailyChallenge = await DailyChallenge.find({
    date: { $gte: start.toISOString(), $lt: end.toISOString() }
  }).populate('botId')

  return dailyChallenge
}
