import { NextFunction, Request, RequestHandler, Response } from "express";
import { TuserRole } from "../modules/user/user.interface";
import catchAsync from "../utils/catchAsync";



//  catchAsync is a higher-order function that takes a request handler function and returns a new function that handles errors
//  by catching any rejected promises and passing the error to the next middleware function.


const auth = (...requiredUserRoles: TuserRole[]) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    console.log('requiredUserRoles', requiredUserRoles);
  });
};
