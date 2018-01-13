const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String },
  address: {
    line1: { type: String, required: true },
    line2: String,
    city: { type: String, required: true },
    postcode: { type: String, required: true },
    country: { type: String, required: true }
  },
  cuisine: { type: String }
});

module.exports = mongoose.model('Restaurant', restaurantSchema);
