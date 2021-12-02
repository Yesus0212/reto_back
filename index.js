require('dotenv').config(); // Aquí estamos utilizando el archivo .env

const express = require('express');
const mongoose = require('mongoose');
const Post = require('./post.model'); // Aquí importamos el modelo
// const routerPosts = require('./routers/posts');  // Aquí importamos el router

// Aquí utilizamos las variables obteniendo el valor desde el .env
const PORT = process.env.PORT;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_HOST = process.env.DB_HOST;
const DB_NAME = process.env.DB_NAME;

const URL = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;

const app = express();
/* app.use(express.json()); */

/* app.get('/posts', async(req, res) => {
    console.log("probando ando");
    try {
        const param = req.query;
        console.log(param);
        const posts = await Post.find({});
        console.log(posts);
        res.json(posts);
        res.end('Se guardo correctamente');

    } catch (err) {
        res.status(501).json({ message: { err } });
    }
}); */


app.get('/posts/:id', async(req, res) => {
    try {
        //Aquí obtengo el id enviado como parametro de ruta
        const postId = req.params.id;
        console.log(postId);
        const postById = await Post.find({ _id: postId });
        console.log(postId);
        res.statusCode = 200;
        res.json(postById);
    } catch (error) {
        console.log("cai al catch: ", error);
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
            console.log('Server is running on port: ', PORT);
        });
    })
    .catch((error) => {
        console.error(error);
    })