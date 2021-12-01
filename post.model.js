const mongoose = require ('mongoose')

const postSchema = new mongoose.Schema({
    user: {
        type: String,
        minlegth: 2,
        maxlength: 50,
        required: true,
    },
    userImg: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        minlegth: 2,
        maxlength: 50,
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
    coverImg: {
        type: String,
        required: true,
    },
    datePublication:{
        type: Map,
        of: Number,
        required: true,  
    },
    image:{
        type: String,
        required: true,
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
    }
})

const Post = mongoose.model('post', postSchema)

module.exports = Post;