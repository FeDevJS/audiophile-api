const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const router = require('./routes/Router');
const { json } = express;
const app = express();
const PORT = process.env.PORT || 8080;
require('dotenv').config();

app.use( cors() );
app.use( json() );
app.use( router );

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => new Error(err)
);

app.listen(PORT, () => console.log(`Server is running on Port: ${PORT}`));

module.exports = app;
