import React, { Component } from 'react';
import api from '../api';
import PostDetailView from '../components/PostDetailView';
import food1 from '../components/HandleSecondary/SecondaryImg/food1.jpg';
import food2 from '../components/HandleSecondary/SecondaryImg/food2.jpg';
import food3 from '../components/HandleSecondary/SecondaryImg/food3.jpg';
import food4 from '../components/HandleSecondary/SecondaryImg/food4.jpeg';

export default class PostDetail extends Component {
  /* 
    여기에서 식당리스트 정보를 서버에서 받아와서 상태를 관리한다.
    SearchView(PC)에 내려주고,
    SearchListView와 SearchMapView 까지 상태를 내려서 정보를 표시해준다.
  */
  constructor(props) {
    super(props);
    this.state = {
      want_num: 0,
      restaurants: {},
      detailpics: [food1, food2, food3, food4],
      comments: ['인덱스1', '인덱스2', '인덱스3', '인덱스4'],
    };
  }

  async componentDidMount() {
    const { restaurantId } = this.props;
    // 현재 api 서버에서 CORS 관련 문제 발생 (요청 불가)
    // proxy 우회해서 사용은 가능한 상태

    //PostDetailPage에서 받아온 match 안에 id 값
    const {
      data: { want_num, ...rest },
    } = await api.get(`/api/restaurants/list/${restaurantId}`);
    this.setState({
      restaurants: { want_num, ...rest },
      want_num: want_num,
    });
  }

  async handleCount(pk, num) {
    const res = await api.patch(`/api/restaurants/list/${pk}`, {
      want_num: num + 1,
    });
  }

  render() {
    const { restaurants, detailpics, comments } = this.state;
    return (
      <React.Fragment>
        <PostDetailView
          restaurants={restaurants}
          detailpics={detailpics}
          comments={comments}
          handleCount={this.handleCount}
        />
      </React.Fragment>
    );
  }
}
