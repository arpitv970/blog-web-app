import express from 'express';
import {
    createBlog,
    delBlog,
    editBlog,
    getAllBlogs,
} from '../controller/blog-controller';

const blogRouter = express.Router();

blogRouter.get('/', getAllBlogs);
blogRouter.post('/createBlog', createBlog);
blogRouter.post('/delBlog', delBlog);
blogRouter.post('/editBlog', editBlog);

export default blogRouter;
