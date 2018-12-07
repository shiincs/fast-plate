import React, { Component } from 'react';
import WritingReviewView from '../components/WritingReviewView';
export default class WritingReview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewScore: 0,
    };
  }
  render() {
    const { reviewScore } = this.state;
    return (
      <React.Fragment>
        <WritingReviewView reviewScore={reviewScore} />
      </React.Fragment>
    );
  }
}
