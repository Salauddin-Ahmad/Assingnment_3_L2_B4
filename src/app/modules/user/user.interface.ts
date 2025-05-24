// import { TuserRegister } from './user.interface';
import { Model, Types } from "mongoose";

export interface Tuser {
  _id: Types.ObjectId;
  name: string;
  email: string;
  password: string;
  role: string;
  isBlocked: boolean;
  timestamps: boolean;
}


export const userRole = {
  ADMIN: 'admin',
  USER: 'user'
} as const;


export type TuserRole = keyof typeof userRole;


export interface TuserModel extends Model<Tuser> {
    checkUserExistsByEmail(email: string): Promise<Tuser>;

    // ispasswordMatched(
    //   plainTextPassword: string,
    //   hashedPassword: string,
    // ) : Promise<boolean>;
}   