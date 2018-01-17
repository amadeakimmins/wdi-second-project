const TvSeries = require('../models/tvSeries');

// INDEX
function tvSeriessIndex(req, res, next) {
  TvSeries
    .find()
    .exec()
    .then((tvSeriess) => res.render('tvSeriess/index', { tvSeriess }))
    .catch(next);
}

// NEW
function tvSeriessNew(req, res) {
  res.render('tvSeriess/new');
}

module.exports = {
  index: tvSeriessIndex,
  new: tvSeriessNew
};
