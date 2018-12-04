import React, { Component } from 'react';
import PostDetail from '../containers/PostDetail';
import Layout from '../components/Layout';

export default class PostDetailPage extends Component {
  render() {
    return (
      <Layout>
        <PostDetail />
      </Layout>
    );
  }
}
