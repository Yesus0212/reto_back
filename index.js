require('dotenv').config(); // Aquí estamos utilizando el archivo .env

const express = require('express');
const mongoose = require('mongoose');
const Post = require('./post.model');  // Aquí importamos el modelo
const routerPosts = require('./routers/posts');  // Aquí importamos el router

// Aquí utilizamos las variables obteniendo el valor desde el .env
const PORT = process.env.PORT;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_HOST = process.env.DB_HOST;
const DB_NAME = process.env.DB_NAME;

const URL = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.end('Server is running')
});

// app.get('/koders', async (req, res) => {
//     const koders = await Koder.find({});
//     res.json(koders);
// });

app.get('/posts', async (req, res) => {
    try{
        const {content, title} = req.query;      // Aquí hacemos la destructuración de los parametros que recibimos desde query params  
               
        const filters = {};
    
        filters.$or = [
            { content : {$regex: content}},
            { title: title }
        ]

        const posts = await Post.find(filters);       
    
        res.json(posts);
    }
    catch(error) {
        console.error(error);
        res.statusCode = 500;
        res.end();
    }
});

app.delete('/posts/:id', async (req, res) => {    
    try {
        // Aquí obtengo el id enviado como parametro de ruta
        const postId = req.params.id;
        
        const deletePost = await Post.deleteOne(`{ id: ${postId}}`)

        res.statusCode = 200;
        res.json({
            success: true
        });
    }
    catch(error){
        console.log(error);
        res.statusCode = 404;
        res.end();
    }
    
});

app.delete('/posts', async (req, res) => {    
    try {
        const postId = req.query;
        
        const deletePost = await Post.deleteOne(`{ id: ${postId}}`)

        res.statusCode = 200;
        res.json({
            success: true
        });
    }
    catch(error){
        console.log(error);
        res.statusCode = 404;
        res.end();
    }
    
});



// Es una promesa (por lo que es asincrono)
mongoose
    .connect(URL)
    .then((connection) => {
        console.log('DB Connected');      
        
        // Asincrono con un callback, cuando ya se levanto la BD, se levantara el server.
        app.listen(PORT, () => {
            console.log('Server is running');
        });
    })
    .catch((error) => {
        console.error(error);
    })


