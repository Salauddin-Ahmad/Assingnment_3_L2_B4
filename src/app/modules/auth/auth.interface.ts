import { TuserRole } from "../user/user.interface";

export interface TuserLogin {
    email: string;
    password: string;
}

export type TJwtPayload = {
  userId: string;
  email: string;
  role: TuserRole;
};
 