const User = require('../models/user');

// Showing the main page
function wishlistsIndex(req, res, next) {
  User
    .findById(req.user.id)
    .populate('books')
    .exec()
    .then(user => {
      if(!user) return res.notFound();
      return res.render('wishlists/index', { user });
    })
    .catch(next);
}

// showing the selected wishlist
function wishlistsShow(req, res, next) {
  User
    .findById(req.user.id)
    .populate(req.params.category)
    .exec()
    .then(user => {
      if(!user) return res.notFound();
      return res.render(`wishlists/${req.params.category}`, { user });
    })
    .catch(next);
}

// adding item to the chosen wishlist
function wishlistsCreate(req, res, next) {
  User
    .findById(req.user.id)
    .exec()
    .then(user => {
      if(!user) return res.notFound();

      if (user[req.params.category].indexOf(req.body.id) === -1) {
        user[req.params.category].push(req.body.id);
      } else {
        req.flash('secondary', 'Already in your wishlists!');
      }
      return user.save();
    })
    .then(() => {
      res.redirect(`/${req.params.category}`);
    })
    .catch(next);
}

// create a delete/ done resource which removes from wishlist
// function wishlistsDelete(req, res, next) {
//
//   User
//     .findById(req.user.id)
//     .exec()
//     .then(user => {
//       if(!user) return res.notFound();
//
//       // const category = user[req.params.category];
//
//       // category.find(obj => obj.name === req.params.id);
//       // const index = category.indexOf(req.params.itemId);
//       // category.splice(index, 1);
//
//
//       // look up array method filter
//       // user[req.params.category] = user[req.params.category].filter(obj => obj.id !== req.params.id);
//
//       return user.save();
//     })
//     .then(() => {
//       res.redirect(`/wishlists/${req.params.category}`);
//     })
//     .catch(next);
// }

function wishlistsDelete(req, res, next) {

  User
    .findById(req.user.id)
    .exec()
    .then(user => {
      if(!user) return res.notFound();

      const category = user[req.params.category];

      const index = category.indexOf(req.params.itemId);

      console.log(index);
      category.splice(index, 1);

      return user.save();
    })
    .then(() => {
      res.redirect(`/wishlists/${req.params.category}`);
    })
    .catch(next);
}

module.exports = {
  index: wishlistsIndex,
  show: wishlistsShow,
  create: wishlistsCreate,
  delete: wishlistsDelete
};
