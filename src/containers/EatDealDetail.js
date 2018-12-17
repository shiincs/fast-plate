import EatDealDetailView from '../components/EatDealDetailView';
import React, { Component } from 'react';
import api from '../api';
import { Helmet } from 'react-helmet';

export default class EatDealDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      eatDealDetail: {},
      loading: true,
    };
  }
  async componentDidMount() {
    const { pk } = this.props;
    const res = await api.get(`/api/eatdeals/list/${pk}`);
    this.setState({
      eatDealDetail: { ...res.data },
      loading: false,
    });
  }

  render() {
    const { eatDealDetail, loading } = this.state;

    return (
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{eatDealDetail.deal_name}</title>
        </Helmet>
        <EatDealDetailView eatDealDetail={eatDealDetail} loading={loading} />
      </>
    );
  }
}
