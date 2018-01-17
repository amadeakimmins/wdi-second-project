
$(() => {
  if ($('.film-container').length !== 0) {
    $('.searchFilms').on('submit', getFilms);
  }
  if($('.series-container').length !== 0) {
    $('.searchTvSeries').on('submit', getTvSeries);
  }
});

// --- FILM API SEARCH --- //
function addFilm(film) {
  $('.film-container').append(`
                                <div class="col-3">
                                  <h1>${film.title}</h1>
                                  <img class="api-image" src="https://image.tmdb.org/t/p/w500${film.poster_path}">
                                  <h1>Rating: ${film.vote_average}</h1>
                                  <form method="POST" action="/films">
                                    <input type="hidden" name="title" value="${film.title}">
                                    <input type="hidden" name="image" value="${film.poster_path}">
                                    <input type="hidden" name="synopsis" value="${film.overview}">
                                    <input type="hidden" name="averageRating" value="${film.vote_average}">
                                    <input type="hidden" name="year" value="${film.release_date.split('-')[0]}">
                                      <input class="search-button" type="submit" value="Add to watchlist">
                                  </form>
                                </div>
                            `);

}

function getFilms(e) {
  e.preventDefault();
  const searchInput = $('input[name="q"]').val();

  if(!$(this).is('button')) {
    emptyFilms();
  }

  $
    .get(`https://api.themoviedb.org/3/search/movie?api_key=6d36f11289998f020d28569c11326227&query=${searchInput}`)
    .then(films => {
      $.each(films.results, (i, film) => {
        addFilm(film);
      });
    });
}

function emptyFilms() {
  $('.inputFilm, .film-container').empty();
}


// --- TV SERIES API SEARCH --- //
function addTvSeries(tvSeries) {
  $('.series-container').append(`
                            <div class="container">
                              <div class="row">
                                <div class="col-4">
                                  <h1>${tvSeries.name}</h1>
                                  <img class="api-image" src="https://image.tmdb.org/t/p/w500${tvSeries.poster_path}">
                                  <h1>Rating: ${tvSeries.vote_average}</h1>
                                  <form method="POST" action="/tvSeriess">
                                    <input type="hidden" name="name" value="${tvSeries.name}">
                                    <input type="hidden" name="image" value="${tvSeries.poster_path}">
                                    <input type="hidden" name="averageRating" value="${tvSeries.vote_average}">
                                  <input class="search-button" type="submit" value="Add to watchlist">
                                  </form>
                                </div>
                              </div>
                            </div>
                            `);

}

function getTvSeries(e) {
  e.preventDefault();
  const searchInput = $('input[name="q"]').val();

  if(!$(this).is('button')) {
    emptyTvSeries();
  }

  $
    .get(`https://api.themoviedb.org/3/search/tv?api_key=6d36f11289998f020d28569c11326227&query=${searchInput}`)
    .then(tvSeriess => {
      $.each(tvSeriess.results, (i, tvSeries) => {
        addTvSeries(tvSeries);
      });
    });
}

function emptyTvSeries() {
  $('.inputFilm, .series-container').empty();
}
