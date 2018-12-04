import React, { Component } from 'react';
import HeaderView from './HeaderView';
import FooterView from './FooterView';
export default class Layout extends Component {
  render() {
    return (
      <div>
        <HeaderView />
        {this.props.children}
        <FooterView />
      </div>
    );
  }
}
