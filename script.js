"use strict";
//1
let numbersOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
console.log(numbersOfFilms)

//2

let personalMovieDB = {
    count: numbersOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

//3
let a = prompt("Один из последних просмотренных фильмов?", " "),
    b = prompt("На сколько оцените его?", " "),
    c = prompt("Один из последних просмотренных фильмов?", " "),
    d = prompt("На сколько оцените его?", " ");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
