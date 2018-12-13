import React, { Component } from 'react';
// import ReviewItem from '../containers/ReviewItem';
import classNames from 'classnames/bind';
import styles from './ReviewListView.module.scss';
import ReviewItemView from './ReviewItemView';
const cx = classNames.bind(styles);

export default class ReviewListView extends Component {
  render() {
    const { reviewList, handleReviewfilter, container, allReview } = this.props;

    // console.log(location);
    // const p = new URLSearchParams(location.search);
    // const category = p.get('category');
    return (
      <React.Fragment>
        <div className={cx('review-filter-wrap')}>
          <h2 className={cx('review-title')}>리뷰</h2>
          <ul className={cx('review-filter-list')}>
            <li className={cx('review-filter-item')} onClick={allReview}>
              전체
            </li>
            <li
              className={cx('review-filter-item')}
              onClick={() => handleReviewfilter(5)}
            >
              맛있다
            </li>
            <li
              className={cx('review-filter-item')}
              onClick={() => handleReviewfilter(3)}
            >
              괜찮다
            </li>
            <li
              className={cx('review-filter-item')}
              onClick={() => handleReviewfilter(1)}
            >
              별로
            </li>
          </ul>
        </div>
        <ReviewItemView container={container} />
        <button className={cx('review-more-btn')}>더보기</button>
      </React.Fragment>
    );
  }
}
