const router = require('express').Router();

const books = require('../controllers/books');
const films = require('../controllers/films');
const podcasts = require('../controllers/podcasts');

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


//  PODCAST ROUTES
router.route('/podcasts')
  .get(podcasts.index)
  .post(podcasts.create);

router.route('/podcasts/new')
  .get(podcasts.new);

router.route('/podcasts/:id')
  .get(podcasts.show)
  .put(podcasts.update)
  .delete(podcasts.delete);

router.route('/podcasts/:id/edit')
  .get(podcasts.edit);

module.exports = router;
