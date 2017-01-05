import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import {Delete_Movie_Action} from '../actions';

export default class DeleteMovie extends Component {
    onDeleteClick(){
        console.log(this.props.movie.name + ' - to deleted ');
        this.props.deleteMovie(this.props.movie);
    }
  render() {
   
    return (
        <input type="button" value="Delete" onClick={this.onDeleteClick.bind(this)}/>
    );
  }
}

