const Post = require('../models/post.model');

// Función de consulta de todos los Post y filtrado
async function getPosts(filters) {
    const posts = await Post.find(filters);
    return posts;
}


// Función de consulta por ID
async function getPostsById(request) {
    const id = request;
    const post = await Post.findById(id);
    return post;
}


// Función de inserción de post nuevo
async function setPost(request) {
    const {user, userImg, title, content, tags, coverImage, datePublication, image, likes, comments, unicorns} = request;    
    const setPost = await Post.create({
        user,
        userImg,
        title,
        content,
        tags,
        coverImage,
        datePublication,
        image,
        likes, 
        comments,
        unicorns
    });
    return setPost;
}

// Función de eliminación de post por ID
async function deletePost(request) {
    const id = request;         
    const deletePost = await Post.findByIdAndDelete(id);
    return deletePost;
}

module.exports = {
    getPosts,
    getPostsById,
    setPost,
    deletePost,
};