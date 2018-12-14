import React, { Component } from 'react';
import EatDealView from '../components/EatDealView';

import api from '../api';

export default class EatDeal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      eatDeal: [],
    };
  }
  async componentDidMount() {
    const res = await api.get('/api/eatdeals/list/');
    // console.log(res.data.results);
    this.setState({
      eatDeal: [...res.data.results],
    });
  }

  render() {
    const { eatDeal } = this.state;
    console.log(eatDeal);
    return (
      <>
        <EatDealView eatDeal={eatDeal} />
      </>
    );
  }
}
