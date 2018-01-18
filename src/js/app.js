
$(() => {
  if ($('.api-container').length !== 0) {
    $('.searchFilms').on('submit', getFilms);
  }
  if($('.api-container').length !== 0) {
    $('.searchTvSeries').on('submit', getTvSeries);
  }
});

// --- FILM API SEARCH --- //
function addFilm(film) {
  if(film.poster_path) {
    $('.api-container').append(`
      <div class="slick-item-container">
        <img class="api-image" src="https://image.tmdb.org/t/p/w500${film.poster_path}">
      </div>
  `);
  }
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

      $('.api-container').slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 4
      });
    });
}

function emptyFilms() {
  $('.inputFilm, .api-container').empty();
}


// --- TV SERIES API SEARCH --- //
function addTvSeries(tvSeries) {
  $('.api-container').append(`
                              <div class="col-lg-3 col-md-4 col-sm-6 col-12">
                                <div class="hovereffect">
                                  <img class="api-image" src="https://image.tmdb.org/t/p/w500${tvSeries.poster_path}">
                                    <div class="overlay">
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
  $('.inputFilm, .api-container').empty();
}
