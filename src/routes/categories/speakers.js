const express = require('express');
const speakers = express.Router();
const speakerSchema = require('../../models/speakers.model');

speakers.get('/categories/speakers', (req, res) => {
  speakerSchema.find()
    .then(data => res.status(200).json(data))
    .catch(err => res.json(err))
});

module.exports = speakers;
