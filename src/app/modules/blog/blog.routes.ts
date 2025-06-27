import  express  from 'express';
import validateRequest from '../../middlewares/validateRequests';
import { BlogController } from './blog.controller';
import { blogValidations } from './blog.validation';
import { auth } from '../../middlewares/auth';


const router = express.Router();


// router.post('/',
//     validateRequest(blogValidations.createBlogPostSchema),
//     BlogController.createBlogPost,
// )

router.post(
  '/',
  auth(), // ⬅️ Require any logged-in user
  validateRequest(blogValidations.createBlogPostSchema),
  BlogController.createBlogPost,
);

export const BlogRoutes = router;   