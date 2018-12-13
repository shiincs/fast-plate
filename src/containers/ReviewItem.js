import React, { Component } from 'react';
import ReviewItemView from '../components/ReviewItemView';

export default class ReviewItem extends Component {
  render() {
    return (
      <React.Fragment>
        <ReviewItemView {...this.props} />
      </React.Fragment>
    );
  }
}
