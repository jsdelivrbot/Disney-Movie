import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class AllRatings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allRatings: [],
    }
  }

  getAllRatings = () => {
    console.log("Called")
    axios.get('/ratings')
      .then(res => {
        console.log('Something:', res.data)
        this.setState({
          allRatings: res.data
        })
      })
      .catch(error => {
        console.log(error)
      });
  }

  componentDidMount() {
    console.log("DONE")
    this.getAllRatings()
  }

  render() {
    const { allRatings } = this.state
    return (
      <div>
        <nav id="navbar">
          <a id="homeLink" href="/">Home</a>
          <a id="moviesLink" href="/movies">Movies</a>
          <a id="AllRatingsLink" href="/ratings">All Ratings</a>
        </nav>
        <h1>All Ratings</h1>
        <ul id="List">
          {allRatings.map(function (movie) {
            return (
              <li id="rating">
                Title: {movie.title} <Link to={`/movie/${movie.id}/rating`}>Rating: {movie.rating}</Link> <br/><br/>
                Review: {movie.review_text}
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}
