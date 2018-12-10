import React, { Component } from 'react';
import api from '../api';
import ReviewListView from '../components/ReviewListView';
export default class ReviewList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postset: [],
    };
  }

  async componentDidMount() {
    const { postset } = this.props;
    // console.log(restaurantId);
    // const {
    //   data: { post_set },
    // } = await api.get(`/api/restaurants/list/${restaurantId}`);
    // this.setState({
    //   post_set,
    // });
  }

  render() {
    const { postset } = this.state;
    const reviewList = postset.map(r => ({
      content: r.content,
      username: r.author.username,
      rate: r.rate,
    }));

    return (
      <React.Fragment>
        <ReviewListView reviewList={reviewList} />
      </React.Fragment>
    );
  }
}
