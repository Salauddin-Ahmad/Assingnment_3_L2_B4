import { Router } from "express";
import { authRoutes } from "../modules/auth/auth.routes";

const router = Router();

const moduleRoutes = [
    {
        path: "/api/auth/",
        module: authRoutes, 
    },
    {
        path: "/api/auth/register",
        module: authRoutes, 
    }
]

moduleRoutes.forEach(({ path, module }) => {
    if (module){
      router.use(path, module)
    }
  } );

export default router;