var express = require('express');
var router = express.Router();
var database = require('../db/queries.js');

/* GET home page. */
router.get('/', function(res) {
  res.render('index', { title: 'Express' });
});

router.get('/movies', database.getAllMovies);
router.get('/ratings', database.getAllRatings);
router.get('/movie/:id/rating', database.getMovieRating)
// router.get('/movie/:id', database.getMovie)

module.exports = router;
