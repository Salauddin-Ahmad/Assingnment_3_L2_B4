import { z } from "zod";

const loginValidatioinSchema = z.object({
  body: z.object({
    email: z.string().email({ message: "invalid email format" }),
    password: z
      .string()
      .min(6, { message: "password must be at least 6 characters long" })
      .max(20, { message: "password must be at most 20 characters long" }),
  }),
});

const registerValidation = z.object({
  email: z.string().email({ message: "invalid email format" }),
  password: z
    .string()
    .min(6, { message: "password must be at least 6 characters long" })
    .max(20, { message: "password must be at most 20 characters long" }),
  name: z
    .string()
    .min(3, { message: "name must be at least 3 characters long" })
    .max(20, { message: "name must be at most 20 characters long" }),
});

export const Authvalidation = {
  loginValidatioinSchema,
  registerValidation,
};
