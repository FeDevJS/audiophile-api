const express = require('express');
const headphones = express.Router();
const headphoneSchema = require('../../models/headphone');

headphones.get('/categories/headphones', (req, res) => {
  headphoneSchema
    .find()
    .then(data => res.status(200).json(data))
    .catch(err => res.json(err))
});

module.exports = headphones;
