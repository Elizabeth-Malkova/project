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

//3--2.1
let num = 0;

while (num <2) {
    let a = prompt("Один из последних просмотренных фильмов?", ''),
        b = prompt("На сколько оцените его?", '');
    num++;
    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error')
        //i--;
    }
}

// do {
//     let a = prompt("Один из последних просмотренных фильмов?", ''),
//         b = prompt("На сколько оцените его?", '');
//     num++;
//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('error')
//        //i--;
//     }
// }
//     while (num < 2);
    
    if (personalMovieDB.count < 10) {
        alert("Просмотрено довольно мало фильмов");
    }
    else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        alert("Вы классический зритель");
    }
    else if (personalMovieDB.count > 30) {
        alert("Вы киноман");
    }
    
    else { alert("Произошла ошибка"); }
