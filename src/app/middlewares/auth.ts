import { NextFunction, Request, RequestHandler, Response } from "express";
import { TuserRole } from "../modules/user/user.interface";
import catchAsync from "../utils/catchAsync";
import AppError from "../error/AppError";



//  catchAsync is a higher-order function that takes a request handler function and returns a new function that handles errors
//  by catching any rejected promises and passing the error to the next middleware function.


export const auth = (...requiredUserRoles: TuserRole[]) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    // const token = req.headers.authorization?.split(" ")[1];
    const token = req.headers.authorization;
    if (!token) {
      throw new AppError(401, "No token provided, please login first");
    }
    console.log('requiredUserRoles', requiredUserRoles);
  });
};
