import React, { Component } from 'react';
import PostDetail from '../containers/PostDetail';

export default class PostDetailPage extends Component {
  render() {
    const { match } = this.props;
    const restaurantId = match.params.rKeyword;
    return <PostDetail restaurantId={restaurantId} />;
  }
}
