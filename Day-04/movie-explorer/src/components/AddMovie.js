import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import {Add_Movie_Action} from '../actions';

class AddMovie extends Component {
  onSaveClick(){
      var name = this.refs.txtMovieName.value,
          description = this.refs.txtMovieDescription.value;
      //var newMoviePayload = { name , description };
      this.props.addMovie(name, description);
  }
  render() {
      return (
          <div>
            <div className="field">
                <label> Name : </label>
                <input type="text" ref="txtMovieName" />
            </div>
            <div className="field">
                <label>Description :</label>
                <input type="text" ref="txtMovieDescription" />
            </div>
            <div className="field">
                <input type="button" value="Save" onClick={this.onSaveClick.bind(this)} />
            </div>
        </div>
      )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
  addMovie : Add_Movie_Action
  }, dispatch)
}



export default connect(null, mapDispatchToProps)(AddMovie);