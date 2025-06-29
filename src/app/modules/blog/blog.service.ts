import AppError from "../../error/AppError";
import { Tblog } from "./blog.interface";
import { blogCollection } from "./blog.model";

const createBlogPost = async (payload: Tblog) => {
  const { title, content, author } = payload;
  console.log("Creating blog post with the following details:", {
    payload,
  });

  const blog = await blogCollection.create({
    ...payload,
    isPublished: true,
  });

  // Populate author details (_id, name, email)
  const populatedBlog = await blog.populate("author", "name email");
  return populatedBlog;
};

const deleteBlogPosts = async (blogId: string, userId: string) => {
  const blog = await blogCollection.findById(blogId);

  if (!blog) {
    throw new Error("Blog post not found");
  }

  if (blog.author.toString() !== userId) {
    throw new AppError(400, "You are not authorized to delete this blog post");
  }

  await blogCollection.findByIdAndDelete(blogId);
  console.log("Blog post deleted successfully:", blogId);

  return blog;
};

export const BlogService = {
  createBlogPost,
  deleteBlogPosts,
};
