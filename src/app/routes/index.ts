import { Router } from "express";
import { AuthRoutes } from "../modules/auth/auth.routes";
import path from "path";

const router = Router();

const moduleRoutes = [
  {
    path: "/auth",
    module: AuthRoutes,
  },
];

moduleRoutes.forEach(({ path, module }) => {
  if (module) {
    router.use(path, module);
  }
});

export default router;
