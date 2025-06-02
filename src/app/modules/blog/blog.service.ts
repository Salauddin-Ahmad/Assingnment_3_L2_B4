import { Tblog } from "./blog.interface";
const createBlogPost = async (payload : Tblog ) => {
   const { title, content, author, isPublished } =  payload; 
}




export const BlogService = {
    createBlogPost,
}