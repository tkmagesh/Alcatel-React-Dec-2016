import React, { Component } from 'react';
import Movies from './Movies';
import MovieDetails from './MovieDetails';
import AddMovie from './AddMovie';
import DeleteMovie from './DeleteMovie';
export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Movie Explorer</h1>
        <hr />
       
        <AddMovie></AddMovie>
        <Movies></Movies>
        <hr/>
        <MovieDetails></MovieDetails>
      </div>
    );
  }
}

