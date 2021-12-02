const Tag = require('../usecases/tag.usecase');

async function getTag(request, response) {
    try {
        
        const tags = await Tag.getTags();

        response.statusCode = 200;
        response.json({
            tags            
        })
    }
    catch(error) {
        console.error(error);
        response.statusCode = 500;
        response.json({
            success: false,
            message: 'Could not get Tags',
            error
        });
    }
};

module.exports = {
    getTag,
}