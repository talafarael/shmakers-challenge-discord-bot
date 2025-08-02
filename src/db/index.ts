import mongoose from "mongoose";
import { DBConnection } from "../types/db";
import { DBConnectError } from "../utils/variableErrror";


export const connectDb = async ({ url }: DBConnection): Promise<void> => {
  try {
    await mongoose.connect(url)
  } catch (e) {
    throw DBConnectError
  }
}
