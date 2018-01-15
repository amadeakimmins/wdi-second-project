function secureRoute(req, res, next) {
  if(!req.session.userId) {
    return req.session.regenerate(() => {
      req.flash('danger', 'You need to log in ⛔️ ');
      return res.redirect('/login');
    });
  }

  next();
}

module.exports = secureRoute;
