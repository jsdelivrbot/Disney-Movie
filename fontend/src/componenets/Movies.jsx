import React, { Component } from 'react';
import axios from 'axios';

export default class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    }
  }

  getAllMovies = () => {
    console.log("Called")
    axios.get('/movies')
    .then(res => {
      console.log('Something:',  res.data)
      this.setState({
        movies: res.data
      })
    })
    .catch(error => {
      console.log(error)
    });
  }

  componentDidMount() {
    // console.log("DONE")
    this.getAllMovies()
  }

  render() {
    const { movies } = this.state;
    return (
      <div>
        <nav id="navbar">
            <a id="homeLink" href="/">Home</a>
            <a id="moviesLink" href="/movies">Movies</a>
            <a id="AllRatingsLink" href="/ratings">All Ratings</a>
        </nav>
        <h1>All Disney Movies</h1>
        <ul id="List">
              {movies.map(function(movie) {
                return ( 
                  <li id="title">
                    {movie.title}
                  </li>
                )
              })}
        </ul>
      </div>
    )
  }
}
