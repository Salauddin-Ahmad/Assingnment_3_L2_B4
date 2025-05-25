import { config } from "dotenv";
import catchAsync from "../../utils/catchAsync";
import { User } from "../user/user.model";
import { AuthService } from "./auth.service";

const loginUser = catchAsync(async (req: any, res: any) => {
  const result = await AuthService.loginUser(req.body);
  console.log(result);

    res.cookie('refreshToken', refreshToken, {
    secure: process.env.NODE_ENV === 'production',
    httpOnly: true,
    sameSite: 'none',
    maxAge: 1000 * 60 * 60 * 24 * 365,
  });
});



export const AuthController = {
  loginUser,
};
