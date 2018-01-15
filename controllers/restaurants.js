const Restaurant = require('../models/restaurant');

// INDEX
function restaurantsIndex(req, res) {
  Restaurant
    .find()
    .exec()
    .then((restaurants) => {
      res.render('restaurants/index', { restaurants });
    })
    .catch((err) => {
      res.status(500).render('error', { err });
    });
}


// NEW
function restaurantsNew(req, res) {
  res.render('restaurants/new');
}

// SHOW
function restaurantsShow(req, res) {
  Restaurant
    .findById(req.params.id)
    .exec()
    .then((restaurant) => {
      if(!restaurant) return res.status(404).send('Not Found');
      res.render('restaurants/show', { restaurant });
    })
    .catch((err) => {
      res.status(500).render('error', { err });
    });
}

// CREATE
function restaurantsCreate(req, res) {
  console.log(req.body);
  Restaurant
    .create(req.body)
    .then(() => {
      res.redirect('/restaurants');
    })
    .catch((err) => {
      res.status(500).render('error', { err });
    });
}

// EDIT
function restaurantsEdit(req, res) {
  Restaurant
    .findById(req.params.id)
    .exec()
    .then((restaurant) => {
      if(!restaurant) return res.status(404).send('Not found!');
      res.render('restaurants/edit', { restaurant });
    })
    .catch((err) => {
      res.status(500).render('error', { err });
    });
}

// UPDATE
function restaurantsUpdate(req, res) {
  console.log(req.body);
  Restaurant
    .findById(req.params.id)
    .exec()
    .then((restaurant) => {
      if(!restaurant) return res.status(404).send('Not found');

      restaurant = Object.assign(restaurant, req.body);

      return restaurant.save();
    })
    .then((restaurant) => {
      res.redirect(`/restaurants/${restaurant.id}`);
    })
    .catch((err) => {
      res.status(500).render('error', { err });
    });
}

// DELETE
function restaurantsDelete(req, res) {
  Restaurant
    .findById(req.params.id)
    .exec()
    .then((restaurant) => {
      if(!restaurant) return res.status(404).send('Not found');

      return restaurant.remove();
    })
    .then(() => {
      res.redirect('/restaurants');
    })
    .catch((err) => {
      res.status(500).render('error', { err });
    });
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
