const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost:27017/gamesdb', {
    useNewUrlParser: true,
    useUnifiedTopology : true
  })
  .then(() => console.log('Connect to MongoDB...'))
  .catch(err => console.log('Error, could not connect to MongoDB...', err));

module.exports.Game = require('./game');