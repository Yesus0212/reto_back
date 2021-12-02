const mongoose = require ('mongoose')

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        minlegth: 2,
        maxlength: 50,
        required: true,
    },
    name: {
        type: String,
        minlegth: 2,
        maxlength: 100,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        minlegth: 2,
        required: true,
    }
})

const User = mongoose.model('user', userSchema)

module.exports = User;