import express from 'express';

const router = express.Router();


router.post('/login', (req, res) => {
    // Handle login logic here
    res.send('Login route');
})

router.post('/register')


// export default authRoutes;
export const authRoutes = router
