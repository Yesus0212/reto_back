const mongoose = require ('mongoose')

const tagSchema = new mongoose.Schema({
    type: Map,
    of: String,
})

const tag = mongoose.model('tags', tagSchema)

module.exports = tag;