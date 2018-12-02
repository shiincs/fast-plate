import React, { Component } from 'react';
import AppStore from './MainImg/AppStore.png';
import GooglePlay from './MainImg/GooglePlay.png';
import EatDeal from './MainImg/EatDeal.png';

export default class HandleBadges extends Component {
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
