import { InitBotDto } from "./dto/bot.dto";
import { BotCreateError, BotGuildNotFoundError, BotWasInitInThisServerError } from "./errors/bot.error";
import { createBot } from "./repository/bot.repository";
import { Bot } from "./schema/bot.schema";

export const initBot = async ({ interaction }: InitBotDto) => {
  if (!interaction?.guildId) {
    throw new Error(BotGuildNotFoundError)
  }
  try {
    const existingBot = await Bot.findOne({ guidId: interaction.guildId });
    if (existingBot) {
      throw new Error(BotWasInitInThisServerError)
    }

    await createBot({
      guildId: interaction.guildId,
      channelId: interaction.channelId
    })
  } catch (e) {
    if (e instanceof Error) {
      throw e
    }
    throw new Error(BotCreateError)
  }
}

