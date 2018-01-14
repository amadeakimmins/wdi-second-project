const User = require('../models/user');

function registerNew(req, res) {
  return res.render('registrations/new');
}

function registerCreate(req, res) {
  User
    .create(req.body)
    .then(() => res.redirect('/login'))
    .catch((err) => {
      if(err.name === 'ValidationError') {
        return res.status(400).render('registrations/new', { message: 'Passwords do not match' });
      }
      res.status(500).send(err);
    });
}



module.exports = {
  new: registerNew,
  create: registerCreate
};
