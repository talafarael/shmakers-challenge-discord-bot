import { joinParticipantPartOneAboutDiscord, joinParticipantPartOneAboutWebhook } from "@/utils";
import { AttachmentBuilder, EmbedBuilder, InteractionReplyOptions, MessagePayload } from "discord.js";

export const joinParticipantHelper = (): (MessagePayload | InteractionReplyOptions)[] => {
  const file = new AttachmentBuilder('uploads/webhook-codewars.png');
  const exampleEmbed = new EmbedBuilder()
    .setTitle('Some title')
    .setImage('attachment://webhook-codewars.png');
  return [
    { content: joinParticipantPartOneAboutWebhook("http://example"), embeds: [exampleEmbed], files: [file] },
    { content: joinParticipantPartOneAboutDiscord() }
    //here must be img 
  ]
}
