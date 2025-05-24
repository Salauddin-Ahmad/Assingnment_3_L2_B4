import { User } from "../user/user.model";
import { TuserLogin } from "./auth.interface";

const loginUser = async (payload: TuserLogin) => {
    const isUserExistsById = await User.checkUserExistsByEmail(payload.email);
};

export const AuthService = {
  loginUser,
};


