import EatDealDetailView from '../components/EatDealDetailView';
import React, { Component } from 'react';
import api from '../api';

export default class EatDealDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      eatDealDetail: {},
    };
  }
  async componentDidMount() {
    const { pk } = this.props;
    const res = await api.get(`/api/eatdeals/list/${pk}`);
    this.setState({
      eatDealDetail: { ...res.data },
    });
  }

  render() {
    const { eatDealDetail } = this.state;
    console.log(eatDealDetail);
    return (
      <>
        <EatDealDetailView eatDealDetail={eatDealDetail} />
      </>
    );
  }
}
