import { model, Schema, Types } from "mongoose"
import { BotDocument } from "./bot.schema";

const participantSchema = new Schema({
  _id: Schema.Types.ObjectId,
  botId: { type: Schema.Types.ObjectId, ref: 'Bot' },
});
export interface IParticipant {
  _id: Types.ObjectId;
  botId: BotDocument;
}
export type ParticipantDocument = IParticipant & Document;

export const Participant = model<ParticipantDocument>("Participant", participantSchema);
