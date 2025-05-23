import { catchAsync } from "../../middlewares/auth";
import { AuthService } from "./auth.service";

const login = catchAsync(async (req, res) =>  {
    
    const result = await  AuthService.loginUser(req.body);

})

const registerUser = async (req, res) =>  {

}


export const AuthController = {
login,
registerUser,
};