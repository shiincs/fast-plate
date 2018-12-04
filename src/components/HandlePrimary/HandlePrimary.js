import React, { Component } from 'react';
import HandleSearch from './HandleSearch';
import AppStore from './MainImg/AppStore.png';
import GooglePlay from './MainImg/GooglePlay.png';
import EatDeal from './MainImg/EatDeal.png';
import styles from './HandlePrimary.module.scss';
import classNames from 'classnames/bind';
import hero1 from './MainImg/hero1.jpg';
import hero2 from './MainImg/hero2.jpg';
import hero3 from './MainImg/hero3.jpg';
import hero4 from './MainImg/hero4.jpg';

const cx = classNames.bind(styles);

export default class HandlePrimary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heroArr: [hero1, hero2, hero3, hero4],
    };
  }
  render() {
    return (
      <div className={cx('primary')}>
        <img
          src={this.state.heroArr[Math.floor(Math.random() * 4)]}
          className={cx('primaryBackground')}
          alt="background"
        />
        <HandleTitle />
        <HandleSearch />
        <HandleBadges />
      </div>
    );
  }
}

class HandleTitle extends Component {
  render() {
    return (
      <div className={cx('mainTitle')}>
        <p>솔직한 리뷰, 믿을 수 있는 평점!</p>
        <h1>망고플레이트</h1>
      </div>
    );
  }
}

class HandleBadges extends Component {
  render() {
    return (
      <div>
        <a href="#" className={styles.eatDeal}>
          <img src={EatDeal} alt="EatDeal-Logo" />
        </a>
        <a
          href="https://play.google.com/store/apps/details?id=com.mangoplate"
          className={styles.googlePlay}
        >
          <img src={GooglePlay} alt="GooglePlay-Logo" />
        </a>
        <a
          href="https://itunes.apple.com/app/id628509224"
          className={styles.appStore}
        >
          {' '}
          <img src={AppStore} alt="AppStore-Logo" />{' '}
        </a>
      </div>
    );
  }
}
