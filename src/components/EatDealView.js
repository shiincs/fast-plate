import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './EatDealView.module.scss';

const cx = classNames.bind(styles);

export default class EatDealView extends Component {
  render() {
    return (
      <article className={cx('eatDealPage')}>
        <ul className={cx('list')}>
          <li className={cx('item')}>
            <figure className={cx('figure')}>
              <div className={cx('imageWrapper')}>
                <img
                  className={cx('image')}
                  src="https://mp-seoul-image-production-s3.mangoplate.com/eat_deal_pictures/ftnsdkkng4cbhrqe.png"
                  alt=""
                />
                <div className={cx('imageInfo')}>
                  <div className={cx('leftInfo')}>
                    <span className={cx('saleRate')}>10%</span>
                  </div>
                  <div className={cx('rightInfo')}>
                    <span className={cx('originPrice')}>￦ 3,300</span>
                    <span className={cx('salePrice')}>￦ 3,000</span>
                  </div>
                </div>
              </div>
              <figcaption className={cx('content')}>
                <h2 className={cx('restaurantName')}>[선릉] 샐러디 선릉점</h2>
                <span className={cx('title')}>칠리베이컨 웜랩</span>
                <p className={cx('caution')}>
                  ※ 구매 전 전용 지점을 꼭 확인해주세요.
                </p>
              </figcaption>
            </figure>
          </li>
        </ul>
      </article>
    );
  }
}
