import { Schema } from "mongoose";
import { Tuser, TuserModel } from "./user.interface";

const userSchmea = new Schema<Tuser, TuserModel>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, required: true },
    isBlocked: { type: Boolean, required: true },
  },
  { timestamps: true }
);

export const User = userSchmea;
