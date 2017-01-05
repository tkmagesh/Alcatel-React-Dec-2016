import React, { Component } from 'react';
import Movies from './Movies';
import MovieDetails from './MovieDetails';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Movie Explorer</h1>
        <hr />
        <Movies></Movies>
        <hr/>
        <MovieDetails></MovieDetails>
      </div>
    );
  }
}

