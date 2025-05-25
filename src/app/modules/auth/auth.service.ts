import { StatusCodes } from "http-status-codes";
import AppError from "../../error/AppError";
import { User } from "../user/user.model";
import { TuserLogin } from "./auth.interface";

const loginUser = async (payload: TuserLogin) => {
  const user = await User.checkUserExistsByEmail(payload.email);
  if (user) {
    console.log("user exists");
  } else {
    console.log("user does not exist");
  }

  const isDeleted = user?.isDeleted;

  if (isDeleted) {
    throw new AppError(StatusCodes.FORBIDDEN, "This user is deleted !");
  }

  
};

export const AuthService = {
  loginUser,
};
