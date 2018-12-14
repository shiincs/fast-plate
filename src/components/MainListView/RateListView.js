import React, { Component } from 'react';
import styles from './RateListView.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

export default class RateListView extends Component {
  render() {
    return (
      <div className={cx('restaurants-list-wrap')}>
        <h2 className={cx('list-title')}>평점이 높은 인기 식당</h2>
        <ul className={cx('restaurants-list')}>
          <li className={cx('restaurants-item')}>
            <figure className={cx('restaurant_inner_wrap')}>
              <div className={cx('thumb')}>
                <img className={cx('image')} src="" alt="" />
              </div>
              <figcaption>
                <h3 className={cx('item-title')}>파씨오네</h3>
                <span className={cx('point')}>4.8</span>
                <p className={cx('etc')}>신사/압구정 - 프랑스 음식</p>
              </figcaption>
            </figure>
          </li>
        </ul>
      </div>
    );
  }
}
