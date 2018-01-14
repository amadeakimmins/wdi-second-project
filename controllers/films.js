const Film = require('../models/film');

// index
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

// New

function filmsNew(req, res) {
  res.render('films/new');
}


module.exports = {
  index: filmsIndex,
  new: filmsNew
};
