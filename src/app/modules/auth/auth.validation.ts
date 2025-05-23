import { z } from "zod";

const loginValidatioin = z.object({
  email: z.string().email({ message: "invalid email format" }),
  password: z
    .string()
    .min(6, { message: "password must be at least 6 characters long" })
    .max(20, { message: "password must be at most 20 characters long" }),




















});
