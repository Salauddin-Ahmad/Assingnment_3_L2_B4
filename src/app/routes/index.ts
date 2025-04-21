import { Router } from "express";
import {  registerUserRoutes } from "../modules/auth/auth.routes";

const router = Router();

const moduleRoutes = [
    // {
    //     path: "/auth",
    //     module: authRoutes, 
    // },

    {
        path: "/register",
        module: registerUserRoutes, 
    }
]

moduleRoutes.forEach(({ path, module }) => {
    if (module){
      router.use(path, module)
    }
  } );

export default router;