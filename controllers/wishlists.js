const User = require('../models/user');

// Showing the main page
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

// showing the selected wishlist
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

// adding item to the chosen wishlist
function wishlistsCreate(req, res, next) {

  User
    .findById(req.user.id)
    .exec()
    .then(user => {
      if(!user) return res.status(404).send('Not found');

      user[req.params.category].push(req.body.id);
      return user.save();
    })
    .then(() => {
      res.redirect(`/${req.params.category}`);
    })
    .catch(next);
}

// function createCommentRoute(req, res, next) {
//
//   req.body.createdBy = req.user; //attach the logged in user to the body of the request
//
//   Hotel
//     .findById(req.params.id)
//     .exec()
//     .then((hotel) => {
//       if(!hotel) return res.notFound();
//
//       hotel.comments.push(req.body); // pushing the comments into the body
//       return hotel.save();
//     })
//     .then((hotel) => {
//       res.redirect(`/hotels/${hotel.id}`);
//     })
//     .catch(next);
// }

// function deleteCommentRoute(req, res, next) {
//   Hotel
//     .findById(req.params.id)
//     .exec()
//     .then((hotel) => {
//       if(!hotel) return res.notFound();
//
//       const comment = hotel.comments.id(req.params.commentId);
//       comment.remove();
//
//       return hotel.save();
//     })
//     .then((hotel) => {
//       res.redirect(`/hotels/${hotel.id}`);
//     })
//     .catch(next);
// }

// create a delete/ done resource which removes from wishlist

module.exports = {
  index: wishlistsIndex,
  show: wishlistsShow,
  create: wishlistsCreate
};
