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
      success: "true",
      message: "User registered successfully",
      statusCode: 201,
      data: {
        _id: user._id,
        name: user.name,
        email: user.email,
      },
    });
    console.log("user data", user);
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: "Validation error",
      statusCode: 400,
      error: error.message || "An error occurred",
      stack: "error stack",
    });

    console.error("Full error", error);
    next(error);
  }
};

// const loginUsers = async (req: any , res: any, next: any) => {
//   try {
//     const { email, password } = req.body;
//     const user = await User.findOne({
//       email: email,
//       password: password,
//     });

//     if (!user) {
//       return res.status(401).json({
//         status: "fail",
//         message: "Invalid email or password",
//         statusCode: 401,
//       });
//     }
//     res.status(200).json({
//       status: "success",
//     });
//     console.log("user data", user);
//   } catch (error: any) {
//     res.status(500).json({
//       success: false,
//       message: "Validation error",
//       statusCode: 400,
//       error: error,
//       stack: "error stack",
//     })
//   }
// };

export const UserController = {
  registerUser,
  // loginUsers,
};
