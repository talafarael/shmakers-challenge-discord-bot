import { Channel, TextChannel } from "discord.js";
import { client } from "..";
import { InitChannelBotDto } from "./dto/channel.dto";
import { ChannelNotFoundError } from "./errors/channel.error";

export const initChanel = async ({
  guildId,
  channelId
}: InitChannelBotDto): Promise<TextChannel> => {
  let guild = client.guilds.cache.get(guildId);
  if (!guild) {
    guild = await client.guilds.fetch(guildId);
  }

  let channel: Channel | null = guild.channels.cache.get(channelId) || await guild.channels.fetch(channelId);

  if (!channel || !(channel instanceof TextChannel)) {
    throw new Error(ChannelNotFoundError)
  }

  return channel;
}
