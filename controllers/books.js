const Book = require('../models/book');

// INDEX
function booksIndex(req, res) {
  Book
    .find()
    .exec()
    .then((books) => {
      res.render('books/index', { books });
    })
    .catch((err) => {
      res.status(500).render('error',  {err});
    });
}

// NEW
function booksNew(req, res) {
  res.render('books/new');
}

// SHOW
function booksShow(req, res) {
  Book
    .findById(req.params.id)
    .exec()
    .then((book) => {
      if(!book) return res.status(404).send('Not Found');
      res.render('books/show', { book });
    })
    .catch((err) => {
      res.status(500).render('error', { err });
    });
}

// CREATE
function booksCreate(req, res) {
  console.log(req.body);
  Book
    .create(req.body)
    .then(() => {
      res.redirect('/books');
    })
    .catch((err) => {
      res.status(500).render('error', { err });
    });
}

// function booksCreate(req, res, next) {
//   console.log(req.body);// this would just be the form data (without the user information)
//
//   // create a new property called createdBy and make it equal to the logged in user
//   // req.body.createdBy = req.user;
//
//   Book
//     .create(req.body)
//     .then(() => res.redirect('/books'))
//     .catch((err) => {
//       if(err.title === 'ValidationError') {
//         return res.badRequest('/books/new', err.toString());
//       }
//       next(err);
//     });
// }

// EDIT
function booksEdit(req, res) {
  Book
    .findById(req.params.id)
    .exec()
    .then((book) => {
      if(!book) return res.status(404).send('Not found!');
      res.render('books/edit', { book });
    })
    .catch((err) => {
      res.status(500).render('error', { err });
    });
}

// UPDATE
function booksUpdate(req, res) {
  console.log(req.body);
  Book
    .findById(req.params.id)
    .exec()
    .then((book) => {
      if(!book) return res.status(404).send('Not found');

      book = Object.assign(book, req.body);

      return book.save();
    })
    .then((book) => {
      res.redirect(`/books/${book.id}`);
    })
    .catch((err) => {
      res.status(500).render('error', { err });
    });
}

// DELETE
function booksDelete(req, res) {
  Book
    .findById(req.params.id)
    .exec()
    .then((book) => {
      if(!book) return res.status(404).send('Not found');

      return book.remove();
    })
    .then(() => {
      res.redirect('/books');
    })
    .catch((err) => {
      res.status(500).render('error', { err });
    });
}


module.exports = {
  index: booksIndex,
  new: booksNew,
  show: booksShow,
  create: booksCreate,
  edit: booksEdit,
  update: booksUpdate,
  delete: booksDelete
};
