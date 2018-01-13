const mongoose = require('mongoose');

const podcastSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String },
  author: { type: String, required: true },
  synopsis: { type: String },
  link: { type: String }
});

module.exports = mongoose.model('Podcast', podcastSchema);
