const express = require('express');
const router = express.Router();
const headphones = require('./categories/headphones');
const speakers = require('../routes/categories/speakers');
const earphones = require('../routes/categories/earphones');

router.use( headphones );
router.use( speakers );
router.use( earphones );

module.exports = router;
