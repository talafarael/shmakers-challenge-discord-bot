import { model, Schema } from "mongoose"

const dallyChallengeSchema = new Schema({
  _id: Schema.Types.ObjectId,
  date: { type: String, reqired: true },
  urlTask: { type: String, required: true },
  description: { type: String },
  hint: { type: [String] },
  botId: { type: Schema.Types.ObjectId, ref: 'Bot' },
});

export const DailyChallenge = model("DailyChallenge", dallyChallengeSchema)
