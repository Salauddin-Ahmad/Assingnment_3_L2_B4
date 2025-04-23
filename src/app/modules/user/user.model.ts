import { Schema, model } from "mongoose";
import { Tuser, TuserModel } from "./user.interface";

const userSchema = new Schema<Tuser, TuserModel>(
  {
    // id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, required: true, default: "user" },
    isBlocked: { type: Boolean, required: false, default: false },
  },
  { timestamps: true }
);

export const User = model <Tuser, TuserModel>("Users", userSchema, "userCollection"); 

