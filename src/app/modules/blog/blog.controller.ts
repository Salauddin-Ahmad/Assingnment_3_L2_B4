import { Request, Response } from "express";
import { BlogService } from "./blog.service";
import catchAsync from "../../utils/catchAsync";

const createBlogPost = catchAsync(async (req: Request, res: Response) => {
  // Assuming req.user is populated by auth middleware
  const authorId = req.user?.userId;

  const result = await BlogService.createBlogPost({
    ...req.body,
    author: authorId,
  });
  res.status(201).json({
    success: "true",
    message: "Blog created successfully",
    statusCode: 201,
    data: {
      _id: result._id,
      title: result.title,
      content: result.content,
      author: result.author, // This includes { _id, name, email }
    },
  });
});

export const BlogController = {
  createBlogPost,
};
