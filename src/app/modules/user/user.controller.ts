import { NextFunction, Request, Response } from "express";
import { User } from "./user.model";
import { UserService } from "./user.service";

const registerUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = UserService.registerService(req.body);
    res.status(201).json({
      status: "success",
      message: "User registered successfully",
      data: user,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || "Something went wrong",
    });
    next(error);
  }
};

export const UserController = {
  registerUser,
};
