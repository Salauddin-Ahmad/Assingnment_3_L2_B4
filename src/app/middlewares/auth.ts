import { NextFunction, Request, RequestHandler, Response } from "express";
import { TuserRole } from "../modules/user/user.interface";


//  catchAsync is a higher-order function that takes a request handler function and returns a new function that handles errors
//  by catching any rejected promises and passing the error to the next middleware function.
export const catchAsync = (fn: RequestHandler) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch((error) => next(error));
  };
};

const userRole = (...requiredUserRoles: TuserRole[]) => {
  return catchAsync((async(req, res, next) => {

  }));
};
