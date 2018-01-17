const router        = require('express').Router();
const books         = require('../controllers/books');
const films         = require('../controllers/films');
const podcasts      = require('../controllers/podcasts');
const restaurants   = require('../controllers/restaurants');
const registrations = require('../controllers/registrations');
const sessions      = require('../controllers/sessions');
const wishlists     = require('../controllers/wishlists');
const tvSeriess     = require('../controllers/tvSeriess');
const secureRoute   = require('../lib/secureRoute');


router.get('/', (req, res) => res.render('statics/index'));

// WISHLIST ROUTES
router.route('/wishlist')
  .get(secureRoute, wishlists.index);

router.route('/wishlists/:category')
  .get(secureRoute, wishlists.show)
  .post(secureRoute, wishlists.create); // adding an id into the user and saving the user

router.route('/wishlists/:category/:itemId')
  .delete(secureRoute, wishlists.delete);

// BOOKS ROUTES
router.route('/books')
  .get(books.index)
  .post(secureRoute, books.create);

router.route('/books/new')
  .get(secureRoute, books.new);

router.route('/books/:id')
  .get(books.show)
  .put(secureRoute, books.update)
  .delete(secureRoute, books.delete);

router.route('/books/:id/edit')
  .get(secureRoute, books.edit);

// TV ROUTES
router.route('/tvSeriess')
  .get(tvSeriess.index);

router.route('/tvSeriess/new')
  .get(secureRoute, tvSeriess.new);

//  FILM ROUTES
router.route('/films')
  .get(films.index)
  .post(secureRoute, films.create);

router.route('/films/new')
  .get(secureRoute, films.new);

router.route('/films/:id')
  .get(films.show)
  .put(secureRoute, films.update)
  .delete(secureRoute, films.delete);

router.route('/films/:id/edit')
  .get(secureRoute, films.edit);

//  PODCAST ROUTES
router.route('/podcasts')
  .get(podcasts.index)
  .post(secureRoute, podcasts.create);

router.route('/podcasts/new')
  .get(secureRoute, podcasts.new);

router.route('/podcasts/:id')
  .get(podcasts.show)
  .put(secureRoute, podcasts.update)
  .delete(secureRoute, podcasts.delete);

router.route('/podcasts/:id/edit')
  .get(secureRoute, podcasts.edit);


//  RESTAURANT ROUTES
router.route('/restaurants')
  .get(restaurants.index)
  .post(secureRoute, restaurants.create);

router.route('/restaurants/new')
  .get(secureRoute, restaurants.new);

router.route('/restaurants/:id')
  .get(restaurants.show)
  .put(secureRoute, restaurants.update)
  .delete(secureRoute, restaurants.delete);

router.route('/restaurants/:id/edit')
  .get(secureRoute, restaurants.edit);

// REGISTER
router.route('/register')
  .get(registrations.new)
  .post(registrations.create);

// SESSION LOGIN AND LOGOUT
router.route('/login')
  .get(sessions.new)
  .post(sessions.create);

router.route('/logout')
  .get(sessions.delete);

module.exports = router;
