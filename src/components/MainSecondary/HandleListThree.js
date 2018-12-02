import React, { Component } from 'react';
import food3 from './SecondaryImg/food3.jpg';

export default class HandleListThree extends Component {
  render() {
    return (
      <div className="secondary-first__list">
        <img src={food3} alt="food3" />
        <p>성북구 양식 맛집 베스트</p>
      </div>
    );
  }
}
