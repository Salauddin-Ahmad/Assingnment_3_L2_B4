// import { StatusCodes } from "http-status-codes";
// import AppError from "../../error/AppError";
// import { User } from "../user/user.model";
// import { TuserLogin } from "./auth.interface";
// import { createToken } from "./auth.utils";
// import { config } from "../../config";

// const loginUser = async (payload: TuserLogin) => {
//   const user = await User.checkUserExistsByEmail(payload.email);
//   if (user) {
//     console.log("user exists");
//   } else {
//     console.log("user does not exist");
//   }

//   const isDeleted = user?.isDeleted;

//   if (isDeleted) {
//     throw new AppError(StatusCodes.FORBIDDEN, "This user is deleted !");
//   }

//   const userStatus = user?.status;

//   if (userStatus === "blocked") {
//     throw new AppError(StatusCodes.FORBIDDEN, "This user is blocked ! !");
//   }

//   if (!(await User.(payload?.password, user?.password)))
//     throw new AppError(StatusCodes.FORBIDDEN, "Password do not matched");

//   const jwtPayload = {
//     userEmail: user?.email,
//     role: user.role,
//   };

//   const accessToken = createToken(
//     jwtPayload,
//     config.jwt_access_secret as string,
//     config.jwt_access_expires_in as string
//   );

//   const refreshToken = createToken(
//     jwtPayload,
//     config.jwt_refresh_secret as string,
//     config.jwt_refresh_expires_in as string
//   );

//   return {
//     accessToken,
//     refreshToken,
//   };
// };

// export const AuthService = {
//   loginUser,
// };






import { StatusCodes } from "http-status-codes";
import AppError from "../../error/AppError";
import { User } from "../user/user.model";
import { TuserLogin } from "./auth.interface";
import { createToken } from "./auth.utils";
import { config } from "../../config";

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

  const userStatus = user?.status;

  if (userStatus === "blocked") {
    throw new AppError(StatusCodes.FORBIDDEN, "This user is blocked ! !");
  }

  if (!(await User.isPasswordMatched(payload?.password, user?.password)))
    throw new AppError(StatusCodes.FORBIDDEN, "Password do not matched");

  const jwtPayload = {
    userEmail: user?.email,
    role: user.role,
  };

  const accessToken = createToken(
    jwtPayload,
    config.jwt_access_secret as string,
    config.jwt_access_expires_in as string
  );

  const refreshToken = createToken(
    jwtPayload,
    config.jwt_refresh_secret as string,
    config.jwt_refresh_expires_in as string
  );

  return {
    accessToken,
    refreshToken,
  };
};

export const AuthService = {
  loginUser,
};
