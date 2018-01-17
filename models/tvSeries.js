const mongoose = require('mongoose');

const tvSeriesSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  year: { type: Number },
  averageRating: { type: Number},
  synopsis: { type: String }
});

tvSeriesSchema
  .virtual('imageSRC')
  .get(function getImageSRC() {
    if(!this.image) return null;
    if(this.image.match(/^http/)) return this.image;
    return `https://image.tmdb.org/t/p/w500/${this.image}`;
  });

module.exports = mongoose.model('TvSeries', tvSeriesSchema);
