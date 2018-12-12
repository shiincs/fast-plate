import React, { Component } from 'react';
import ReviewItem from '../containers/ReviewItem';
import classNames from 'classnames/bind';
import styles from './ReviewListView.module.scss';
import ReviewItemView from './ReviewItemView';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

export default class ReviewListView extends Component {
  render() {
    const { reviewList, location } = this.props;
    console.log(location);
    // const p = new URLSearchParams(location.search);
    // const category = p.get('category');
    return (
      <React.Fragment>
        <div className={cx('review-filter-wrap')}>
          <h2 className={cx('review-title')}>리뷰</h2>
          <ul className={cx('review-filter-list')}>
            <li className={cx('review-filter-item')}>전체</li>
            <li
              className={cx('review-filter-item')}
              onClick={() => this.handleReviewfilter(5)}
            >
              맛있다
            </li>
            <li
              className={cx('review-filter-item')}
              onClick={() => this.handleReviewfilter(3)}
            >
              괜찮다
            </li>
            <li
              className={cx('review-filter-item')}
              onClick={() => this.handleReviewfilter(1)}
            >
              별로
            </li>
          </ul>
        </div>
        <ReviewItemView reviewList={reviewList} />
        <button className={cx('review-more-btn')}>더보기</button>
      </React.Fragment>
    );
  }
}
