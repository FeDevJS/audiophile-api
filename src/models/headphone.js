const mongoose = require('mongoose');

const headphoneSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  id: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('headphones', headphoneSchema);