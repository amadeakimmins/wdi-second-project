const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: { type: String, required: true },
  books: [{ type: mongoose.Schema.ObjectId, ref: 'Book'}],
  films: [{ type: mongoose.Schema.ObjectId, ref: 'Film'}],
  podcasts: [{ type: mongoose.Schema.ObjectId, ref: 'Podcast'}],
  restaurants: [{ type: mongoose.Schema.ObjectId, ref: 'Restaurant'}],
  tvSeriess: [{ type: mongoose.Schema.ObjectId, ref: 'TvSeries'}]
});

userSchema
  .virtual('passwordConfirmation')
  .set(function setPasswordConfirmation(passwordConfirmation) {
    this._passwordConfirmation = passwordConfirmation;
  });

userSchema.pre('validate', function checkPassword(next) {
  if(this._passwordConfirmation && this._passwordConfirmation !== this.password) this.invalidate('passwordConfirmation', 'does not match');
  next();
});

userSchema.pre('save', function hashPassword(next) {
  if(this.isModified('password')) {
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8));
  }
  next();
});

userSchema.methods.validatePassword = function validatePassword(password) {
  return bcrypt.compareSync(password, this.password);
};


module.exports = mongoose.model('User', userSchema);
