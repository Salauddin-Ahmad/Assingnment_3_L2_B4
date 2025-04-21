import { Request, Response } from 'express';
import { TuserRegister } from './user.interface';
import { User } from "./user.model";

const registerUser = async (req: Request<{}, {}, TuserRegister>, res: Response )=> {

    const { name, email, password } = req.body;
    try {
        // Check if user already exists
        const userExists = await User.findOne({email});
    } catch (error) {
        res.status(500).json({ message: "User already exists" });
    }
//   create new user
const user = await User.create({
    name,
    email,
    password
})

}