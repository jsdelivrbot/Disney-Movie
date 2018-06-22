import React, { Component } from 'react'
import axios from 'axios'

export default class SingleRating extends Component {
  constructor(props) {
    super(props);
    this.state = {
      singleRatings: [],
    //   movie: []
    }
  }
//   getMovies = () => {
//     // console.log("Called")
//     axios.get(`/movie/${this.props.match.params.id}`)
//     .then(res => {
//     //   console.log('Movie Name',  res.data)
//       this.setState({
//         movie: res.data
//       })
//     })
//     .catch(error => {
//       console.log(error)
//     });
//   }

  getSingleRatings = () => {
    // console.log("Called")
    axios.get(`/movie/${this.props.match.params.id}/rating`)
    .then(res => {
      console.log('Movie Rating',  res.data)
      this.setState({
        singleRatings: res.data
      })
    })
    .catch(error => {
      console.log(error)
    });
  }

  componentDidMount() {
    // console.log("DONE")
    this.getSingleRatings()
    // this.getMovies()
  }
  
  render() {
    const { singleRatings, movie } = this.state
    console.log("state:", this.state)
    // console.log( "rating: ", singleRatings)
    // console.log( "movie: ", movie)
    return (
      <div>
        <nav id="navbar">
            <a id="homeLink" href="/">Home</a>
            <a id="moviesLink" href="/movies">Movies</a>
            <a id="RatingsLink" href="/movies/:id/ratings">Ratings</a>
            <a id="AllRatingsLink" href="/ratings">All Ratings</a>
        </nav>
        <h1> Title </h1>
        {/* {movie.title} */}
        {/* {console.log(this.state.movie[0])} */}
        {/* {movie.map(function (movie) {
            <p>{movie.title}</p>
            console.log(movie.title)
        })} */}
        {/* {singleRatings.map(function (rating) {
            <p>{rating.rating}</p>
            console.log(rating.rating)
        })} */}
        <form>
            <select>
                <option>
                    something
                </option>
            </select>
        </form>
      </div>
      
    )
  }
}
