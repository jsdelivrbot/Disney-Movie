import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './componenets/Home';
import Movies from './componenets/Movies';
import SingleRatings from './componenets/SingleRating';
import AllRatings from './componenets/AllRatings';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/movie/:id/rating" component={SingleRatings}/>
        <Route path="/movies" component={Movies}/>
        <Route path="/ratings" component={AllRatings}/>
      </Switch>
    );
  }
}

export default App;
