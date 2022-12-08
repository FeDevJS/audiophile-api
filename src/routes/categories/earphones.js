const express = require('express');
const earphones = express.Router();
const earphoneSchema = require('../../models/earphone.model');

earphones.get('/categories/earphones', (req, res) => {
  earphoneSchema.find()
    .then(data => res.status(200).json(data))
    .catch(err => res.json(err))
});

module.exports = earphones;
