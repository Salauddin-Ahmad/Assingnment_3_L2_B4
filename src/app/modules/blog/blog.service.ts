import { Tblog } from "./blog.interface";
const createBlogPost = async (payload : Tblog ) => {
   const { title, content, author, isPublished } =  payload; 
   console.log("Creating blog post with the following details:", {
    payload
   })
}




export const BlogService = {
    createBlogPost,
}