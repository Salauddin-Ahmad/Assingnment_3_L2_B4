import catchAsync from "../utils/catchAsync";
import { AnyZodObject } from "zod";
import { NextFunction, Request, Response } from "express";

const validateRequest = (schema: AnyZodObject) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    console.log("validator function");
    await schema.parseAsync({ body: req.body });
    next();
  });
};

export default validateRequest;
