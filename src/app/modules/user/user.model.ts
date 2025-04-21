import { Schema, model } from "mongoose";
import { Tuser, TuserModel } from "./user.interface";

const userSchema = new Schema<Tuser, TuserModel>(
  {
    _id: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, required: true },
    isBlocked: { type: Boolean, required: true },
  },
  { timestamps: true }
);

export const User = model <Tuser, TuserModel>("User", userSchema); 

