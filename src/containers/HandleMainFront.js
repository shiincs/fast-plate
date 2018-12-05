import React, { Component } from 'react';
import HandlePrimary from '../components/HandlePrimary/HandlePrimary';
import HandleSecondary from '../components/HandleSecondary/HandleSecondary';

export default class HandleMainFront extends Component {
  render() {
    return (
      <div>
        <HandlePrimary />
        <HandleSecondary />
      </div>
    );
  }
}
