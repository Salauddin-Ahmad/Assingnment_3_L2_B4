import { NextFunction, Request, Response } from "express";
import { User } from "./user.model";
import { UserService } from "./user.service";

const registerUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await UserService.registerService(req.body);
    res.status(201).json({
      status: "success",
      message: "User registered successfully",
      statusCode: 201,
      data: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
    console.log("user data", user);
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Validation error",
      statusCode: 400,
      error: error,
      stack: "error stack"
    });

    console.error("Full error", error);
    next(error);
  }
};


export const UserController = {
  registerUser,
};
