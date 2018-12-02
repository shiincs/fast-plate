import React, { Component } from 'react';
import food6 from './SecondaryImg/food6.jpg';

export default class HandleListSix extends Component {
  render() {
    return (
      <div className="secondary-second__list">
        <img src={food6} alt="food6" />
        <p>오믈렛 맛집 베스트</p>
      </div>
    );
  }
}
