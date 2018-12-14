import React, { Component } from 'react';
import ReviewListView from '../components/ReviewListView';
import ReviewItemView from '../components/ReviewItemView';
export default class ReviewList extends Component {
  render() {
    const { post_set, ...rest } = this.props;
    const reviewList = post_set.map(r => ({
      content: r.content,
      username: r.author.username,
      rate: r.rate,
    }));

    return (
      <React.Fragment>
        <ReviewListView reviewList={reviewList} {...rest} />
      </React.Fragment>
    );
  }
}
