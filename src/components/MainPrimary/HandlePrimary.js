import React, { Component } from 'react';
import HandleTitle from './HandleTitle';
import HandleSearch from './HandleSearch';
import HandleBadges from './HandleBadges';
import hero from './MainImg/hero.jpg';

export default class HandlePrimary extends Component {
  render() {
    return (
      <div className="primary">
        <img src={hero} class="primary-background" alt="background" />
        <HandleTitle />
        <HandleSearch />
        <HandleBadges />
      </div>
    );
  }
}
