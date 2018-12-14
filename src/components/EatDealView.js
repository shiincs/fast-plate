import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './EatDaalView.module.scss';

const cx = classNames.bind(styles);

export default class EatDealView extends Component {
  render() {
    return (
      <>
        <ul>
          <li>
            <div classNames={cx('eatdeal-item')}>
              <img src="" alt="" />
              <div classNames={cx('caption')}>
                <h2>[선릉] 샐러디 선릉점</h2>
                <span>칠리베이컨 웜랩</span>
                <p>※ 구매 전 전용 지점을 꼭 확인해주세요.</p>
              </div>
            </div>
          </li>
        </ul>
      </>
    );
  }
}
