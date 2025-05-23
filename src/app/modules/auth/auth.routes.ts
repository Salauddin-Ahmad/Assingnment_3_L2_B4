import express from 'express';
import { UserController } from '../user/user.controller';

const router = express.Router();


router.post('/register-user', UserController.registerUser);


router.post('/login-user', UserController.loginUser);

// export default registerUserRoutes;
export const registerUserRoutes = router
