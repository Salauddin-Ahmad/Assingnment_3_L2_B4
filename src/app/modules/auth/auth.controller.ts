import { config } from "dotenv";
import catchAsync from "../../utils/catchAsync";
import { User } from "../user/user.model";
import { AuthService } from "./auth.service";
import { StatusCodes } from "http-status-codes";
import sendResponse from "../../utils/sendResponse";

const loginUser = catchAsync(async (req, res) => {
  const result = await AuthService.loginUser(req.body);
  console.log(result);


  const { accessToken, refreshToken } = result;

    res.cookie('refreshToken', refreshToken, {
    secure: process.env.NODE_ENV === 'production',
    httpOnly: true,
    sameSite: 'none',
    maxAge: 1000 * 60 * 60 * 24 * 365,
  });
  
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success : true,
    message: "Login successful",
    data: {
      token: accessToken
    }

  })

});



export const AuthController = {
  loginUser,
};
