import React, { Component } from 'react';
import food5 from './SecondaryImg/food5.jpg';

export default class HandleListFive extends Component {
  render() {
    return (
      <div className="secondary-second__list">
        <img src={food5} alt="food5" />
        <p>펍 베스트</p>
      </div>
    );
  }
}
