import Blog from '../model/Blog';

export const getAllBlogs = async (req, res, next) => {
    let blogs;
    try {
        blogs = await Blog.find();
    } catch (err) {
        return console.log(err);
    }

    if (!blogs) {
        return res.status(404).json({ message: 'No Blog found!' });
    }

    return res.status(200).json({ blogs });
};

export const createBlog = async (req, res, next) => {
    const { title, desc, content, imgUrl } = req.body;

    const blog = new Blog({
        title,
        desc,
        content,
        imgUrl,
    });

    try {
        await blog.save();
    } catch (err) {
        return console.log(err);
    }

    return res.status(201).json({ blog });
};

export const delBlog = async (req, res, next) => {
    const { title } = req.body;
    try {
        if (!(await Blog.findOne({ title }))) {
            return res
                .status(404)
                .json({ message: `No blog found with title: ${title}!` });
        }
        await Blog.findOneAndDelete({ title })
            .then((blogData) => {
                console.log(blogData.title);
                return res.status(201).json({
                    message: `Blog with title: ${title} found & deleted successfully!!`,
                });
            })
            .catch((err) => {
                return console.log(err);
            });
    } catch (err) {
        return console.log(err);
    }
};

export const editBlog = async (req, res, next) => {
    const { oldTitle, newTitle, newDesc, newContent, newImgUrl } = req.body;

    try {
        const blogData = await Blog.findOne({ oldTitle });
        if (oldTitle !== blogData.title) {
            return res.status(404).json({
                message: `Blog with title: ${oldTitle} not found!!`,
            });
        }
        await Blog.findOneAndUpdate(
            { oldTitle },
            {
                title: newTitle,
                desc: newDesc,
                content: newContent,
                imgUrl: newImgUrl,
            }
        );

        return res.status(201).json({ message: 'Data Updated!' });
    } catch (err) {
        return console.log(err);
    }
};
