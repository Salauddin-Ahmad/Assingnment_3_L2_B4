import { Model } from "mongoose";

export interface Tuser {
  name: string;
  email: string;
  password: string;
  role: string;
  isBlocked: boolean;
  timestamps: boolean;
}

export interface TuserModel extends Model<Tuser> {
    // custom methods
}   