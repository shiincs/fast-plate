import React, { Component } from 'react';
import api from '../api';
import PostDetailView from '../components/PostDetailView';
import food2 from '../components/HandleSecondary/SecondaryImg/food2.jpg';
import food3 from '../components/HandleSecondary/SecondaryImg/food3.jpg';
import food4 from '../components/HandleSecondary/SecondaryImg/food4.jpeg';
import food5 from '../components/HandleSecondary/SecondaryImg/food5.jpg';

export default class PostDetail extends Component {
  /* 
    여기에서 식당리스트 정보를 서버에서 받아와서 상태를 관리한다.
    SearchView(PC)에 내려주고,
    SearchListView와 SearchMapView 까지 상태를 내려서 정보를 표시해준다.
  */
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],
      detailpics: [food2, food3, food4, food5],
    };
  }

  async componentDidMount() {
    // 현재 api 서버에서 CORS 관련 문제 발생 (요청 불가)
    // proxy 우회해서 사용은 가능한 상태
    const { data: restaurants } = await api.get('/api/restaurants/list/1');
    console.log(restaurants);
    this.setState({
      restaurants: { ...restaurants },
    });
  }

  render() {
    const { restaurants, detailpics } = this.state;
    return (
      <React.Fragment>
        <PostDetailView restaurants={restaurants} detailpics={detailpics} />
      </React.Fragment>
    );
  }
}
