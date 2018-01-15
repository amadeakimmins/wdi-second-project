const Restaurant = require('../models/restaurant');

// INDEX
function restaurantsIndex(req, res, next) {
  Restaurant
    .find()
    .exec()
    .then((restaurants) => res.render('restaurants/index', { restaurants }))
    .catch(next);
}


// NEW
function restaurantsNew(req, res) {
  res.render('restaurants/new');
}

// SHOW
function restaurantsShow(req, res, next) {
  Restaurant
    .findById(req.params.id)
    .exec()
    .then((restaurant) => {
      if(!restaurant) return res.notFound();
      res.render('restaurants/show', { restaurant });
    })
    .catch(next);
}

// CREATE
function restaurantsCreate(req, res, next) {
  console.log(req.body);
  Restaurant
    .create(req.body)
    .then(() => res.redirect('/restaurants'))
    .catch((err) => {
      if(err.name === 'ValidationError') {
        return res.badRequest('/restaurants/new', err.toString());
      }
      next(err);
    });
}

// EDIT
function restaurantsEdit(req, res, next) {
  Restaurant
    .findById(req.params.id)
    .exec()
    .then((restaurant) => {
      if(!restaurant) return res.notFound();
      res.render('restaurants/edit', { restaurant });
    })
    .catch(next);
}

// UPDATE
function restaurantsUpdate(req, res, next) {
  console.log(req.body);
  Restaurant
    .findById(req.params.id)
    .exec()
    .then((restaurant) => {
      if(!restaurant) return res.notFound();

      restaurant = Object.assign(restaurant, req.body);

      return restaurant.save();
    })
    .then((restaurant) => res.redirect(`/restaurants/${restaurant.id}`))
    .catch((err) => {
      if(err.name === 'ValidationError') {
        return res.badRequest(`/restaurants/${req.params.id}/edit`, err.toString());
      }
      next(err);
    });
}

// DELETE
function restaurantsDelete(req, res, next) {
  Restaurant
    .findById(req.params.id)
    .exec()
    .then((restaurant) => {
      if(!restaurant) return res.status(404).send('Not found');
      return restaurant.remove();
    })
    .then(() => res.redirect('/restaurants'))
    .catch(next);
}
module.exports = {
  index: restaurantsIndex,
  new: restaurantsNew,
  show: restaurantsShow,
  create: restaurantsCreate,
  edit: restaurantsEdit,
  update: restaurantsUpdate,
  delete: restaurantsDelete
};
