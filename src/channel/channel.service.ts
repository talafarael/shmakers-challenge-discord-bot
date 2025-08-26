import { InitChannelBotDto } from "@/dto";
import { Channel, TextChannel } from "discord.js";
import { client } from "..";
import { ChannelNotFoundError } from "@/utils";

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
    throw ChannelNotFoundError
  }

  return channel;
}
