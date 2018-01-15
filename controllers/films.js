const Film = require('../models/film');

// INDEX
function filmsIndex(req, res, next) {
  Film
    .find()
    .exec()
    .then((films) => res.render('films/index', { films }))
    .catch(next);
}

// NEW
function filmsNew(req, res) {
  res.render('films/new');
}

// SHOW
function filmsShow(req, res, next) {
  Film
    .findById(req.params.id)
    .exec()
    .then((film) => {
      if(!film) return res.notFound();
      res.render('films/show', { film });
    })
    .catch(next);
}

// CREATE
function filmsCreate(req, res, next) {
  console.log(req.body);
  Film
    .create(req.body)
    .then(() => res.redirect('/films'))
    .catch((err) => {
      if(err.name === 'ValidationError') {
        return res.badRequest('/films/new', err.toString());
      }
      next(err);
    });
}

// EDIT
function filmsEdit(req, res, next) {
  Film
    .findById(req.params.id)
    .exec()
    .then((film) => {
      if(!film) return res.notFound();
      res.render('films/edit', { film });
    })
    .catch(next);
}

// UPDATE
function filmsUpdate(req, res, next) {
  console.log(req.body);
  Film
    .findById(req.params.id)
    .exec()
    .then((film) => {
      if(!film) return res.notFound();

      film = Object.assign(film, req.body);

      return film.save();
    })
    .then((film) => res.redirect(`/films/${film.id}`))
    .catch((err) => {
      if(err.name === 'ValidationError') {
        return res.badRequest(`/films/${req.params.id}/edit`, err.toString());
      }
      next(err);
    });
}

// DELETE
function filmsDelete(req, res, next) {
  Film
    .findById(req.params.id)
    .exec()
    .then((film) => {
      if(!film) return res.status(404).send('Not found');

      return film.remove();
    })
    .then(() => res.redirect('/films'))
    .catch(next);
}
module.exports = {
  index: filmsIndex,
  new: filmsNew,
  show: filmsShow,
  create: filmsCreate,
  edit: filmsEdit,
  update: filmsUpdate,
  delete: filmsDelete
};
