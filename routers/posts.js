const express = require('express')

const router = express()
router.use(express.json())

router.get('/', (req, res) => {
    res.end('El servidor esta corriendo')
})

router.get('/tags', async (req, res) => {
    try {
        const getAlltags= tag.find()
    }
    catch(error){
        console.log(error);
        res.statusCode = 500;
        res.end();
    }
})

router.post('/posts', async (req, res) => {    
    try {
        // Aquí obtengo el id enviado como parametro de ruta
        const postId = req.params.id;

        const Post = await post.create({
            user,
        userImg,
        title,
        content,
        tags,
        coverImage,
        datePublication : {
            day : day,
            miliseconds : mili,
            month : month,
            year : year,
            week : week
        },
        image : postImg,
        likes : 3, 
        comments : 1 
        });

        res.statusCode = 201;
        res.json({
            success: true,
            koder
        });
    }
    catch(error){
        console.log(error);
        res.statusCode = 500;
        res.end();
    }
    
});
