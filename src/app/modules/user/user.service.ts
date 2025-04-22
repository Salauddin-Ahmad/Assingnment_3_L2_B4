import { User } from "./user.model";
import { Tuser } from "./user.interface";

const registerService = async (payload: Tuser) => {
  try {
    const isUserexists = await User.findOne({ email: payload.email });
    if (isUserexists) {
      throw new Error("User already exists");
    }
    const userData: Partial<Tuser> = {
      name: payload.name,
      email: payload.email,
      password: payload.password,
      role: payload.role || "user",
      isBlocked: false,
    };

    const user = await User.create(userData);
    return user;
  } catch (error) {
    console.error("Error in registerService:", error);
    throw new Error("Registration failed");
  }
};

export const UserService = {
    registerService,
}