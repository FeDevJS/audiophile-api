const express = require('express');
const router = express.Router();
const headphones = require('./categories/headphones');
const speakers = require('../routes/categories/speakers');

router.use( headphones );
router.use( speakers );

module.exports = router;
