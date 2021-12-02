const mongoose = require ('mongoose')

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        minlegth: 2,
        maxlength: 50,
        required: true,
    },
    image: {
        type: String,
        minlength: 2,
        required: true,
    },
    name: {
        type: String,
        minlegth: 2,
        maxlength: 100,
        required: true,
    },
    userName: {
        type: String,
        minlegth: 2,
        required: true,
    },
})

const user = mongoose.model('user', userSchema)

module.exports = user;