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

export const BlogService = {
  createBlogPost,
};
