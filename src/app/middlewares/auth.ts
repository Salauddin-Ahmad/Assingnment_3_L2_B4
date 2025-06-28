import  jwt  from "jsonwebtoken";
import { NextFunction, Request, RequestHandler, Response } from "express";
import { TuserRole } from "../modules/user/user.interface";
import catchAsync from "../utils/catchAsync";
import AppError from "../error/AppError";
import { config } from "../config";
import { TJwtPayload } from "../modules/auth/auth.interface";

//  catchAsync is a higher-order function that takes a request handler function and returns a new function that handles errors
//  by catching any rejected promises and passing the error to the next middleware function.

export const auth = (...requiredUserRoles: TuserRole[]) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    // const token = req.headers.authorization?.split(" ")[1];
    const token = req.headers.authorization;

    if (!token || !token.startsWith("Bearer ")) {
      throw new AppError(401, "No token provided, please login first");
    }

    const decoded = jwt.verify(token, config.jwt_access_secret as string) as TJwtPayload;
    req.user = decoded;
    
    if (!decoded) {
      throw new AppError(401, "Invalid token, please login again");
    }
    

    // // Optionally: fetch user details from DB
    // const user = await User.findById(decoded._id);
    // if (!user) {
    //   throw new AppError(404, "User not found");
    // }

    console.log("requiredUserRoles", requiredUserRoles);

    next();
  });
};
