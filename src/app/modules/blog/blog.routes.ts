import  express  from 'express';
import validateRequest from '../../middlewares/validateRequests';
import { BlogController } from './blog.controller';
import { blogValidations } from './blog.validation';
import { auth } from '../../middlewares/auth';


const router = express.Router();


// MARK: Hello world 
// TODO: delete blog post

// #region:1 Create Route to create a blog post
// #endregion: 


router.post(
  '/',
  auth(), // ⬅️ Require any logged-in user
  validateRequest(blogValidations.createBlogPostSchema),
  BlogController.createBlogPost,
);


router.delete(
  '/:id',
  auth(), // ⬅️ Require user with 'deleteAny' permission on 'blog'
  BlogController.deleteBlog, // Assuming you have a deleteBlogPost method in your controller

)










export const BlogRoutes = router;   