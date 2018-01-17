const mongoose = require('mongoose');

const tvSeriesSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String },
  year: { type: Number },
  averageRating: { type: Number},
  director: { type: String, required: true },
  synopsis: { type: String },
  trailer: { type: String }
});

module.exports = mongoose.model('TvSeries', tvSeriesSchema);
