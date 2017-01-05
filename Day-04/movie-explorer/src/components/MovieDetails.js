import React, { Component } from 'react';
import { connect } from 'react-redux'

class MovieDetails extends Component {
  render() {
    let movie = this.props.selectedMovie;
    if (!movie){
        return (<div>Select a movie to see the details!</div>);
    }
    return (
      <div>
        <h3>{movie.name}</h3>
        <div>{movie.description}</div>
        <h4>Other information displayed here</h4>
      </div>
    );
  }
}

function mapStateToProps(state){
    return { selectedMovie : state.selectedMovie }
}



export default connect(mapStateToProps)(MovieDetails);
