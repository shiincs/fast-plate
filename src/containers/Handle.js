import React, { Component } from 'react';
import HandlePrimary from '../components/HandlePrimary/HandlePrimary';
import HandleSecondary from '../components/HandleSecondary/HandleSecondary';

export default class Handle extends Component {
  render() {
    return (
      <div>
        <HandlePrimary />
        <HandleSecondary />
      </div>
    );
  }
}
