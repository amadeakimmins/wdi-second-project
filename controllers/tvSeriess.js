const TvSeries = require('../models/tvSeries');

function tvSeriessIndex(req, res, next) {
  TvSeries
    .find()
    .exec()
    .then((tvSeriess) => res.render('tvSeriess/index', { tvSeriess }))
    .catch(next);
}

module.exports = {
  index: tvSeriessIndex
};
