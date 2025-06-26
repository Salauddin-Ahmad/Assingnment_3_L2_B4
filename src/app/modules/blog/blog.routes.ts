import  express  from 'express';
import validateRequest from '../../middlewares/validateRequests';
import { BlogController } from './blog.controller';
import { blogValidations } from './blog.validation';


const router = express.Router();


router.post('/',
    
    validateRequest(blogValidations.blogValidationSchema),
    BlogController.createBlogPost,
)

export const BlogRoutes = router;   