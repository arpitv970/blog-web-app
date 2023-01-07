import express from 'express';
import {
    createBlog,
    deleteBlog,
    getAllBlogs,
    getBlogById,
    updateBlog,
} from '../controller/blog-controller';

const blogRouter = express.Router();

blogRouter.get('/', getAllBlogs);
blogRouter.post('/createBlog', createBlog);
blogRouter.put('/updateBlog/:id', updateBlog);
blogRouter.get('/:id', getBlogById);
blogRouter.delete("/:id", deleteBlog)

export default blogRouter;
