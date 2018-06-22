var pgp = require('pg-promise')();
const db = pgp('postico://localhost:5432/movie_ratings');

function getAllMovies(req, res, next) {
    db.any('SELECT * FROM movies')
        .then(function (data) {
            res.status(200)
            res.json(data)
        })
        .catch(function (err) {
            next(err)
        });
}

function getAllRatings(req, res, next) {
    db.any('SELECT * FROM ratings INNER JOIN movies ON ratings.movie_id = movies.id')
        .then(function (data) {
            res.status(200)
            res.json(data)
        })
        .catch(function (err) {
            next(err)
        });
}

function getMovieRating(req, res, next) {
    db.any('SELECT * FROM ratings INNER JOIN movies WHERE id=$1')
        .then(function (data) {
            res.status(200)
            res.json(data)
        })
        .catch(function (err) {
            next(err)
        });
}

// function getMovie (req, res, next) {
//     db.any('SELECT * FROM movies WHERE id = $1', req.params.id )
//         .then(function (data) {
//             res.status(200)
//             res.json(data)
//         })
//         .catch(function (err) {
//             next(err)
//         });
// }
module.exports = { getAllMovies, getAllRatings, getMovieRating, getMovie }