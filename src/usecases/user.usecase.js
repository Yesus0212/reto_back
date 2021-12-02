const User = require('../models/user.model');

// Función de consulta de todos los Users
async function getUsers() {
    const users = await User.find();
    return users;
}

module.exports = {
    getUsers,
}