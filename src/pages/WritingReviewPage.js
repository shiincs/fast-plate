import React, { Component } from 'react';
import WritingReview from '../containers/WritingReview';

export default class WritingReviewPage extends Component {
  componentDidMount() {
    // 페이지가 렌더링 될때마다 스크롤을 맨 위로 올린다.
    window.scrollTo(0, 0);
  }

  render() {
    const { match } = this.props;
    console.log(match);
    const reviewId = match.params.rReviewKeyword;

    return <WritingReview key={reviewId} reviewId={reviewId} />;
  }
}
