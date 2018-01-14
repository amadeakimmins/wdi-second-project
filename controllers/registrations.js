const User = require('../models/user');

function registerNew(req, res) {
  return res.render('registrations/new');
}

function registerCreate(req, res, next) {
  User
    .create(req.body)
    .then(() => res.redirect('/login'))
    .catch((err) => {
      if(err.name === 'ValidationError') {
        return res.badRequest('/register', err.toString());
      }
      next(err);
    });
}

module.exports = {
  new: registerNew,
  create: registerCreate
};
