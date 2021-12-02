const User = require('../usecases/user.usecase');

async function getUser(request, response) {
    try {
        
        const users = await User.getUsers();

        response.statusCode = 200;
        response.json({
            success: true,
            message: 'Find Users',
            data: {
                users
            }
        })
    }
    catch(error) {
        console.error(error);
        response.statusCode = 500;
        response.json({
            success: false,
            message: 'Could not get Users',
            error
        });
    }
};

module.exports = {
    getUser,
}