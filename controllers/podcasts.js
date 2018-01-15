const Podcast = require('../models/podcast');

// INDEX
function podcastsIndex(req, res, next) {
  Podcast
    .find()
    .exec()
    .then((podcasts) => res.render('podcasts/index', { podcasts }))
    .catch(next);
}


// NEW
function podcastsNew(req, res) {
  res.render('podcasts/new');
}

// SHOW
function podcastsShow(req, res, next) {
  Podcast
    .findById(req.params.id)
    .exec()
    .then((podcast) => {
      if(!podcast) return res.notFound();
      res.render('podcasts/show', { podcast });
    })
    .catch(next);
}

// CREATE
function podcastsCreate(req, res, next) {
  console.log(req.body);
  Podcast
    .create(req.body)
    .then(() => res.redirect('/podcasts'))
    .catch((err) => {
      if(err.name === 'ValidationError') {
        return res.badRequest('/podcasts/new', err.toString());
      }
      next(err);
    });
}

// EDIT
function podcastsEdit(req, res, next) {
  Podcast
    .findById(req.params.id)
    .exec()
    .then((podcast) => {
      if(!podcast) return res.notFound();
      res.render('podcasts/edit', { podcast });
    })
    .catch(next);
}

// UPDATE
function podcastsUpdate(req, res, next) {
  console.log(req.body);
  Podcast
    .findById(req.params.id)
    .exec()
    .then((podcast) => {
      if(!podcast) return res.notFound();

      podcast = Object.assign(podcast, req.body);

      return podcast.save();
    })
    .then((podcast) => res.redirect(`/podcasts/${podcast.id}`))
    .catch((err) => {
      if(err.name === 'ValidationError') {
        return res.badRequest(`/podcasts/${req.params.id}/edit`, err.toString());
      }
      next(err);
    });
}

// DELETE
function podcastsDelete(req, res, next) {
  Podcast
    .findById(req.params.id)
    .exec()
    .then((podcast) => {
      if(!podcast) return res.status(404).send('Not found');
      return podcast.remove();
    })
    .then(() => res.redirect('/podcasts'))
    .catch(next);
}
module.exports = {
  index: podcastsIndex,
  new: podcastsNew,
  show: podcastsShow,
  create: podcastsCreate,
  edit: podcastsEdit,
  update: podcastsUpdate,
  delete: podcastsDelete
};
