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
    // let counter = 0;
    // const filmData = JSON.stringify(film);
    //
    // console.log(filmData);


    $('.film-container').append(`
                            <div class="container">
                              <div class="row">
                                <div class="col-4">
                                  <h1>${film.title}</h1>
                                  <img class="api-image" src="https://image.tmdb.org/t/p/w500${film.poster_path}">
                                  <h1>Release Date: ${film.release_date}</h1>
                                  <h1>Rating: ${film.vote_average}</h1>
                                  <form method="POST" action="/wishlists/films">
                                    <textarea style="display:none;" name="films">${JSON.stringify(film)}</textarea>
                                    <input class="search-button" type="submit" value="Add to watchlist">
                                  </form>
                                </div>
                              </div>
                            </div>
                          `);

    // $(`#${counter}`).attr('value', filmData);
    // counter += 1;
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
    $('.inputFilm, .film-container').empty();
  }
});
