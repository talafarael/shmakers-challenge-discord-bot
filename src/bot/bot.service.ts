import { InitBotDto } from "@/dto";
import { BotCreateError, BotGuildNotFoundError, BotWasInitInThisServerError } from "../utils";
import { createBot } from "@/repository";
import { Bot } from "@/model";


export const initBot = async ({ interaction }: InitBotDto) => {
  if (!interaction?.guildId) {
    throw BotGuildNotFoundError
  }
  try {
    const existingBot = await Bot.findOne({ guidId: interaction.guildId });
    if (existingBot) {
      throw BotWasInitInThisServerError
    }

    await createBot({
      guildId: interaction.guildId,
      channelId: interaction.channelId
    })
  } catch (e) {
    if (e instanceof Error) {
      throw e
    }
    throw BotCreateError
  }
}

