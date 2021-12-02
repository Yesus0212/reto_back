require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const posts = require('./post.model')
const tag = require('./tags.model')

DB_USER = process.env.DB_USER
DB_PASS = process.env.DB_PASS
DB_HOST = process.env.DB_HOST
DB_NAME = process.env.DB_NAME

const PORT= process.env.PORT

const URL = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`


mongoose
    .connect(URL)
    .then((connection) => {
        console.log('Conectados a la base de datos!')

        // Arrancamos el servidor, cuando ya nos conectamos a la DB
        router.listen(PORT, () => {
            console.log('Servidor corriendo')
        })
    })
    .catch((error) => {
        console.error(error)
    })
