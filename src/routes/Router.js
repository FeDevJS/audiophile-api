const express = require('express');
const router = express.Router();
const headphones = require('./categories/headphones');

router.use(headphones);

module.exports = router;
