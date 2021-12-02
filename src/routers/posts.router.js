const express = require('express');
const postController = require('../controllers/post.controller')

const router = express.Router()

router.get('/', postController.getPost);
router.get('/:id', postController.getPostById);
router.post('/', postController.setPost);
router.delete('/:id', postController.deletePost);

module.exports = router;