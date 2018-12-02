import React, { Component } from 'react';
import food2 from './SecondaryImg/food2.jpg';

export default class HandleListTwo extends Component {
  render() {
    return (
      <div className="secondary-first__list">
        <img src={food2} alt="food2" />
        <p>이주의 EAT딜 베스트</p>
      </div>
    );
  }
}
