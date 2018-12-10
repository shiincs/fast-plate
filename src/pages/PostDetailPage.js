import React, { Component } from 'react';
import PostDetail from '../containers/PostDetail';
import { withPage } from '../contexts/PageContext';

class PostDetailPage extends Component {
  componentDidMount() {
    this.props.handlePageOpen('detail');
  }

  componentWillUnmount() {
    this.props.handlePageClose('detail');
  }

  render() {
    const { match } = this.props;
    const restaurantId = match.params.rKeyword;
    return <PostDetail key={restaurantId} restaurantId={restaurantId} />;
  }
}

export default withPage(PostDetailPage);
