const mongoose = require ('mongoose')

const tagSchema = new mongoose.Schema({
    tags: {
        type: Map,
        of: String,
        required: true,
    }
});

const Tag = mongoose.model('tag', tagSchema)

module.exports = Tag;

