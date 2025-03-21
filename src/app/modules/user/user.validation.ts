import { z } from "zod";

const userValidationSchema = z.object({
  name: z.string({
    invalid_type_error: "Name must be a string",
  }).min(3, { message: "Name must be at least 3 characters" }),

  email: z.string({
    invalid_type_error: "Email must be a string",
  }).email({ message: "Invalid email format" }),

  password: z.string({
    invalid_type_error: "Password must be a string",
  })
    .min(6, { message: "Password must be at least 6 characters" })
    .max(20, { message: "Password cannot be more than 20 characters" }),

  role: z.enum(["admin", "user", "superAdmin"], {
    invalid_type_error: "Role must be one of: admin, user, superAdmin",
  }),

  isBlocked: z.boolean({
    invalid_type_error: "isBlocked must be a boolean",
  }).default(false),
});

export const UserValidation = {
  userValidationSchema,
};
