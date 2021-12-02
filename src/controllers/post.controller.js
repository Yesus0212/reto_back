const Post = require('../usecases/post.usecase');

async function getPost(request, response) {
    try {
        const {content, title} = request.query;               
        const filters = {};
    
        if(content) filters.content = { $regex: content };
        if(title) filters.title = title;

        const posts = await Post.getPosts(filters);

        response.statusCode = 200;
        response.json({
            posts
        })
    }
    catch(error) {
        console.error(error);
        response.statusCode = 500;
        response.json({
            success: false,
            message: 'Could not get Posts',
            error
        });
    }
};

async function getPostById(request, response) {
    try {
        const id = request.params.id;
        
        const posts = await Post.getPostsById(id);

        response.statusCode = 200;
        response.json({
            posts
        })
    }
    catch(error) {
        console.error(error);
        response.statusCode = 500;
        response.json({
            success: false,
            message: 'Could not get Post',
            error
        });
    }
};


async function setPost(request, response) {
    try {
        const newPost = request.body;
        const createPost = await Post.setPost(newPost);

        response.statusCode = 200;
        response.json({
            success: true,
            newPost
        })
    }
    catch(error) {
        console.error(error);
        response.statusCode = 500;
        response.json({
            success: false,
            message: 'Could not set new Post',
            error
        });
    }
};


async function deletePost(request, response) {
    try {
        const id = request.params.id;

        const deletePost = await Post.deletePost(id);

        response.statusCode = 200;
        response.json({
            success: true,
            deletePost            
        })
    }
    catch(error) {
        console.error(error);
        response.statusCode = 500;
        response.json({
            success: false,
            message: 'Could not delete a Post',
            error
        });
    }
};


module.exports = {
    getPost,
    getPostById,
    setPost,
    deletePost,
};