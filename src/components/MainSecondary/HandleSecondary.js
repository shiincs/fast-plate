import React, { Component } from 'react';
import HandleListOne from './HandleListOne';
import HandleListTwo from './HandleListTwo';
import HandleListThree from './HandleListThree';
import HandleListFour from './HandleListFour';
import HandleListFive from './HandleListFive';
import HandleListSix from './HandleListSix';

export default class HandleSecondary extends Component {
  render() {
    return (
      <div className="secondary">
        <h2>믿고 보는 맛집 리스트</h2>
        <div className="secondary-first">
          <HandleListOne />
          <HandleListTwo />
          <HandleListThree />
        </div>
        <div className="secondary-second">
          <HandleListFour />
          <HandleListFive />
          <HandleListSix />
        </div>
      </div>
    );
  }
}
