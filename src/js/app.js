// client side js here
console.log('JS loaded');

// The movie db api key - 6d36f11289998f020d28569c11326227

// USE THIS ONE:
// https://api.themoviedb.org/3/search/movie?api_key=6d36f11289998f020d28569c11326227&query=Jack+Reacher

$(() => {
  if ($('.film-container').length !== 0) {
    $('.searchFilms').on('submit', getFilms);
  }

  // second adding into HTML
  function addFilm(film) {
    $('.film-container').append(`
                            <div>
                              <h1>${film.title}</h1>
                              <img src="https://image.tmdb.org/t/p/w500${film.poster_path}">
                              <h1>Release Date: ${film.release_date}</h1>
                              <h1>Rating: ${film.vote_average}</h1>
                              <h1>Popularity: ${film.popularity}</h1>
                              <form method="POST" action="/wishlists/films">
                                <input type="hidden" name="film" value="${JSON.stringify(film)}">
                                <input type="submit" value="Add to watchlist">
                              </form>
                            </div>
                          `);
  }

  // third to make it dynamic
  function getFilms(e) {
    e.preventDefault();
    const searchInput = $('input[name="q"]').val();

    // to clear after searching again
    if(!$(this).is('button')) {
      emptyFilms();
    }

    // first
    $
      .get(`https://api.themoviedb.org/3/search/movie?api_key=6d36f11289998f020d28569c11326227&query=${searchInput}`)
      .then(films => {
        $.each(films.results, (i, film) => {
          addFilm(film);
        });
      });
  }

  function emptyFilms() {
    $('.inputFilm').empty();
  }
});
