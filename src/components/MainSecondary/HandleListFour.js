import React, { Component } from 'react';
import food4 from './SecondaryImg/food4.jpeg';

export default class HandleListFour extends Component {
  render() {
    return (
      <div className="secondary-second__list">
        <img src={food4} alt="food4" />
        <p>명동 맛집 베스트</p>
      </div>
    );
  }
}
