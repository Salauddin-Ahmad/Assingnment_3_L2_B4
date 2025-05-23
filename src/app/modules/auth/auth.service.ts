// import { TuserRegister } from "../user/user.interface";
import { Tuser } from "../user/user.interface";
import { User } from "../user/user.model";

const registerUser = async (payload: TuserRegister) => {
    const { name, email, password } = payload;

    // Check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
        throw new Error("User already exists");
    }

    // Create new user
    await User.create({
        name,
        email,
        password,
    });

    return { message: "User registered successfully" };
};

    const loginUser = async (payload: Tuser) => {
        console.log("payload", payload);
    }


export const AuthService = {
    registerUser,
    loginUser,
}