import express from "express";
import { UserController } from "../user/user.controller";
import validateRequest from "../../middlewares/validateRequests";
import { Authvalidation } from "./auth.validation";
import { AuthController } from "./auth.controller";

const router = express.Router();

router.post("/register-user", UserController.registerUser);

router.post(
  "/login-user",
  validateRequest(Authvalidation.loginValidatioinSchema),
  AuthController.loginUser
);

// export default registerUserRoutes;
export const AuthRoutes = router;
