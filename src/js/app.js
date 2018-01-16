// // client side js here
// console.log('JS loaded');
//
// // "http://www.omdbapi.com/?apikey=ff04fed1&s=dirty-dancing"
//
// $(() => {
//   $('form').on('submit', getFilm);
//   $('button').on('click', getFilm);
// });
//
//
//
//
// // second adding into HTML
// function addFilm(film) {
//   console.log(film);
//   $('main').append(`<div>
//                       <h1>${film.Title}</h1>
//                       <img src="${film.Poster}">
//                       <h1>${film.Year}</h1>
//                       <a href="${film.imdbID}">IMDB<a>
//                     </div>`);
// }
//
// // third to make it dynamic
// function  getFilm(e) {
//   e.preventDefault();
//   const searchInput = $('input[name="q"]').val();
//
//   // to clear after searching again
//   if(!$(this).is('button')) {
//     emptyFilms();
//   }
//
//
//   // first
//   $
//     .get(`http://www.omdbapi.com/?apikey=ff04fed1&s=${searchInput}`)
//     .then(films => {
//       $.each(films.Search, (i, film) => {
//         addFilm(film);
//       });
//     });
// }
//
// function emptyFilms() {
//   $('main').empty();
// }
