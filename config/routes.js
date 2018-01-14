const router = require('express').Router();

const books = require('../controllers/books');
const films = require('../controllers/films');

router.get('/', (req, res) => res.render('statics/index'));

// BOOKS ROUTES
router.route('/books')
  .get(books.index)
  .post(books.create);

router.route('/books/new')
  .get(books.new);

router.route('/books/:id')
  .get(books.show)
  .put(books.update)
  .delete(books.delete);

router.route('/books/:id/edit')
  .get(books.edit);

//  FILM ROUTES
router.route('/films')
  .get(films.index)
  .post(films.create);

router.route('/films/new')
  .get(films.new);

router.route('/films/:id')
  .get(films.show)
  .put(films.update)
  .delete(films.delete);

router.route('/films/:id/edit')
  .get(films.edit);

module.exports = router;
