import { sendTodayKataMessage } from "@/utils";
import { initChanel } from "./channel.service";
import { getAllTodaysDailyChallenge } from "@/repository";



export const sendTodaysKata = async () => {
  const todaysChallenge = await getAllTodaysDailyChallenge()
  console.log(todaysChallenge)
  const promisesSendTodaysChallenge = todaysChallenge.map(async (elem) => {
    sendTodayKataMessage({ message: elem.messageKata ?? elem.urlKata })
    const channel = await initChanel({
      guildId: elem.botId.guildId,
      channelId: elem.botId.channelId
    })

  })
  await Promise.all(promisesSendTodaysChallenge);
}


