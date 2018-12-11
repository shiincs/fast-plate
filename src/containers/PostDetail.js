import React, { Component } from 'react';
import api from '../api';
import PostDetailView from '../components/PostDetailView';
import { setRecentView } from '../localStorage';

import hero1 from '../components/MainHeroView/MainImg/hero1.jpg';
import hero2 from '../components/MainHeroView/MainImg/hero2.jpg';
import hero3 from '../components/MainHeroView/MainImg/hero3.jpg';
import hero4 from '../components/MainHeroView/MainImg/hero4.jpg';

export default class PostDetail extends Component {
  /* 
    여기에서 식당리스트 정보를 서버에서 받아와서 상태를 관리한다.
    SearchView(PC)에 내려주고,
    SearchListView와 SearchMapView 까지 상태를 내려서 정보를 표시해준다.
  */
  constructor(props) {
    super(props);
    this.state = {
      restaurantId: null,
      want_num: 0,
      restaurants: {},
      detailpics: [hero1, hero2, hero3, hero4],
      comments: ['인덱스1', '인덱스2', '인덱스3', '인덱스4'],
      wannaGo: false,
      post_set: [],
    };
  }

  async componentDidMount() {
    const { restaurantId } = this.props;
    // 현재 api 서버에서 CORS 관련 문제 발생 (요청 불가)
    // proxy 우회해서 사용은 가능한 상태

    //PostDetailPage에서 받아온 match 안에 id 값
    const {
      data: { want_num, post_set, ...rest },
    } = await api.get(`/api/restaurants/list/${restaurantId}`);
    console.log(post_set);
    this.setState({
      restaurants: { want_num, ...rest },
      want_num: want_num,
      post_set: post_set,
    });

    // 해당 레스토랑 정보를 localStorage에 저장 (최근 본 맛집에서 사용)
    const {
      pk,
      name,
      address,
      food_type,
      rate_average,
    } = this.state.restaurants;
    const restData = {
      pk,
      name,
      address,
      food_type,
      rate_average,
    };

    setRecentView(restData);
    // let tempArr = [localStorage.getItem('recent')];
    // console.log(tempArr);
    // console.log(localStorage.getItem('recent').constructor);
    // console.log(Object.values(localStorage).constructor);

    // const localArr = Object.keys(localStorage)
    //   .map(item => item.split('-'))
    //   .map(item => item[1]);
    // console.log(
    //   Object.keys(localStorage).find(item => item.includes(restaurantId))
    // );
    // if (localArr.includes(restaurantId)) {
    //   localStorage.removeItem(
    //     Object.keys(localStorage).find(item => item.includes(restaurantId))
    //   );
    // }
    // localStorage.setItem(
    //   `${new Date()}-${restaurantId}`,
    //   JSON.stringify(this.state.restaurants)
    // );
  }

  async handleCount(pk, num) {
    const res = await api.patch(`/api/restaurants/list/${pk}`, {
      want_num: num + 1,
    });
  }

  handleWannaGo() {
    this.setState(prevState => {
      return {
        wannaGo: !prevState.wannaGo,
      };
    });
  }

  render() {
    const {
      restaurantId,
      restaurants,
      detailpics,
      comments,
      wannaGo,
      post_set,
    } = this.state;

    const { restaurants, detailpics, comments, wannaGo } = this.state;

    return (
      <React.Fragment>
        <PostDetailView
          postset={post_set}
          restaurantId={restaurantId}
          restaurants={restaurants}
          detailpics={detailpics}
          comments={comments}
          handleCount={this.handleCount}
          wannaGo={wannaGo}
          handleWannaGo={() => this.handleWannaGo()}
        />
      </React.Fragment>
    );
  }
}
