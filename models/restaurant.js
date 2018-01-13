const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String },
  location: { type: String },
  cuisine: { type: String },
  averageRating: { type: Number}
});

module.exports = mongoose.model('Restaurant', restaurantSchema);
