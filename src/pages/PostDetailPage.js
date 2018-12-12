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
    // match는 App에서 라우트 path에 변수 :rKeyword에 담긴 정보들
    const { match } = this.props;
    const { location } = this.props;

    const restaurantId = match.params.rKeyword;
    return (
      <PostDetail
        key={restaurantId}
        restaurantId={restaurantId}
        location={location}
      />
    );
  }
}

export default withPage(PostDetailPage);
