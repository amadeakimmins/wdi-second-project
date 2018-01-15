const Book = require('../models/book');

// INDEX
function booksIndex(req, res, next) {
  Book
    .find()
    .exec()
    .then((books) => res.render('books/index', { books }))
    .catch(next);
}

// NEW
function booksNew(req, res) {
  res.render('books/new');
}

// SHOW
function booksShow(req, res, next) {
  Book
    .findById(req.params.id)
    .exec()
    .then((book) => {
      if(!book) return res.notFound();
      res.render('books/show', { book });
    })
    .catch(next);
}

// CREATE
function booksCreate(req, res, next) {
  console.log(req.body);
  Book
    .create(req.body)
    .then(() => res.redirect('/books'))
    .catch((err) => {
      if(err.name === 'ValidationError') {
        return res.badRequest('/books/new', err.toString());
      }
      next(err);
    });
}

// EDIT
function booksEdit(req, res, next) {
  Book
    .findById(req.params.id)
    .exec()
    .then((book) => {
      if(!book) return res.notFound();
      res.render('books/edit', { book });
    })
    .catch(next);
}

// UPDATE
function booksUpdate(req, res, next) {
  console.log(req.body);
  Book
    .findById(req.params.id)
    .exec()
    .then((book) => {
      if(!book) return res.notFound();

      book = Object.assign(book, req.body);

      return book.save();
    })
    .then((book) => res.redirect(`/books/${book.id}`))
    .catch((err) => {
      if(err.name === 'ValidationError') {
        return res.badRequest(`/books/${req.params.id}/edit`),
        err.toString();
      }
      next(err);
    });
}

// DELETE
function booksDelete(req, res, next) {
  Book
    .findById(req.params.id)
    .exec()
    .then((book) => {
      if(!book) return res.status(404).send('Not found');

      return book.remove();
    })
    .then(() => res.redirect('/books'))
    .catch(next);
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
