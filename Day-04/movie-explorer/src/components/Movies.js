import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import SelectMovieAction from '../actions/select_movie_action';

class Movies extends Component {
 
  render() {
    let movieList = this.props.movies.map( movie => 
        (
          <li 
          onClick={() => this.props.selectMovie(movie)} 
          key={movie.name}>{movie.name}</li>)
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
    selectMovie : SelectMovieAction
  }, dispatch)
}

function mapStateToProps(state){
  return {
    movies : state.movies
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Movies);