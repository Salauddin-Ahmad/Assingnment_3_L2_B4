import { Router } from "express";

const router = Router();

const moduleRoutes = [
    {
        path: "/auth",
        module: authRoutes, 
    },
    {
        path: "/api/auth/register",
        // Module: 
    }
]

moduleRoutes.forEach(({ path, module }) => {
    if (module){
      router.use(path, module)
    }
  } );

export default router;