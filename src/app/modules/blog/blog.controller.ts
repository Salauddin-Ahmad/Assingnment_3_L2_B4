import { Request, Response } from "express";
import { BlogService } from "./blog.service";
import catchAsync from "../../utils/catchAsync";

const createBlogPost = catchAsync(async (req: Request, res: Response) => { // Assuming req.user is populated by auth middleware
const authorId = req.user?._id;
 const result = await BlogService.createBlogPost({
    ...req.body,
    author: authorId,
  });
  res.status(201).json({
    status: "success",
    message: "Blog post created successfully",
    statusCode: 201,
    data: result,
  });
});

export const BlogController = {
  createBlogPost,
};
