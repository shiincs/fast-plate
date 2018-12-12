import React, { Component } from 'react';
import AppStore from './MainImg/AppStore.png';
import GooglePlay from './MainImg/GooglePlay.png';
import EatDeal from './MainImg/EatDeal.png';
import styles from './MainHeroView.module.scss';
import classNames from 'classnames/bind';
import hero1 from './MainImg/heroBg1.jpg';
import hero2 from './MainImg/heroBg2.jpg';
import hero3 from './MainImg/heroBg3.jpg';
import MainSearchView from '../MainSearchView/MainSearchView';

const cx = classNames.bind(styles);

export default class MainHeroView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heroArr: [hero1, hero2, hero3],
    };
  }
  render() {
    const { heroArr } = this.state;
    const heroBg = {
      backgroundColor: '#fff',
      backgroundImage: `url(${
        heroArr[Math.floor(Math.random() * heroArr.length)]
      })`,
    };
    return (
      <section className={cx('primary')}>
        <div className={cx('primaryBackground')} style={heroBg} />
        <HandleTitle />
        <MainSearchView />
        <HandleBadges />
      </section>
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
      <aside className={cx('badges')}>
        <a href="/#" className={cx('eatDeal')}>
          <img src={EatDeal} alt="EatDeal-Logo" />
        </a>
        <div className={cx('linkToApp')}>
          <a
            href="https://play.google.com/store/apps/details?id=com.mangoplate"
            className={cx('googlePlay')}
          >
            <img src={GooglePlay} alt="GooglePlay-Logo" />
          </a>
          <a
            href="https://itunes.apple.com/app/id628509224"
            className={cx('appStore')}
          >
            {' '}
            <img src={AppStore} alt="AppStore-Logo" />{' '}
          </a>
        </div>
      </aside>
    );
  }
}
