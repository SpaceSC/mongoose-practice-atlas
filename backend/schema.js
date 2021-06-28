const mongoose = require('mongoose');

const cat = new mongoose.Schema({
  name: String,
  age: Number,
  color: String,
});

module.exports = mongoose.model('Cat', cat);