import React, { Component } from 'react';
// import Movies from './Movies'

export default class Home extends Component {
  render() {
    return (
      <div>
        <nav id="navbar">
            <a id="homeLink" href="/">Home</a>
            <a id="moviesLink" href="/movies">Movies</a>
            <a id="RatingsLink" href="/movies/:id/ratings">Ratings</a>
            <a id="AllRatingsLink" href="/ratings">All Ratings</a>
        </nav>
        <h1>Welcome to DisneyApp</h1>
        {/* <Movies/> */}
      </div>
    )
  }
}
