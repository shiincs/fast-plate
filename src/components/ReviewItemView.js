import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './ReviewItemView.module.scss';
const cx = classNames.bind(styles);

export default class ReviewItemView extends Component {
  render() {
    const { reviewList } = this.props;
    return (
      <>
        {reviewList.map(r => (
          <div key={r.pk} className={cx('reveiw-content')}>
            <figure>
              <div className={cx('user-thumb')}>
                <img src="" alt="" />
              </div>
              <figcaption>{r.author.username}</figcaption>
            </figure>
            <div className={cx('review-wrapper')}>
              <span className={cx('date')}>2018-10-20</span>
              <div className={cx('review')}>{r.content}</div>
              <div className={cx('list-thumb-photos')}>
                <button className={cx('button-thumb')} />
                <button className={cx('button-thumb')} />
                <button className={cx('button-thumb')} />
              </div>
            </div>
            <div className={cx('icon-rating')}>
              <strong
                className={cx(
                  { bad: r.rate === 1 },
                  { ok: r.rate === 3 },
                  { good: r.rate === 5 }
                )}
              >
                {r.rate === 1
                  ? '별로'
                  : r.rate === 3
                  ? '괜찮다'
                  : r.rate === 5
                  ? '맛있다'
                  : 'null'}
              </strong>
            </div>
          </div>
        ))}
      </>
    );
  }
}
