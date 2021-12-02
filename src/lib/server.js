const express = require('express');
const cors = require('cors');

const post = require('../routers/posts.router');
const tag = require('../routers/tags.router');
const user = require('../routers/users.router');

const logger = require('../middlewares/logger')

const server = express();

server.use(express.json());

server.use(cors());
server.options('*', cors());

server.use(logger);

server.use('/posts', post);
server.use('/tags', tag);
server.use('/users', user);


module.exports = server;