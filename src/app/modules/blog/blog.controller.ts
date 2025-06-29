import { Request, Response } from "express";
import { BlogService } from "./blog.service";
import catchAsync from "../../utils/catchAsync";
import AppError from "../../error/AppError";

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

const deleteBlog = catchAsync(async (req: Request, res: Response) => {
  const blogId = req.params.id;
  const authorId = req.user?.userId;

  if (!authorId) {
    throw new AppError(401, "Invalid token payload. User ID is missing.");
  }
  const result = await BlogService.deleteBlogPosts(blogId, authorId);
  if (!result) {
    throw new AppError(404, "Blog post not found or you are not authorized to delete it.");
  }
  res.status(200).json({
    success: "true",
    message: "Blog deleted successfully",
    statusCode: 200,
  });
});

export const BlogController = {
  createBlogPost,
  deleteBlog,
};
