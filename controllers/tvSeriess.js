const TvSeries = require('../models/tvSeries');
const User = require('../models/user');

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

// SHOW
function tvSeriessShow(req, res, next) {
  TvSeries
    .findById(req.params.id)
    .exec()
    .then((tvSeries) => {
      if(!tvSeries) return res.notFound();
      res.render('tvSeriess/show', { tvSeries });
    })
    .catch(next);
}

// CREATE
function tvSeriessCreate(req, res, next) {
  console.log(req.body);
  TvSeries
    .create(req.body)
    .then((tvSeries) => {
      return User
        .findById(req.user.id)
        .exec()
        .then((user) => {
          user.tvSeriess.push(tvSeries.id);
          return user.save();
        });
    })
    .then(() => res.redirect('/tvSeriess'))
    .catch((err) => {
      if(err.name === 'ValidationError') {
        return res.badRequest('/tvSeriess/new', err.toString());
      }
      next(err);
    });
}

// EDIT
function tvSeriessEdit(req, res, next) {
  TvSeries
    .findById(req.params.id)
    .exec()
    .then((tvSeries) => {
      if(!tvSeries) return res.notFound();
      res.render('tvSeriess/edit', { tvSeries });
    })
    .catch(next);
}

// UPDATE
function tvSeriessUpdate(req, res, next) {
  console.log(req.body);
  TvSeries
    .findById(req.params.id)
    .exec()
    .then((tvSeries) => {
      if(!tvSeries) return res.notFound();

      tvSeries = Object.assign(tvSeries, req.body);

      return tvSeries.save();
    })
    .then((tvSeries) => res.redirect(`/tvSeriess/${tvSeries.id}`))
    .catch((err) => {
      if(err.name === 'ValidationError') {
        return res.badRequest(`/tvSeriess/${req.params.id}/edit`, err.toString());
      }
      next(err);
    });
}

// DELETE
function tvSeriessDelete(req, res, next) {
  TvSeries
    .findById(req.params.id)
    .exec()
    .then((tvSeries) => {
      if(!tvSeries) return res.status(404).send('Not found');

      return tvSeries.remove();
    })
    .then(() => res.redirect('/tvSeriess'))
    .catch(next);
}

module.exports = {
  index: tvSeriessIndex,
  new: tvSeriessNew,
  show: tvSeriessShow,
  create: tvSeriessCreate,
  edit: tvSeriessEdit,
  update: tvSeriessUpdate,
  delete: tvSeriessDelete
};
