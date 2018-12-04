import React, { Component } from 'react';
import ReviewItem from '../containers/ReviewItem';
import classNames from 'classnames/bind';
import styles from './ReviewListView.module.scss';
const cx = classNames.bind(styles);

export default class ReviewListView extends Component {
  render() {
    return (
      <React.Fragment>
        <div className={cx('review-filter-wrap')}>
          <h2 className={cx('review-title')}>리뷰</h2>
          <ul className={cx('review-filter-list')}>
            <li className={cx('review-filter-item')}>전체</li>
            <li className={cx('review-filter-item')}>맛있다</li>
            <li className={cx('review-filter-item')}>괜찮다</li>
            <li className={cx('review-filter-item')}>별로</li>
          </ul>
        </div>
        <ReviewItem />
      </React.Fragment>
    );
  }
}
