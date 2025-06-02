import { Router } from "express";
import { AuthRoutes } from "../modules/auth/auth.routes";
import path from "path";
import { BlogRoutes } from "../modules/blog/blog.routes";

const router = Router();

const moduleRoutes = [
  {
    path: "/auth",
    module: AuthRoutes,
  },
  {
    path: "/blogs",
    module: BlogRoutes,
  },
];

moduleRoutes.forEach(({ path, module }) => {
  if (module) {
    router.use(path, module);
  }
});

export default router;
