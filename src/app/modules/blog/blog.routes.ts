import  express  from 'express';
import { Tblog } from './blog.interface';
import validateRequest from '../../middlewares/validateRequests';
import blogValidationSchema from './blog.validation';
import { BlogController } from './blog.controller';


const router = express.Router();


router.post('/create',
    validateRequest(blogValidationSchema),
    BlogController.createBlogPost,
)

export const BlogRoutes = router;