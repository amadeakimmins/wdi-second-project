const User = require('../models/user');

// render the login form
function sessionNew(req, res) {
  res.render('sessions/new');
}

// login a user
function sessionCreate(req, res, next) {
  User
    .findOne({ email: req.body.email })
    .exec()
    .then((user) => {
      if(!user || !user.validatePassword(req.body.password)) {
        req.flash('danger', 'Unknown email/password combination');
        return res.redirect('/login');
      }

      req.session.userId = user.id;
      req.user = user;

      req.flash('info', `Welcome, ${user.username} 🤗`);
      res.redirect('/');
    })
    .catch(next);
}

//logout
function sessionDelete(req, res) {
  return req.session.regenerate(() => res.redirect('/'));
}


module.exports = {
  new: sessionNew,
  create: sessionCreate,
  delete: sessionDelete
};
