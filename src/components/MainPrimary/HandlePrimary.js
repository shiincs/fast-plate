import React, { Component } from 'react';
import HandleSearch from './HandleSearch';
import AppStore from './MainImg/AppStore.png';
import GooglePlay from './MainImg/GooglePlay.png';
import EatDeal from './MainImg/EatDeal.png';
import hero from './MainImg/hero.jpg';

export default class HandlePrimary extends Component {
  render() {
    return (
      <div className="primary">
        <img src={hero} className="primary-background" alt="background" />
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
      <div className="main-title">
        <p>솔직한 리뷰, 믿을 수 있는 평점!</p>
        <h1>망고플레이트</h1>
      </div>
    );
  }
}

class HandleBadges extends Component {
  render() {
    return (
      <div className="main-badges">
        <a href="#" className="eat-deal">
          <img src={EatDeal} alt="EatDeal-Logo" />
        </a>
        <a
          href="https://play.google.com/store/apps/details?id=com.mangoplate"
          className="google-play"
        >
          <img src={GooglePlay} alt="GooglePlay-Logo" />
        </a>
        <a
          href="https://itunes.apple.com/app/id628509224"
          className="app-store"
        >
          {' '}
          <img src={AppStore} alt="AppStore-Logo" />{' '}
        </a>
      </div>
    );
  }
}
