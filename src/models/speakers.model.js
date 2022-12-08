const mongoose = require('mongoose');

const speakerSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  id: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  features: {
    type: String,
    required: true
  },
  contains: {
    type: Array,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  gallery: {
    type: Array,
    required: true
  }
});

module.exports = mongoose.model('speakers', speakerSchema);
