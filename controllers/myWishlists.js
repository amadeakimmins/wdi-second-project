const User = require('../models/user');

function wishlistsIndex(req, res, next) {
  User
    .findById(req.user.id)
    .populate('books')
    .exec()
    .then(user => {
      console.log(user);
      if(!user) return res.status(404).send('Not Found');

      return res.render('wishlists/index', { user });
    })
    .catch(next);
}

function wishlistsShow(req, res, next) {
  User
    .findById(req.user.id)
    .populate(req.params.category)
    .exec()
    .then(user => {
      console.log(user);
      if(!user) return res.status(404).send('Not Found');

      return res.render(`wishlists/${req.params.category}`, { user });
    })
    .catch(next);
}

function wishlistsCreate(req, res, next) {
  User
    .findById(req.user.id);
  console.log(req.user.id)
    // .populate(req.params.category)
    .exec()
    .then((user) => {
      if(!user) return res.status(404).send('Not found');

      user.book.push(req.body);
      return user.save();
    })
    .then((user) => {
      res.redirect(`wishlists/${req.params.category}`);
    })
    .catch(next);
}

module.exports = {
  index: wishlistsIndex,
  show: wishlistsShow,
  create: wishlistsCreate
};
