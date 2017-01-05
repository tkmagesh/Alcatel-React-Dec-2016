import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import {Select_Movie_Action} from '../actions';

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
  selectMovie : Select_Movie_Action
  }, dispatch)
}

function mapStateToProps(state){
  return {
    movies : state.movies
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Movies);