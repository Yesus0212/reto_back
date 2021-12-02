const express = require('express');
const tagController = require('../controllers/tag.controller')

const router = express.Router()

router.get('/', tagController.getTag);

module.exports = router;