import express from "express";
import { UserController } from "../user/user.controller";
import validateRequest from "../../middlewares/validateRequests";
import { Authvalidation } from "./auth.validation";
import { AuthService } from "./auth.service";

const router = express.Router();

router.post("/register-user", UserController.registerUser);

router.post(
  "/login-user",
  validateRequest(Authvalidation.loginValidatioin),
  AuthService.loginUser
);

// export default registerUserRoutes;
export const AuthRoutes = router;
