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

  return blog;
};

export const BlogService = {
  createBlogPost,
};
