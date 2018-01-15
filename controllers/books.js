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
      res.status(500).render('error',  { err });
    });
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
  show: booksShow,
  create: booksCreate,
  edit: booksEdit,
  update: booksUpdate,
  delete: booksDelete
};
