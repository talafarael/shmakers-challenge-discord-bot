import mongoose, { model, Schema } from "mongoose"

const challengeSchema = new Schema({
  date: { type: String, reqired: true },
  urlTask: { type: String, required: true },
  description: { type: String },
  hint: { type: [String] },

});

export const Challenge = model("Challenge", challengeSchema)
