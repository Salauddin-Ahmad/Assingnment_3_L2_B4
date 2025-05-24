import catchAsync from "../../utils/catchAsync";
import { User } from "../user/user.model";
import { AuthService } from "./auth.service";


const loginUser = catchAsync(async (req: any, res: any) => {

 const result = await AuthService.loginUser(req.body);
 console.log("result", result);
   console.log(req.user, req.body);

//   if (!user) {
//     return res.status(401).json({
//       status: "fail",
//       message: "Invalid email or password",
//       statusCode: 401,
//     });
//   }
//   res.status(200).json({
//     status: "success",
//   });
//   console.log("user data", user);
});

export const AuthController = {
  loginUser,
};
