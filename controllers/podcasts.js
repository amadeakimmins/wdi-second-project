const Podcast = require('../models/podcast');

// INDEX
function podcastsIndex(req, res) {
  Podcast
    .find()
    .exec()
    .then((podcasts) => {
      res.render('podcasts/index', { podcasts });
    })
    .catch((err) => {
      res.status(500).render('error', { err });
    });
}


// SHOW
function podcastsShow(req, res) {
  Podcast
    .findById(req.params.id)
    .exec()
    .then((podcast) => {
      if(!podcast) return res.status(404).send('Not Found');
      res.render('podcasts/show', { podcast });
    })
    .catch((err) => {
      res.status(500).render('error', { err });
    });
}

// CREATE
function podcastsCreate(req, res) {
  console.log(req.body);
  Podcast
    .create(req.body)
    .then(() => {
      res.redirect('/podcasts');
    })
    .catch((err) => {
      res.status(500).render('error', { err });
    });
}

// EDIT
function podcastsEdit(req, res) {
  Podcast
    .findById(req.params.id)
    .exec()
    .then((podcast) => {
      if(!podcast) return res.status(404).send('Not found!');
      res.render('podcasts/edit', { podcast });
    })
    .catch((err) => {
      res.status(500).render('error', { err });
    });
}

// UPDATE
function podcastsUpdate(req, res) {
  console.log(req.body);
  Podcast
    .findById(req.params.id)
    .exec()
    .then((podcast) => {
      if(!podcast) return res.status(404).send('Not found');

      podcast = Object.assign(podcast, req.body);

      return podcast.save();
    })
    .then((podcast) => {
      res.redirect(`/podcasts/${podcast.id}`);
    })
    .catch((err) => {
      res.status(500).render('error', { err });
    });
}

// DELETE
function podcastsDelete(req, res) {
  Podcast
    .findById(req.params.id)
    .exec()
    .then((podcast) => {
      if(!podcast) return res.status(404).send('Not found');

      return podcast.remove();
    })
    .then(() => {
      res.redirect('/podcasts');
    })
    .catch((err) => {
      res.status(500).render('error', { err });
    });
}
module.exports = {
  index: podcastsIndex,
  show: podcastsShow,
  create: podcastsCreate,
  edit: podcastsEdit,
  update: podcastsUpdate,
  delete: podcastsDelete
};
