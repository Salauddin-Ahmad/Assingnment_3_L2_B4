// types/express/index.d.ts
import { TJwtPayload } from "../../src/app/modules/auth/auth.interface";

declare global {
  namespace Express {
    interface Request {
      user?: TJwtPayload
    }
  }
}
