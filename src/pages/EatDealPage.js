import React, { Component } from 'react';
import EatDeal from '../containers/EatDeal';
import { Helmet } from 'react-helmet';
export default class EatDealPage extends Component {
  render() {
    return (
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>EAT딜</title>
        </Helmet>
        <EatDeal />
      </>
    );
  }
}
