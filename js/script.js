"use strict"; //Проверка на устаревшие элементы

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const lastFilm = prompt('Один из последних просмотренных фильмов?'),
      ratingFilm = +prompt('Оценка фильма'),
      lastFilm2 = prompt('Один из последних просмотренных фильмов?'),
      ratingFilm2 = +prompt('Оценка фильма');

personalMovieDB.movies[lastFilm] = ratingFilm;
personalMovieDB.movies[lastFilm2] = ratingFilm2;


console.log(personalMovieDB);