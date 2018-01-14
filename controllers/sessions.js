const User = require('../models/user');

// render the login form
function sessionNew(req, res) {
  console.log('in here');
  res.render('sessions/new');
}

// login a user
function sessionCreate(req, res) {
  console.log(req.body);
  User
    .findOne({email: req.body.email})
    .exec()
    .then((user) => {
      if(!user || !user.validatePassword(req.body.password)) {
        return res.status(401).render('sessions/new', {message: 'Unrecognised credentials 🤷‍'});
      }
      req.session.userId = user.id;
      req.flash('info', `Welcome, ${user.username} 🤗`);
      res.redirect('/');
    })
    .catch((err) => {
      console.log(err);
      res.status(500).end();
    });
}

//logout
function sessionDelete(req, res) {
  console.log('is logged out');
  return req.session.regenerate(() => {
    res.redirect('/');
  });
}


module.exports = {
  new: sessionNew,
  create: sessionCreate,
  delete: sessionDelete
};
