import { z } from "zod";

const blogValidationSchema = z.object({
  Body: z.object({
    title: z
      .string({
        invalid_type_error: "Title must be a string",
      })
      .min(3, { message: "Title must be at least 3 characters" }),

    content: z
      .string({
        invalid_type_error: "Content must be a string",
      })
      .min(10, { message: "Content must be at least 10 characters" }),

    isPublished: z
      .boolean({
        invalid_type_error: "isPublished must be a boolean",
      })
      .optional(),

    author: z
      .string({
        invalid_type_error: "Author must be a string",
      })
      .optional(),
  }),
});

const createBlogPostSchema = z.object({
  body: z.object({
    title: z
      .string()
      .min(3, { message: "Title must be at least 3 characters" }),
    content: z
      .string()
      .min(10, { message: "Content must be at least 10 characters" }),
  }),
});

const updateBlogPost = z.object({
  title: z.string().optional(),
  content: z.string().optional(),
  isPublished: z.boolean().optional(),
});

export const blogValidations = {
  blogValidationSchema,
  createBlogPostSchema,
  updateBlogPost,
};
