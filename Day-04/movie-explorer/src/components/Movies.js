import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import {Select_Movie_Action, Delete_Movie_Action} from '../actions';
import DeleteMovie from './DeleteMovie';

class Movies extends Component {
 
  render() {
    let movieList = this.props.movies.map( movie => 
        (
          <li 
          onClick={() => this.props.selectMovie(movie)} 
          key={movie.name}>
            <span>{movie.name}</span>
             <DeleteMovie movie={movie} deleteMovie={this.props.deleteMovie}></DeleteMovie>
          </li>)
        )
    return (
      <div>
        <ol>
            {movieList}
        </ol>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    selectMovie : Select_Movie_Action,
    deleteMovie : Delete_Movie_Action
  }, dispatch)
}

function mapStateToProps(state){
  return {
    movies : state.movies
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Movies);