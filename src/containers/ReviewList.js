import React, { Component } from 'react';

import ReviewListView from '../components/ReviewListView';
export default class ReviewList extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     pk: null,
  //     author: '',
  //     restaurant: '',
  //     rate: '',
  //     content: '',
  //     postimage_posts: [],
  //   };
  // }

  // async componentDidMount() {
  //   const { data: result } = await api.get('/api/posts/list/');
  //   console.log(result);
  //   this.setState({
  //     ...result,
  //   });
  // }

  render() {
    return (
      <React.Fragment>
        <ReviewListView />
      </React.Fragment>
    );
  }
}
