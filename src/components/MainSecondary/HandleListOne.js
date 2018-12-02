import React, { Component } from 'react';
import food1 from './SecondaryImg/food1.jpg';

export default class HandleListOne extends Component {
  render() {
    return (
      <div className="secondary-first__list">
        <img src={food1} alt="food1" />
        <p>곱창전골 맛집 베스트</p>
      </div>
    );
  }
}
