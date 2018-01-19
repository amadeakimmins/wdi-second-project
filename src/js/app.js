
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
        <div class="hovereffect">
          <img src="https://image.tmdb.org/t/p/w500${film.poster_path}">
          <div class="overlay">
            <form method="POST" action="/films">
              <input type="hidden" name="title" value="${film.title}">
              <input type="hidden" name="image" value="${film.poster_path}">
              <input type="hidden" name="synopsis" value="${film.overview}">
              <input type="hidden" name="averageRating" value="${film.vote_average}">
              <input type="hidden" name="year" value="${film.release_date.split('-')[0]}">
                <button class="add-wishlist-button">Add to wishlist</button>
            </form>
          </div>
        </div>
      </div>
  `);
  }
}

function getFilms(e) {
  e.preventDefault();

  const searchInput = $('input[name="q"]').val();

  if($('.slick-active').length !== 0) $('.api-container').slick('unslick');
  if(!$(this).is('button')) emptyFilms();

  $
    .get(`https://api.themoviedb.org/3/search/movie?api_key=6d36f11289998f020d28569c11326227&query=${searchInput}`)
    .then(films => {
      $.each(films.results, (i, film) => {
        addFilm(film);
      });
      $('.api-container').slick({
        infinite: false,
        slidesToShow: 5,
        slidesToScroll: 5
      });
    });
}

function emptyFilms() {
  $('.inputFilm, .api-container').empty();
}


// --- TV SERIES API SEARCH --- //
function addTvSeries(tvSeries) {
  if(tvSeries.poster_path) {
    $('.api-container').append(`
                                <div class="col-lg-3 col-md-4 col-sm-6 col-12 data-layout">
                                  <div class="hovereffect">
                                    <img class="data-image" src="https://image.tmdb.org/t/p/w500${tvSeries.poster_path}">
                                      <div class="overlay">
                                        <form method="POST" action="/tvSeriess">
                                          <input type="hidden" name="name" value="${tvSeries.name}">
                                          <input type="hidden" name="image" value="${tvSeries.poster_path}">
                                          <input type="hidden" name="averageRating" value="${tvSeries.vote_average}">
                                        <button class="add-wishlist-button">Add to wishlist</button>
                                        </form>
                                      </div>
                                    </div>
                                </div>
                              `);
  }
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
