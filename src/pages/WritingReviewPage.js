import React, { Component } from 'react';
import WritingReview from '../containers/WritingReview';

export default class WritingReviewPage extends Component {
  render() {
    const { match } = this.props;
    console.log(match);
    const reviewId = match.params.rReviewKeyword;

    return <WritingReview key={reviewId} reviewId={reviewId} />;
  }
}
