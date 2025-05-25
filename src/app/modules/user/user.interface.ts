// import { TuserRegister } from './user.interface';
import { Model, Types } from "mongoose";

export interface Tuser {
  _id: Types.ObjectId;
  name: string;
  email: string;
  password: string;
  role: string;
  status: 'active' | 'blocked';
  isBlocked: boolean;
  timestamps: boolean;
  isDeleted?: boolean;
}


export const userRole = {
  ADMIN: 'admin',
  USER: 'user'
} as const;


export type TuserRole = keyof typeof userRole;


export interface TuserModel extends Model<Tuser> {
    checkUserExistsByEmail(email: string): Promise<Tuser>;

    isPasswordMatched(
      plainTextPassword: string,
      hashedPassword: string,
    ) : Promise<boolean>;

}   