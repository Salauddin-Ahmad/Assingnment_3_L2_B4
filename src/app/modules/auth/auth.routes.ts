import express from 'express';

const router = express.Router();


router.post('/register-user', usercontroller.createUser);


// export default registerUserRoutes;
export const registerUserRoutes = router
