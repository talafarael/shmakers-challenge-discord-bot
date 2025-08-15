import { model, Schema } from "mongoose";

const botSchema = new Schema({
  _id: Schema.Types.ObjectId,
  guildId: { type: String, required: true, unique: true },
  channelId: { type: String, required: true, unique: true },

});
export interface IBot {
  _id: Schema.Types.ObjectId,
  channelId: string,
  guildId: string
}
export type BotDocument = IBot & Document;

export const Bot = model<BotDocument>("Bot", botSchema)
