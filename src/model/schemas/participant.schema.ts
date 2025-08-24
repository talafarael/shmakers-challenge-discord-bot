import { model, Schema, Types } from "mongoose"
import { BotDocument } from "./bot.schema";


const participantSchema = new Schema<ParticipantDocument>({
  _id: { type: Schema.Types.ObjectId, auto: true },
  codeWars: {
    username: { type: String, required: false },
    id: { type: String, required: false },
  },
  discord: {
    id: { type: String, required: false },
    username: { type: String, required: false }
  },
  honor: { type: Number, required: false, default: 0 },
  rank: { type: String, required: false },
  guildId: { type: String, required: true }
}, { timestamps: true });
participantSchema.virtual("bot", {
  ref: "Bot",
  localField: "guildId",
  foreignField: "guildId",
  justOne: true
});
export interface IParticipant {
  _id: Types.ObjectId;
  codeWars?: {
    username?: string;
    id?: string;
  };
  discord?: {
    id?: string;
    username?: string;
  };
  honor?: number;
  rank?: string;
  guildId: string;
  bot?: BotDocument | null;
}
export type ParticipantDocument = IParticipant & Document;

export const Participant = model<ParticipantDocument>("Participant", participantSchema);
