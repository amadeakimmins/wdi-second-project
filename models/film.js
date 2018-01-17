const mongoose = require('mongoose');

const filmSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String },
  year: { type: Number },
  averageRating: { type: Number},
  director: { type: String },
  synopsis: { type: String },
  trailer: { type: String }
});

filmSchema
  .virtual('imageSRC')
  .get(function getImageSRC() {
    if(!this.image) return null;
    if(this.image.match(/^http/)) return this.image;
    return `https://image.tmdb.org/t/p/w500/${this.image}`;
  });

module.exports = mongoose.model('Film', filmSchema);
