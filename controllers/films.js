const Film = require('../models/film');

// INDEX
function filmsIndex(req, res) {
  Film
    .find()
    .exec()
    .then((films) => {
      res.render('films/index', { films });
    })
    .catch((err) => {
      res.status(500).render('error', { err });
    });
}

// SHOW
function filmsShow(req, res) {
  Film
    .findById(req.params.id)
    .exec()
    .then((film) => {
      if(!film) return res.status(404).send('Not Found');
      res.render('films/show', { film });
    })
    .catch((err) => {
      res.status(500).render('error', { err });
    });
}

// CREATE
function filmsCreate(req, res) {
  console.log(req.body);
  Film
    .create(req.body)
    .then(() => {
      res.redirect('/films');
    })
    .catch((err) => {
      res.status(500).render('error', { err });
    });
}

// EDIT
function filmsEdit(req, res) {
  Film
    .findById(req.params.id)
    .exec()
    .then((film) => {
      if(!film) return res.status(404).send('Not found!');
      res.render('films/edit', { film });
    })
    .catch((err) => {
      res.status(500).render('error', { err });
    });
}

// UPDATE
function filmsUpdate(req, res) {
  console.log(req.body);
  Film
    .findById(req.params.id)
    .exec()
    .then((film) => {
      if(!film) return res.status(404).send('Not found');

      film = Object.assign(film, req.body);

      return film.save();
    })
    .then((film) => {
      res.redirect(`/films/${film.id}`);
    })
    .catch((err) => {
      res.status(500).render('error', { err });
    });
}

// DELETE
function filmsDelete(req, res) {
  Film
    .findById(req.params.id)
    .exec()
    .then((film) => {
      if(!film) return res.status(404).send('Not found');

      return film.remove();
    })
    .then(() => {
      res.redirect('/films');
    })
    .catch((err) => {
      res.status(500).render('error', { err });
    });
}
module.exports = {
  index: filmsIndex,
  show: filmsShow,
  create: filmsCreate,
  edit: filmsEdit,
  update: filmsUpdate,
  delete: filmsDelete
};
