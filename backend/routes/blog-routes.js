import express from 'express';
import {
    createBlog,
    deleteBlog,
    getAllBlogs,
    getBlogById,
    getBlogByUser,
    updateBlog,
} from '../controller/blog-controller';

const blogRouter = express.Router();

blogRouter.get('/', getAllBlogs);
blogRouter.post('/createBlog', createBlog);
blogRouter.put('/updateBlog/:id', updateBlog);
blogRouter.get('/:id', getBlogById);
blogRouter.delete('/:id', deleteBlog);
blogRouter.get('/user/:id', getBlogByUser);

export default blogRouter;
