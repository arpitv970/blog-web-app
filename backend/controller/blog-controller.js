import Blog from '../model/Blog';

export const getAllBlogs = async (req, res, next) => {
    let blogs;
    try {
        blogs = await Blog.find();
    } catch (err) {
        return console.log(err);
    }

    if (!blogs) {
        return res.status(404).json({ message: 'No Blog post found!!' });
    }

    return res.status(200).json({ blogs });
};

export const createBlog = async (req, res, next) => {
    const { title, desc, content, img, user } = req.body;
    let blog = new Blog({
        title,
        desc,
        content,
        img,
        user,
    });
    try {
        await blog.save();
    } catch (err) {
        return console.log(err);
    }

    return res.status(200).json({ blog });
};

export const updateBlog = async (req, res, next) => {
    const blogId = req.params.id;
    const { title, desc, content, img } = req.body;

    let blogUpdate;
    try {
        blogUpdate = await Blog.findByIdAndUpdate(blogId, {
            title,
            desc,
            content,
            img,
        });
    } catch (err) {
        return console.log(err);
    }

    if (!blogUpdate) {
        return res
            .status(500)
            .json({ message: 'Unable to update, please try again!' });
    }

    return res.status(200).json({ blogUpdate });
};

export const getBlogById = async (req, res, next) => {
    const blogId = req.params.id;
    let blog;
    try {
        blog = await Blog.findById(blogId);
    } catch (err) {
        return console.log(err);
    }

    if (!blog) {
        return res.status(404).json({ message: "Blog doesn't exists!" });
    }

    return res.status(200).json({ blog });
};

export const deleteBlog = async (req, res, next) => {
    const blogId = req.params.id;
    let blog;

    try {
        blog = await Blog.findByIdAndDelete(blogId);
    } catch (err) {
        return console.log(err);
    }

    if (!blog) {
        return res.status(400).json({ message: 'Unable to delete the blog!' });
    }

    return res.status(200).json({ message: 'Blog Deleted!!' });
};
