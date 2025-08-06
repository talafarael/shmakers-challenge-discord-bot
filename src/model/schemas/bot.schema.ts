import { model, Schema } from "mongoose";

const botSchema = new Schema({
  guidId: { type: String, reqired: true },
  dailyChallenge: [{ type: Schema.Types.ObjectId, ref: 'Challenge' }]
});

export const Bot = model("Bot", botSchema)
