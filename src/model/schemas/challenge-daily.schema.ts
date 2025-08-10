import { model, Schema, Types } from "mongoose"
import { BotDocument } from "./bot.schema";

const dailyChallengeSchema = new Schema({
  _id: Schema.Types.ObjectId,
  date: { type: String, required: true },
  urlKata: { type: String, required: true },
  description: { type: String },
  hint: { type: [String] },
  botId: { type: Schema.Types.ObjectId, ref: 'Bot' },
});
export interface IDailyChallenge {
  _id: Types.ObjectId;
  date: string;
  urlKata: string;
  description?: string;
  hint?: string[];
  botId: Types.ObjectId | BotDocument;
}
export type DailyChallengeDocument = IDailyChallenge & Document;

export const DailyChallenge = model<DailyChallengeDocument>("DailyChallenge", dailyChallengeSchema);
