const mongoose = require ('mongoose')

const postSchema = new mongoose.Schema({
    user: {
        type: String,
        minlegth: 2,
        maxlength: 100,
        required: true,
    },
    userImg: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        minlegth: 2,
        required: true,
    },
    content: {
        type: String,
        minlegth: 2,
        required: true,
    },
    tags: {
        type: Map,
        of: String,
        required: true,
    },
    coverImage: {
        type: String,
        required: true,
    },
    datePublication:{
        type: Map,
        of: Number,
        required: true,  
    },
    image:{
        type: String
    },
    likes: {
        type: Number,
        min: 0,
        required: true,
    },
    comments: {
        type: Number,
        min: 0,
        required: true,
    },
    unicorns: {
        type: String,
        min: 0,
        required: true,
    }
})

const Post = mongoose.model('posts', postSchema)

module.exports = Post;