import { Model } from "mongoose";

export interface Tuser extends Document {
  _id: string;
  name: string;
  email: string;
  password: string;
  role: string;
  isBlocked: boolean;
  timestamps: boolean;
}

export interface TuserRegister {
  id: string;
  name: string;
  email: string;
  password: string;
}

export interface TuserModel extends Model<Tuser> {
    // custom methods
}   