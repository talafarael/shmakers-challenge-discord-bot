import { model, Schema } from "mongoose";

const botSchema = new Schema({
  _id: Schema.Types.ObjectId,
  guidId: { type: String, required: true, unique: true },
  dailyChallenge: [{ type: Schema.Types.ObjectId, ref: 'Challenge' }]
});

export const Bot = model("Bot", botSchema)
