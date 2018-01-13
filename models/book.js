const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String },
  author: { type: String, required: true },
  synopsis: { type: String }
});

module.exports = mongoose.model('Book', bookSchema);
