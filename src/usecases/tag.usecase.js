const Tag = require('../models/tag.model');

// Función de consulta de todos los Users
async function getTags() {
    const tags = await Tag.find();
    return tags;
}

module.exports = {
    getTags,
}