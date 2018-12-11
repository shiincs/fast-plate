import React, { Component } from 'react';
import ReviewItemView from '../components/ReviewItemView';
import api from '../api';

export default class ReviewItem extends Component {
  render() {
    return (
      <React.Fragment>
        <ReviewItemView />
      </React.Fragment>
    );
  }
}
