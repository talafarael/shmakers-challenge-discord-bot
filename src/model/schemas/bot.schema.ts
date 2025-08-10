import { model, Schema } from "mongoose";

const botSchema = new Schema({
  _id: Schema.Types.ObjectId,
  guidId: { type: String, required: true, unique: true },
  chanelId: { type: String, required: true, unique: true },

});
export interface IBot {
  _id: Schema.Types.ObjectId,
  chanelId: string,
  guidId: string
}
export type BotDocument = IBot & Document;

export const Bot = model<BotDocument>("Bot", botSchema)
